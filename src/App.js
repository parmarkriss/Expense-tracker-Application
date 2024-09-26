import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/HeaderandFooter/Layout';
import ExpenseForm from './components/pages/ExpenseForm';
import ExpenseProvider from './components/ExpenseContext';
import Home from './components/pages/Home';
import ExpenseList from './components/pages/ExpenseList';
import ExpenseChart from './components/pages/ExpenseChart';
import ExpenseEdit from './components/pages/ExpenseEdit';


function App() {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/expense' element={<ExpenseForm />}></Route>
            <Route path='/View-Statistics' element={<ExpenseList />}></Route>
            <Route path='/Viewchart' element={<ExpenseChart />}></Route>
            <Route path='/edit-expense/:id' element={<ExpenseEdit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
