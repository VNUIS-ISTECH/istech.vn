import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
    </Routes>
  )
}

export default router