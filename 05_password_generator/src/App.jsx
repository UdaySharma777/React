import { useState, useCallback, useRef} from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charachterAlllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwrodRef = useRef(null)

  

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed){
      str+="0123456789"
    }
    if (charachterAlllowed){
      str+="!@#$%^&*-_+=[]{}~`"
    }

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)

      pass += str.charAt(char)


    }

    setPassword(pass)


  }, [length, numberAllowed, charachterAlllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwrodRef.current?.select();
    passwrodRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>passwordGenerator(), [length, numberAllowed, charachterAlllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center justify-center'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwrodRef}
          onClick={copyPasswordToClipboard}
           />
           <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
           onClick={copyPasswordToClipboard}
           >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            checked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            checked={charachterAlllowed}
            id='numberInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }} 
            />
            <label htmlFor="numberInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
