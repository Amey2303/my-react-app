import React, {useState} from 'react';

//Defining a functional component - 
function Updatetext() {
    //Initialising the component with a 'displayText' variable and using 'useState' hook to update the value and setting 'Hello world' as default value for 'displayText' state
const [displayText, setDisplayText] = useState("Hello World");
//Creating a function using arrow function
const toggleText=()=> {
    if(displayText === "Hello World"){
        setDisplayText('Hello Amey');
    }else{
        setDisplayText("Hello World");
    }
}
return (
<div>
    <h1>{displayText} </h1>
    <button onClick = {toggleText } >Toggle Text</button>
</div>
);
}

export default Updatetext;