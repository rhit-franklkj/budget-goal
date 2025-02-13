import { useState } from 'react'
import './bootstrap.min.css'
import './bootstrap.bundle.min.js'
import './App.css'
import BudgetPage from "./BudgetPage.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BudgetPage /> 
      </>
  )
}

export default App
