import ExpenseCard from "../UI/ExpenseCard";
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddExpense.module.css"

const AddExpense =(props)=>{
    const[enteredExpense, setEnteredExpense]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');
    const[error, setError]=useState();

    const addDataHandler=(event)=>{
        
        event.preventDefault();
        if(enteredExpense.trim().length===0 || enteredAmount.trim().length===0){
            setError({title:"error",message:"Please enter the values"});
            return;
        }
        if(+enteredAmount<0){
            setError({title:"error",message:"Please enter valid amount"});
            return;
        }
        
        props.onAddExpense(enteredExpense,enteredAmount,enteredDate);
        setEnteredExpense('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const NameChangeHandler=(event)=>{
        setEnteredExpense(event.target.value);
    }
    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const onConfirm=()=>{
        setError(null);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    
    return (
        <>
        {error&& <ErrorModal title={error.title} message={error.message} onConfirm={onConfirm} /> }
        <ExpenseCard>
            <form onSubmit={addDataHandler}>
                <label className={classes.heading}>Expense Tracker</label>
                <div>
                    <label htmlFor="expense" className={classes.text}>Expense : </label>
                    <input id ="expense" type="text" onChange={NameChangeHandler} value={enteredExpense} className={classes.lbl}></input>
                </div>
                <div>
                    <label htmlFor="amount" className={classes.text}>Amount : </label>
                    <input id ="amount" type="number" onChange={amountChangeHandler} value={enteredAmount} className={classes.lbl}></input>
                </div>
                <div>
                    <label htmlFor="expensedate"className={classes.text}>Date : </label>
                    <input type="date" id="expensedate" onChange={DateChangeHandler} value={enteredDate} className={classes.lbl}></input>
                </div>
                <button type="submit" className={classes.btn}>Submit</button>
            </form>
        </ExpenseCard>
        </>
    )
}

export default AddExpense;