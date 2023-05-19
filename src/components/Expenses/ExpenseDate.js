import './ExpenseDate.css'

const ExpenseDate = Props => {
    const date = Props.date.toLocaleString( 'en-us', { day: '2-digit'});
    const month = Props.date.toLocaleString( 'en-us', { month: 'long'});
    const year = Props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
    );

}

export default ExpenseDate;

