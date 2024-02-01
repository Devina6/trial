import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'></div>
            <h5>{props.title}</h5>
            <div className='expense-item__price'>{props.amount}</div>       
            </Card>
    )
}

export default ExpenseItem