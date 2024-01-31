import './ExpenseItem.css'

function ExpenseItem(props) {
    //const d= new Date()
    //const expensetitle = "Car insurance"
    //const amount = 'RS 2000'
    //const location = "delhi"
    return (
        <div className="container">
            <h2>{props.date.toDateString()}</h2>
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                <h5>{props.title}</h5>
                <h5>{props.amount}</h5>
                <h5>{props.location}</h5>
            </div>
    </div>
    )
}

export default ExpenseItem