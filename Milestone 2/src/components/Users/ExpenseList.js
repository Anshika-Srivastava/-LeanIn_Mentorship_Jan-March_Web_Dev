import React from "react";
import ExpenseCard from "../UI/ExpenseCard";
import classes from "./listStyle.module.css"

const ExpenseList=(props)=>{
    
    return (
        <ExpenseCard>
            <ul>
                {props.list.map((user)=>(
                    <li key={user.id} className={classes.lst}>
                       {user.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.amount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.date}
                    </li>
                ))}
            </ul>
        </ExpenseCard>
    );
}

export default ExpenseList;