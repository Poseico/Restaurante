import { Routes, Route, Navigate, Link } from "react-router-dom"
import {NavBar, Plato} from "../components"
import { Reserva, Restaurantes,SobreNosotros,MisReservas } from "../pages"

export const RestaurantRoute = () => {
    return (
     <>
       <NavBar />
       <div className="container">
         <Link className="navbar-brand" to="/">Quickdine</Link>
         <Routes>
            <Route path="/reserva" element={<Reserva />} />    
            <Route path="/restaurantes" element={<Restaurantes />} />
            <Route path="/misreservas" element={<MisReservas />} />    
            <Route path="/restaurante/:id" element={<Plato />} />
            <Route path="/" element={<SobreNosotros />} />
         </Routes> 
       </div>
     </>
    )
  }
  