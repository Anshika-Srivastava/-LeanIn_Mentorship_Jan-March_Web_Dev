const Welcome=()=>{
    let x="btech";
    return(
        <h1>{`Welcome to ${x}`}</h1>
        //We can also use props, <h1>{`Welcome to ${props.name}`}</h1>
    );
}

export default Welcome;