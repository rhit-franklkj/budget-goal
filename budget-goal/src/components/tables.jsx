import PropTypes from "prop-types"
export default function Tables(props) {
  const incomeSnapshots = props.incomeSnapshots; 
  const expenseSnapshots = props.expenseSnapshots; 
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
            {incomeSnapshots.map((documentSnapshot) => (
              <tr key= {documentSnapshot.id}>
                <th scope="row">{documentSnapshot.data().description}</th>
                <td>{parseInt(documentSnapshot.data().amount).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}</td>
              </tr>     
            ))}
          </tbody>
        </table>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" id="tableExpenses">EXPENSES</th>
            </tr>
          </thead>
          <tbody>
          {expenseSnapshots.map((documentSnapshot) => (
              <tr key= {documentSnapshot.id}>
                <th scope="row">{documentSnapshot.data().description}</th>
                <td>{parseInt(documentSnapshot.data().amount).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}</td>
              </tr>     
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}
 
Tables.propTypes = {
  incomeSnapshots: PropTypes.array.isRequired, 
  expenseSnapshots: PropTypes.array.isRequired
}
