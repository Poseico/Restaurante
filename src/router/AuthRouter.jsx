import { Routes, Route, Navigate, Link } from "react-router-dom"
import { IniciarSesion, Register } from "../pages"

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Register />} />
    </Routes> 
  )
}
