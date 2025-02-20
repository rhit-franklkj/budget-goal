import { useState, useEffect } from 'react'
import './bootstrap.min.css'
import './bootstrap.bundle.min.js'
import './App.css'
import Navbar from './components/navbar.jsx'
import Background from "./components/background.jsx"
import moneyManager from "./MoneyManager.js"


export default function Goal() {

  const [incomeSnapshots, setIncomeSnapshots] = useState([]); 
    const [expenseSnapshots, setExpenseSnapshots] = useState([]); 
    const [transaction, setTransaction] = useState({}); 

    useEffect(() => {
        //begin listening 
        const  unsubscribeIncome = moneyManager.beginListeningIncome(() => {
            setIncomeSnapshots(moneyManager.incomeSnapshots); 
        })
        const  unsubscribeExpense = moneyManager.beginListeningExpense(() => {
            setExpenseSnapshots(moneyManager.expenseSnapshots); 
        })

        return () => {
            //stop listening
            unsubscribeIncome(); 
            unsubscribeExpense(); 
        }
    }, [incomeSnapshots, expenseSnapshots]); 
  return (
    <>
    <div id="backgroundGoal">
      <Navbar />
      <Background incomeSnapshots = {moneyManager.incomeSnapshots} expenseSnapshots = { moneyManager.expenseSnapshots }/> 
      <div id="goalForm">
      <div className="row g-3 align-items-center goal h-100">
        <div className="col-auto">
          <label className="fs-2"></label>
          <label className="fs-4">Want to Save: &nbsp; </label>
          <div className="d-flex gap-2">
            <input type="text" id="goalDesc" className="form-control fs-5" placeholder="Add description" required />
            <input type="text" id="goalCost" className="form-control fs-5" placeholder="Add cost" required />
          </div>
        </div>
      
        <div className="container3 col-10">
          <div className="col-6 fs-4">
            <div className="mb-3">
              <label htmlFor="goalTime" className="form-label">Time</label>
              <input type="text" className="form-control" id="goalTime" />
            </div>
            <button type="submit" className="btn btn-primary goal-btn" onClick = {() => {
              let desc = document.getElementById("goalDesc").value; 
              let time = document.getElementById("goalTime").value; 
              
              let cost = document.getElementById("goalCost").value; 

              if(window.total > cost){
                document.getElementById("output").classList.add("show"); 
                document.getElementById("output").classList.remove("hide"); 
                document.getElementById("output").textContent = "You already have enough money for " + desc + "."; 

              } else {
                let amount = (cost - window.total) / time; 
                document.getElementById("output").classList.add("show"); 
                document.getElementById("output").classList.remove("hide"); 
                document.getElementById("output").textContent = "You need to save $" + Math.ceil(amount) + " for a consistent " + time + " weeks to save up for " + desc + "."; 
              }
             
            }}>Calculate Amount</button>
          </div>
          <div className="vr"></div>
          <div className="col-6 fs-4">
              <div className="mb-3">
                <label htmlFor="goalAmt" className="form-label">Amount</label>
                <input type="text" className="form-control" id="goalAmt" />
              </div>
              <button type="submit" className="btn btn-primary goal-btn" onClick = {() => {
              let desc = document.getElementById("goalDesc").value; 
              let amount = document.getElementById("goalAmt").value; 
              let cost = document.getElementById("goalCost").value; 
              if(window.total > cost){
                document.getElementById("output").classList.add("show"); 
                document.getElementById("output").classList.remove("hide"); 
                document.getElementById("output").textContent = "You already have enough money for " + desc + "."; 

              } else {
                let time = (cost - window.total) / amount; 
                document.getElementById("output").classList.add("show"); 
                document.getElementById("output").classList.remove("hide"); 
                document.getElementById("output").textContent = "You need to save $" + amount + " for a consistent " + Math.ceil(time) + " weeks to save up for " + desc + "."; 

              }
             
            }}>Calculate Time</button>
            </div>
        </div>
        


      </div>
      <div className="hide center fs-2" id="output"></div>
      </div>
      
</div>
    </>
  )
}