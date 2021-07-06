import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
    // useState accepts an array and a function to modify that array as its arguments
    // Within the StateAndProps component, we will define state and a function to update state 
    // with the useState hook. 
  let [countClicks, setCountClicks] = useState(0)
  
    // We will also create a function to handleClick.
  const handleClick = () => {
      //good practice:
      //make a copy of state (newCountClicks), modifiy it, and then setState to the copy
      const newCountClicks = ++countClicks
      setCountClicks(newCountClicks)
  }
  
// Goal: Display how many times a button has been clicked.  
// Every time state is updated, the component will re-render.
  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}

