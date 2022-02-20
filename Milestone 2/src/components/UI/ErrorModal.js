import React from 'react';
import ExpenseCard from './ExpenseCard';
import classes from './ErrorModal.module.css';

const ErrorModal=(props)=>{
    return(
        <div>
            <div/>
            <ExpenseCard>
                <header>
                    <h2 className={classes.heading}>{props.title}</h2>
                </header>
                <div>
                    <p className={classes.msg}>{props.message}</p>
                </div>
                <footer>
                    <button onClick={props.onConfirm} className={classes.btn}>Okay</button>
                </footer>
            </ExpenseCard>
        </div>
    );
};


export default ErrorModal;