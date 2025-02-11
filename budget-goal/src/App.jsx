import { useState } from 'react'
import './bootstrap.min.css'
import './bootstrap.bundle.min.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Budget Your Goal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Balance</a>
              <a className="nav-link" href="#">Goal</a>
            </div>
          </div>
        </div>
      </nav>

      <img src="/images/Budget.png" alt="aesthetic top" width="100%"></img>
      <div className="container1">
      <div className="thing">
      <h1>Avaliable Budget</h1>
      <h2 id="number">+29,000</h2>
      <div className="amount"> 
      <h3 id="income">Income &nbsp;&nbsp;&nbsp;&nbsp; + 35,000 </h3>
      <h3 id="expense">Expenses  &nbsp;&nbsp;&nbsp;&nbsp; - 35,000</h3>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default App
