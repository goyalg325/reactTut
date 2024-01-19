import React from 'react'
import { useState } from 'react';
import Video from './components/Video'

function App() {
//  let counter = 15
let[counter,setcounter] = useState(15)
const addValue = () => {
  counter = counter + 1 ;
  setcounter(counter);
  console.log(`counter value is ${counter}`)
}
const removeValue = () => {
  counter = counter - 1 ;
  setcounter(counter);
  console.log(`counter value is ${counter}`)
}

  return (
    <>
    <h1>chai aur react</h1>
    <p>counter value : {counter}</p>
    <Video/>
    <button onClick={addValue}>add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
