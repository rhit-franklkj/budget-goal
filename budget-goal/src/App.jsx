import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './bootstrap.min.css'
import './bootstrap.bundle.min.js'
import './App.css'
import BudgetPage from "./BudgetPage.jsx"
import Goal from "./goal.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BudgetPage />} />
        <Route path="/goal" element={<Goal/>} />
      </Routes>
    </Router>
  );
}

export default App
