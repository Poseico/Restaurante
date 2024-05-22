import { useParams, Navigate, useNavigate} from "react-router-dom";
import {dataPlatos} from "../data/menu.js";
import {PlatoCard} from "../components";

export const Plato = () => {
  const {id} = useParams();  
  
  const platosRestaurante = dataPlatos[id];
  
  if (!platosRestaurante) {
    return <Navigate to="/restaurantes" />
  }

  // console.log(platosRestaurante);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <h1 className="mt-5" style={{ width: '100%', textAlign: 'center' }}>Menú de {id}</h1>
      {platosRestaurante.map(plato => (
        <PlatoCard key={plato.id} plato={plato} /> 
      ))}
    </div>
  )
}
