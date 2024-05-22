import { IniciarSesion } from "./pages"
import { RestaurantRoute } from "./router/RestaurantRoute"
import { AuthRouter } from "./router/AuthRouter"
import { useState, useEffect } from 'react';

export const App = () => {
  const [authUser, setAuthUser] = useState(null);

  const Autentificacion = JSON.parse(localStorage.getItem('user') || null);
  
  useEffect(() => {
    const handleStorageChange = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        setAuthUser(user);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };
}, []);


  return (
    <>
      
      { Autentificacion ? <RestaurantRoute /> : <AuthRouter /> }

      {/* <RestaurantRoute /> */}
      {/* <AuthRouter /> */}
        
    </>    
  )
}
