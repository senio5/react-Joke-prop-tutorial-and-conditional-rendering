/*-----------------------------CONDITIONAL RENDERING----------------------------*/
// is placing curly braces around javascript or react and html tags

import React from "react";


export default function Joke(props){
    const[isShown, setIsShown] = React.useState(false)
    
    function toggle(){
        setIsShown(prevShown => !prevShown)
    }

    
    return(
        //by using conditional rendering with isShown and the <p> tag 
        //when isShown is true it will make the <p> tag true and 
        //the paragraph tag will be made visible on the screen
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
        //the conditional rendering for props.setup always comes back as true so
        //the <h3> tag is always true thus is always visible on the screen 

        //we can also use conditional rendering to use a ternary if statement like
        //in the <button> tag
    )
}


//create a function with the parameter props 
//then the setup for the individual jokes in a container
//call props and the created function from App.js
// <hr/> is a horizontal line
