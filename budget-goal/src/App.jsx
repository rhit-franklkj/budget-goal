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

      <img src="/images/Budget1.png" alt="aesthetic top" width="100%"></img>
      <div className="container1">
        <div className="thing">
          <h1>Avaliable Budget</h1>
          <h2 id="number">+29,000</h2> <div className="amount">
            <h3 id="income">Income &nbsp;&nbsp;&nbsp;&nbsp; + 35,000 </h3>
            <h3 id="expense">Expenses  &nbsp;&nbsp;&nbsp;&nbsp; - 35,000</h3>
          </div>
        </div>
      </div>

      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <button className="btn btn-secondary dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown">Income</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => {
              document.getElementById("dropdown").textContent = "Income";
            }}>Income</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => {
              document.getElementById("dropdown").textContent = "Expense";
            }}>Expense</a></li>
          </ul>
        </div>
        <div className="col-auto">
        <label className="fs-2"></label>
        <div className="d-flex gap-2">
          <input type="text" className="form-control fs-5" placeholder="Add description"/>
          <input type="text" id="inputMoney" className="form-control fs-5" placeholder="Enter Amount"/>
          <button className="btn fs-5" type="button" style={{ backgroundColor: "#2C3930", color: "white" }}>Submit</button>
        </div>
        </div>
      </div>


            {/*Todo: add actual data to the thing. I just do not care enough rn. Also I want to get CSS ironed out before doing that. */}
      <div className="container2">
      <table className="table table-striped">

  <thead>
    <tr>
      <th scope="col" id="tableIncome">INCOME</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" >Salary</th>
      <td>$300.00</td>
    </tr>
    <tr>
      <th scope="row">Overtime</th>
      <td>$200.00</td>
    </tr>
    <tr>
      <th scope="row">Babysitting</th>
      <td colSpan="2">$40.00</td>
    </tr>
  </tbody>
</table>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col" id="tableExpenses">EXPENSES</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Shopping</th>
      <td>$120.00</td>
    </tr>
    <tr>
      <th scope="row">Grocery</th>
      <td>$80.00</td>
    </tr>
    <tr>
      <th scope="row">Gas</th>
      <td colSpan="2">$60.00</td>
    </tr>
  </tbody>
</table> 
    </div>
    </>
  )
}

export default App
