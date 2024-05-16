import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const addvalue=()=>{
  if(count<20)
  setCount(count+1)
}
const lessvalue=()=>{
  if(count>0)
  setCount(count-1)
}

  return (
    <>
    
      <h1>Counter Project</h1>
     <h2>Counter value: {count}</h2>
     <button onClick={addvalue}>Addvalue{count} </button>
     <br></br>
     <button onClick={lessvalue}>Decresevalue{count}</button>
     <p>footer: {count}
     </p>
    </>
  )
}

export default App
