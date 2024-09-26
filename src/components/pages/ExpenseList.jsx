import React, { useContext, useState, useEffect } from 'react';
import { ExpenseContext } from '../ExpenseContext';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const expensesPerPage = 5;

  const filterExpenses = (category, start, end, search, paymentMethod) => {
    return expenses.filter(expense => {
      const isSameCategory = category ? expense.category === category : true;
      const isWithinDateRange = (!start || new Date(expense.date) >= new Date(start)) &&
        (!end || new Date(expense.date) <= new Date(end));
      const matchesSearchTerm = search ? expense.description.toLowerCase().includes(search.toLowerCase()) : true;
      const isSamePaymentMethod = paymentMethod ? expense.paymentMethod === paymentMethod : true;
      return isSameCategory && isWithinDateRange && matchesSearchTerm && isSamePaymentMethod;
    });
  };

  const filteredExpenses = filterExpenses(selectedCategory, startDate, endDate, searchTerm, selectedPaymentMethod);
  const totalPages = Math.ceil(filteredExpenses.length / expensesPerPage);
  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = filteredExpenses.slice(indexOfFirstExpense, indexOfLastExpense);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prevPage => prevPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, startDate, endDate, searchTerm, selectedPaymentMethod]);

  const paymentMethods = Array.from(new Set(expenses.map(expense => expense.paymentMethod)));

  const handleResetFilters = () => {
    setSelectedCategory('');
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
    setSelectedPaymentMethod('');
    setCurrentPage(1);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md min-h-96 overflow-y-auto">
      <div className="flex flex-col md:flex-row mb-4 justify-center">
        <div className="md:flex-2 md:mr-4">
          <div className="flex flex-col md:flex-row mb-2 mt-5">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 p-2 rounded mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
            >
              <option value="">All Categories</option>
              {Array.from(new Set(expenses.map(expense => expense.category))).map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>

            <select
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="border border-gray-300 p-2 rounded mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
            >
              <option value="">All Payment Methods</option>
              {paymentMethods.map((method, index) => (
                <option key={index} value={method}>{method}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search by description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full md:w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row mb-2">
            <div className="flex items-center mb-2 md:mr-2">
              <label className="mr-2">Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 p-2 rounded mr-4"
              />
            </div>
            <div className="flex items-center mb-2">
              <label className="mr-2">End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>

        <div className="md:flex-initial md:ml-4 mt-5">
          <button
            onClick={handleResetFilters}
            className="bg-red-500 text-white p-2 rounded mb-4 w-full"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className="overflow-x-auto"> {/* Added wrapper for horizontal scrolling */}
        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-16">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Payment Method</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentExpenses.length > 0 ? (
              currentExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{expense.amount}</td>
                  <td className="border border-gray-300 px-4 py-2">{expense.description}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(expense.date).toLocaleDateString()}</td>
                  <td className="border border-gray-300 px-4 py-2">{expense.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{expense.paymentMethod}</td>
                  <td className="border border-gray-300 px-4 py-2">
                   <Link to={`/edit-expense/${expense.id}`}>
                   <button
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                   </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center border border-gray-300 px-4 py-2">No expenses found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="mt-4 text-center">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default ExpenseList;
