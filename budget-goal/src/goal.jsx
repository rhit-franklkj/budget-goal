import { useState } from 'react'
import './bootstrap.min.css'
import './bootstrap.bundle.min.js'
import './App.css'
import Navbar from './components/navbar.jsx'

export default function Goal() {
  return (
    <>
    <Navbar/>
    <h1 className='goal'>Goal Page</h1>
    <div className="row g-3 align-items-center"> 
      <div className="col-auto">
        <label className="fs-2"></label>
          <label className="fs-4">Want to Save: &nbsp; </label>
        <div className="d-flex gap-2">
          <input type="text" id="inputDesc" className="form-control fs-5" placeholder="Add description" required />
          <button className="btn fs-5" type="button" style={{ backgroundColor: "#2C3930", color: "white" }} onClick={(event) => {
          }}>Submit</button>
        </div>
      </div>

    
    </div>

    </>
  )
}