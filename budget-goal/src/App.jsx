import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './bootstrap.min.css'
import './bootstrap.bundle.min.js'
import './App.css'
import BudgetPage from "./BudgetPage.jsx"
import Goal from "./goal.jsx";
import Login from "./Login.jsx"; 
import Signup from "./Signup.jsx"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BudgetPage />} />
        <Route path="/goal" element={<Goal/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/> 

      </Routes>
    </Router>
  );
}

export default App
