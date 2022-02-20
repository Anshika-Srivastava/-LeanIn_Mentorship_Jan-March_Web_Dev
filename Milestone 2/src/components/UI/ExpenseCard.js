import classes from "./ExpenseCard.module.css";
const ExpenseCard = (props) => {
  return (
    <div className={classes.card}>
        {props.children}
    </div>
  );
};

export default ExpenseCard;