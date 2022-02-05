const TextInput=(props)=>{
    return(
        <div>
        <h1>Hello</h1>
        <h2>Hi</h2>
        <h3>{props.name}</h3>
        <h3>
            {props.children}
        </h3>
        </div>
    );
}

export default TextInput;