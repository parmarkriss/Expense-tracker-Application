import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white py-10 px-6 sm:px-12 md:px-24 lg:px-36">
      
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Your Expense Tracker</h1>
        <p className="text-lg text-gray-700 mb-8">
          Keep track of your daily, monthly, and yearly expenses with ease. Manage your spending, 
          categorize expenses, and view detailed statistics and comparisons with just a few clicks.
        </p>

      
        <div className="flex justify-center gap-4">
          <Link to="/expense">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">
              Manage Expenses
            </button>
          </Link>
          <Link to="/View-Statistics">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 transition">
              View Statistics
            </button>
          </Link>
        </div>
      </section>

      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Features of the Expense Tracker</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-blue-100 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Add & Manage Expenses</h3>
            <p className="text-gray-700">
              Easily add new expense entries, categorize them, and keep track of all your spending in one place.
            </p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Real-Time Filtering & Sorting</h3>
            <p className="text-gray-700">
              View, filter, and sort your expenses in real-time for better financial management.
            </p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Visual Statistics</h3>
            <p className="text-gray-700">
              Track your spending habits over time with visual charts and monthly comparisons.
            </p>
          </div>
        </div>
      </section>

      
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-3">Step 1: Add Your Expenses</h3>
            <p className="text-gray-700">
              Start by adding an expense with the amount, date, category, and payment method. 
              You can also add a brief description for better clarity.
            </p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-3">Step 2: View and Filter</h3>
            <p className="text-gray-700">
              Use real-time filtering to view expenses by category, date, or amount. Sort your expenses 
              to get a clearer picture of your spending habits.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-3">Step 3: Visualize with Charts</h3>
            <p className="text-gray-700">
              View your expenses in easy-to-read charts. Analyze your monthly spending and break down 
              expenses by category to see where your money goes.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-3">Step 4: Stay In Control</h3>
            <p className="text-gray-700">
              With regular updates and detailed statistics, you’ll have full control over your finances, 
              helping you stay on budget.
            </p>
          </div>
        </div>
      </section>

     
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="text-gray-800 text-lg italic mb-4">
              "This app has helped me manage my expenses better than ever before. The real-time filtering is a lifesaver!"
            </p>
            <p className="text-gray-700 font-bold">- Sarah, Freelancer</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="text-gray-800 text-lg italic mb-4">
              "The charts and statistics give me a clear view of my monthly spending, and the auto-suggestions are fantastic!"
            </p>
            <p className="text-gray-700 font-bold">- John, Small Business Owner</p>
          </div>
        </div>
      </section>

     
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to Take Control of Your Finances?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Sign up today and start tracking your expenses in a smarter way. Gain insights and stay on top of your spending!
        </p>
        <Link>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
