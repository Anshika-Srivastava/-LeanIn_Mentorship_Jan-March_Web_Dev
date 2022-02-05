//import TextInput from "./components/TextInput";
//import Welcome from "./components/Welcome";
import React, { useState } from "react";
import AddUser from "./components/users/AddUsers";
import UserList from "./components/users/UserList";
const App=()=> {
  const [usersList,setUsersList]=useState([]);

  const onAddUserHandler=(userName, userAge)=>{
    setUsersList((prevState)=>{
      return[...prevState,{name:userName, age:userAge, id:Math.random.toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UserList list={usersList}/>
    </div>
  );
}

export default App;