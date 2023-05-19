//import ExpenseItem from './components/ExpenseItem'
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Refridgerator',
    amount: 799,
    date: new Date(2019, 7, 19),
  },
  {
    id: 'e6',
    title: 'headphone',
    amount: 199,
    date: new Date(2020, 1, 25),
  },
  {
    id: 'e7',
    title: 'Bike Helmet',
    amount: 399,
    date: new Date(2019, 3, 2),
  },
  {
    id: 'e8',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 14),
  },
];

const App = () => {
  const[expenses,setExpenses]= useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}
export default App;


