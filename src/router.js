import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import App from './App';


function router() {
  return (
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="about" element={<App />} />
    </Routes>
  )
}

export default router