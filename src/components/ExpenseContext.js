import React, { createContext, useState, useEffect } from 'react';

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
