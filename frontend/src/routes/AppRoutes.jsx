import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Signup from "../pages/Signup"
import LandingPage from "../pages/LandingPage"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Signup */}
        <Route path="/signup" element={<Signup />} />

        {/* LANDING PAGE */}
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes