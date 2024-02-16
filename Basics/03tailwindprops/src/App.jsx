import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Kiki',
    age: 13,
    address: {
      city: 'Koriko',
      country: 'Japan',
      animal: 'cat'
    }
  }

  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='text-3xl bg-blue-200 p-3 rounded-md mb-8'>
      Vite with Tailwind</h1>
      <Card 
      username="Anna" 
      imageSrc='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'      
      post='Front End Developer' 
      myArr={newArr}/>
      <Card 
      username="Candy" 
      imageSrc='https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      post='Software Engineer'/>
      <Card />
    </>
  )
}

export default App
