import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocationTracker from './components/LocationTracker'
import GetLocation from './components/GetLocation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <LocationTracker/>
    <GetLocation/>
    </div>
      </>
  )
}

export default App
