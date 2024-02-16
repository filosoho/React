import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('DarkSlateGrey')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-6
        shadow-lg bg-white px-6 py-3 rounded-3xl'>
          <button
          onClick={() => setColor('DarkSlateGrey')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor: 'DarkSlateGrey', fontSize: '14px', padding: '0.5rem 1.5rem', width: '160px', height: '40px'}}
          >DarkSlateGrey</button>
          <button
          onClick={() => setColor('PaleVioletRed')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor: 'PaleVioletRed', fontSize: '14px', padding: '0.5rem 1.5rem', width: '160px', height: '40px'}}
          >PaleVioletRed</button>
          <button
          onClick={() => setColor('SteelBlue')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor: 'SteelBlue', fontSize: '14px', padding: '0.5rem 1.5rem', width: '160px', height: '40px'}}
          >SteelBlue</button>
          <button
          onClick={() => setColor('Purple')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor: 'Purple', fontSize: '14px', padding: '0.5rem 1.5rem', width: '160px', height: '40px'}}
          >Purple</button>
          
          </div>
      </div>      
    </div>
  )
}

export default App
