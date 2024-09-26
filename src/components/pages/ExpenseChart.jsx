import React, { useContext, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend, ArcElement } from 'chart.js';
import { ExpenseContext } from '../ExpenseContext';
import './chart-container.css';

ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ArcElement
);

const ExpenseChart = () => {
    const { expenses } = useContext(ExpenseContext);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const filterExpenses = (month, category) => {
        return expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            const isSameMonth = month ? expenseDate.getMonth() === parseInt(month) && expenseDate.getFullYear() === new Date().getFullYear() : true;
            const isSameCategory = category ? expense.category === category : true;
            return isSameMonth && isSameCategory;
        });
    };

    const prepareMonthlyData = () => {
        const filteredExpenses = filterExpenses(selectedMonth, selectedCategory);
        const monthlyData = Array(12).fill(0);
        filteredExpenses.forEach(expense => {
            const month = new Date(expense.date).getMonth();
            monthlyData[month] += expense.amount;
        });

        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Expenses per Month',
                data: monthlyData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        };
    };

    const prepareCategoryData = () => {
        const filteredExpenses = filterExpenses(selectedMonth, selectedCategory);
        const categoryTotals = filteredExpenses.reduce((acc, expense) => {
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
            return acc;
        }, {});

        return {
            labels: Object.keys(categoryTotals),
            datasets: [{
                data: Object.values(categoryTotals),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 71, 0.6)',
                    'rgba(173, 216, 230, 0.6)',
                    'rgba(240, 128, 128, 0.6)',
                    'rgba(144, 238, 144, 0.6)',
                ],
            }]
        };
    };

    if (expenses.length === 0) {
        return <div>No expenses available.</div>;
    }

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <div className="mb-4">
                <h2 className="text-lg font-bold text-center">Expense Charts</h2>
                <div className="flex justify-between mb-2 flex-wrap">
                    <select onChange={(e) => setSelectedMonth(e.target.value)} className="border border-gray-300 p-2 rounded w-full md:w-auto mb-2">
                        <option value="">All Months</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                        ))}
                    </select>
                    <select onChange={(e) => setSelectedCategory(e.target.value)} className="border border-gray-300 p-2 rounded w-full md:w-auto mb-2">
                        <option value="">All Categories</option>
                        {Array.from(new Set(expenses.map(expense => expense.category))).map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="chart-container">
                    <h3 className="text-md font-semibold text-center">Monthly Expenses</h3>
                    <Line data={prepareMonthlyData()} options={{ responsive: true, maintainAspectRatio: false }} height={400} />
                </div>
                <div className="chart-container">
                    <h3 className="text-md font-semibold text-center">Category Breakdown</h3>
                    <Pie data={prepareCategoryData()} options={{ responsive: true, maintainAspectRatio: false }} height={400} />
                </div>
            </div>
        </div>
    );
};

export default ExpenseChart;
