import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
    const [edit,setEdit]=useState(props.amount) 

    const handleCLick=(e)=>{
        e.target.parentNode.remove()
    }

    const handleEdit=()=>{
        setEdit("$100")
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />cd
            <div className='expense-item__description'></div>
            <h5>{props.title}</h5>
            <div className='expense-item__price'>{edit}</div> 
            <button onClick={handleCLick}>Delete</button> 
            <button onClick={handleEdit}>Edit</button>     
        </Card>
    )
}

export default ExpenseItem