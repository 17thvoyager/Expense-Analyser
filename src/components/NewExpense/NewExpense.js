import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

const NewExpense = (Props) => {

    const[isEditing,setIsEditing] = useState(false);
    
    const saveExpenseDataHandler = enteredExpenseData => {
        const expeneseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        Props.onAddExpense(expeneseData);
        setIsEditing(false);

    }


    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }



    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;
