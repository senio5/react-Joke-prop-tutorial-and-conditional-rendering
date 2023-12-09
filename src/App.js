import React from "react"
import Joke from "./components/Joke"
//import javascript jokesData to use the .map function on the elements
import jokesData from "./jokesData"

//
export default function App(){
  //first part = an array of objects from jokesData
  //create a variable and set it equal to the import jokesData.map function
  const jokeElements = jokesData.map(function(joke){
    //second part = the props for joke and punchline
    //return javascript Joke props equal to a new variable
    return <Joke setup={joke.setup} punchline={joke.punchline} />
    //<Joke extracts the data from jokesData with props and the map function returns the data
    //as a new string of data
  })
  //return the javascript {jokeElements} has to be wrapped in {} to read as javascript
  return(
    <div>
      {jokeElements}
    </div>
     
  )
}


//export the joke component from components Joke.js
//create a function that return 4 joke components
//make sure to have the functions created in App,js like - setup and punchline in the called upon Joke component