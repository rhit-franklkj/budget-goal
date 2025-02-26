import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" >Budget Your Goal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Balance</Link>
              <Link className="nav-link" to="/goal">Goal</Link>
              <Link className="nav-link" to="/login">Log In</Link>
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}