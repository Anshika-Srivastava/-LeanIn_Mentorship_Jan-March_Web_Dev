import React, { useState } from 'react'
import AddExpense from "./components/Users/AddExpense";
import ExpenseList from "./components/Users/ExpenseList";
import Expenses from "./components/Users/Expenses";


const App=()=>{

  const [expense,setExpense]=useState([]);

  const [expenseList,setExpenseList]=useState([]);

  const onAddExpenseHandler=(expenseName, expenseAmount,expenseDate)=>{
  
      setExpenseList((prevState)=>{
      return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
  );
  setExpense((prevState)=>{
  return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
);
 }

  return (
    <div>
     	<AddExpense onAddExpense={onAddExpenseHandler} />
     	<ExpenseList list={expenseList}/>
      	<Expenses items={expense} /> 
    </div>
  );
};


export default App;