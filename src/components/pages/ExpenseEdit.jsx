import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ExpenseContext } from '../ExpenseContext';

const ExpenseEdit = () => {
  const { id } = useParams();
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const navigate = useNavigate();
  
  // State for form fields
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Find the expense to edit by its ID
  useEffect(() => {
    const expenseToEdit = expenses.find((expense) => expense.id === parseInt(id));
    if (expenseToEdit) {
      setAmount(expenseToEdit.amount);
      setDescription(expenseToEdit.description);
      setDate(expenseToEdit.date);
      setCategory(expenseToEdit.category);
      setPaymentMethod(expenseToEdit.paymentMethod);
    }
  }, [id, expenses]);

  // Get unique category suggestions for the datalist
  const getCategorySuggestions = () => {
    const categories = expenses.map((expense) => expense.category);
    return [...new Set(categories)];
  };

  // Handle form submission to update the expense
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedExpense = {
      id: parseInt(id),
      amount,
      description,
      date,
      category,
      paymentMethod,
    };

    const updatedExpenses = expenses.map((expense) =>
      expense.id === parseInt(id) ? updatedExpense : expense
    );
    
    setExpenses(updatedExpenses);
    navigate('/View-Statistics'); 
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-gray-100 shadow-md rounded-md space-y-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Edit Expense</h2>
        
        <div>
          <label className="block mb-2 text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Category</label>
          <input
            type="text"
            list="category-suggestions"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <datalist id="category-suggestions">
            {getCategorySuggestions().map((cat, idx) => (
              <option key={idx} value={cat} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Update Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseEdit;
