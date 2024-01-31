import ExpenseItem from "./components/ExpenseItem"; 

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(),
      title: "new car",
      amount: "RS 4cr",
      location: "delhi",
    },
    {
      id: "e1",
      date: new Date(),
      title: "decoratives",
      amount: "RS 1000",
      location: "delhi",
    },
    {
      id: "e1",
      date: new Date(),
      title: "electricity bill",
      amount: "RS 8000",
      location: "delhi",
    },
    {
      id: "e1",
      date: new Date(),
      title: "domestic props",
      amount: "RS 10000",
      location: "delhi",
    }
  ];
  return (
    <div className="App">
      {
      expenses.map((expense) => { 
        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} location={expense.location} />
})
}
    </div>
  );
}

export default App;
