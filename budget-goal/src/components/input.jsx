import PropTypes from "prop-types";
export default function InputMoney(props) {
  const moneyManager = props.manager;

  return (
    <>
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
            <input type="text" id="inputDesc" className="form-control fs-5" placeholder="Add description" required />
            <input type="text" id="inputMoney" className="form-control fs-5" placeholder="Enter Amount" required />
            <button className="btn fs-5" type="button" style={{ backgroundColor: "#2C3930", color: "white" }} onClick={(event) => {
              const desc = document.getElementById("inputDesc").value;
              const money = document.getElementById("inputMoney").value;
              if(!validate(desc, money)){
                return; 
              }

              if (document.getElementById("dropdown").textContent === "Income") {
                moneyManager.add("Income", desc, money);
              } else if (document.getElementById("dropdown").textContent === "Expense") {
                moneyManager.add("Expense", desc, money);
              }
            }}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

InputMoney.propTypes = {
  manager: PropTypes.object.isRequired
}

function validate(desc, money){
  let valid = true; 
  if(desc.length == 0 ){
    document.getElementById("inputDesc").classList.add("invalid"); 
    valid = false; 
  } else {
    document.getElementById("inputDesc").classList.remove("invalid");
  }
  if(money.length == 0 || isNaN(money) || money < 0){
    document.getElementById("inputMoney").classList.add("invalid"); 
    valid = false; 
  } else {
    document.getElementById("inputMoney").classList.remove("invalid");
  }
  return valid; 
}