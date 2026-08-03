import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  const[counter,setCounter]=useState(0);
  function increaseCounter(){
    setCounter(counter+1);
  }

  function decreaseCounter(){
    setCounter(counter-1);
  }

  // let counter = 15
  // const addvalue = ()=>{
  //   counter+=1
  //   console.log("Clicked",Math.random());
    
  // }

  return (
    <>
    <h1>Hello Boi</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={increaseCounter}>Add value</button>
    <br />
    <button onClick={decreaseCounter}>Decrease value</button>

    
    </>
  )
}

export default App
