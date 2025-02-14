import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types"

function TransactionDialog(props) {

  return (
    <>
      <Modal show={props.isOpen} onHide={props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <input type="text" id="editDesc" className="form-control fs-5" placeholder="Add description" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <input type="text" id="editMoney" className="form-control fs-5" placeholder="Enter Amount" required />
            </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(props.hide)}>
            Close
          </Button>
          <Button variant="primary" onClick={props.delete}>
            Delete
          </Button>
          <Button variant="primary" onClick={() => {
            let desc = document.getElementById("editDesc").value; 
            let amt =  document.getElementById("editMoney").value; 
            if(!validate(desc,amt)){
              return; 
            }
            props.edit(desc, amt);
          }}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TransactionDialog;

TransactionDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
    hide: PropTypes.func.isRequired, 
    edit: PropTypes.func.isRequired, 
    delete: PropTypes.func.isRequired
  } 

  function validate(desc, money){
    let valid = true; 
    if(desc.length == 0 ){
      document.getElementById("editDesc").classList.add("invalid"); 
      valid = false; 
    } else {
      document.getElementById("editDesc").classList.remove("invalid");
    }
    if(money.length == 0 || isNaN(money) ){
      document.getElementById("editMoney").classList.add("invalid"); 
      valid = false; 
    } else {
      document.getElementById("editMoney").classList.remove("invalid");
    }
    return valid; 
  }