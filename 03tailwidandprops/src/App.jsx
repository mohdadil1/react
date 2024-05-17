import { useState } from 'react'
import './App.css'
import Card from './component/Card'
import Card0 from './component/Card0'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      
<Card gf="xyz" btntext="hello"/>
< Card0 name="Mohd Adil"/>
    </>
  )
}

export default App
