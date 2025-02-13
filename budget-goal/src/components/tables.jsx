export default function Tables(){
    return (
        <>
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