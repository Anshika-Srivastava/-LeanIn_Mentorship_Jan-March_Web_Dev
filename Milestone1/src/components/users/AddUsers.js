//import Button from "./Button";
import Card from "../UI/Card";
import { useState } from "react";
import "./AddUsers.css"


const AddUser = (props) =>{
const[enteredUser,setEnteredUser]=useState('');
const[enteredAge,setEnteredAge]=useState('');


//returns an array [0]-element [1]-a function only which can update the value of [0]
    const addDataHandler=(event)=>{
        event.preventDefault();//onSubmit ka use hota hai to keep data in some data base after clicking on submit button
        //but yaha humein display karana hai and kahi store nhi krna hence we are using this event.preventDefault() function
        if(enteredUser.trim().length===0||enteredAge.trim().length===0){
            alert("Ugh!! Please enter a valid username or age");
        }
        if(+enteredAge<0){
            alert("Bruh! You can't have a negative age:/");
        }
        props.onAddUser(enteredUser,enteredAge);
        setEnteredUser('');
        setEnteredAge('');
    }

    const userChangeHandler=(event)=>{ 
        setEnteredUser(event.target.value);
    }
    const ageChangeHandler=(event)=>{ 
        setEnteredAge(event.target.value);
    }
    return(
        <Card>
        <form onSubmit={addDataHandler}>
            <label className="heading">Let's play Add User</label>
            <label htmlFor="username" className="text">Username: </label>
            <input id="username" type="text" onChange={userChangeHandler} value={enteredUser}></input>
            <label htmlFor="age" className="text">Age: </label>
            <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
            <div><button className="btn" type="submit">Submit</button></div>
        </form>
        </Card>
    ); 
}

export default AddUser;