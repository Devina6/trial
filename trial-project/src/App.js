import React , { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'


let dummyExpenses = [
  {
    id: "e1",
    date: new Date(2023,2,3),
    title: "car",
    amount: "4cr",
    location: "delhi",
  },
  {
    id: "e2",
    date: new Date(2020,1,18),
    title: "decoratives",
    amount: "1000",
    location: "delhi",
  },
  {
    id: "e3",
    date: new Date(2019,0,10),
    title: "electricity bill",
    amount: "8000",
    location: "delhi",
  },
  {
    id: "e4",
    date: new Date(2022,9,23),
    title: "domestic props",
    amount: "10000",
    location: "delhi",
  }
];

const App = () => {
  const [expenses,setExpenses] = useState(dummyExpenses)
  const addExpenseHandler = (expense) => {
    let updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
  }
  
  /*instead of above function we can write this arrow function
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };*/

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
