import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const date = new Date()
  const  [filterYear,setFilteredYear]=useState(date.getFullYear())
  const filterChangeHandler = selectedYear => setFilteredYear(selectedYear)

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className = "expenses">
        <ExpensesFilter selected = {filterYear} onChangeFilter = {filterChangeHandler} />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;