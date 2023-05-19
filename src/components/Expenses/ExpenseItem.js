import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js';


const ExpenseItem = Props => {

    return(
    <li>   
    <Card className="expense-item">
        <ExpenseDate date={Props.date}/>
        <div className="expense-item__description">
            <h2>{Props.title}</h2>
        <div className="expense-item__price">${Props.amount}</div>
        </div>
    </Card>
    </li>
 );
} 

export default ExpenseItem;