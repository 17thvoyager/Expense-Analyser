import Card from '../UI/Card.js'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart.js'
import {useState} from 'react'



const Expenses = (Props) => {
    const [filteredYear,setFilteredYear] = useState('2019');

    const filterChangeHandler = year => {
        setFilteredYear(year);    
    }

    const filteredExpenses = Props.expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });


    return (
    <div>
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} Filter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses = {filteredExpenses}/>
        </Card>
    </div>
    )
}

export default Expenses;

