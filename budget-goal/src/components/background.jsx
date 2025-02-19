import PropTypes from "prop-types"
import {useState} from "react"

export default function Background(props) {
  const incomeSnapshots = props.incomeSnapshots;
  const expenseSnapshots = props.expenseSnapshots;

  //const [total, setTotal] = useState(-1);

  let income = 0; 
  let expenses = 0; 
 for(let snap of incomeSnapshots){
  income += parseFloat(snap.data().amount); 
 }
 for(let snap of expenseSnapshots){
  expenses += parseFloat(snap.data().amount); 
 }

window.total = income - expenses; 
let budgetTotal = window.total; 
 let totalStr = ""; 
 if(budgetTotal < 0){
  budgetTotal *= -1; 
  totalStr = "- $" + budgetTotal.toLocaleString(undefined, {maximumFractionDigits:2, minimumFractionDigits:2})
 } else {
  totalStr = "+ $" + budgetTotal.toLocaleString(undefined, {maximumFractionDigits:2, minimumFractionDigits:2})
 }


  return (
    <>
      <img src="/images/Budget1.png" alt="aesthetic top" width="100%"></img>
      <div className="container1">
        <div className="thing">
          <h1>Avaliable Budget</h1>
          <h2 id="number">{totalStr}</h2> <div className="amount">
            <h3 id="income">Income &nbsp;&nbsp;&nbsp;&nbsp; + ${income.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}</h3>
            <h3 id="expense">Expenses  &nbsp;&nbsp;&nbsp;&nbsp; - ${expenses.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

Background.propTypes = {
  incomeSnapshots: PropTypes.array.isRequired,
  expenseSnapshots: PropTypes.array.isRequired
}
