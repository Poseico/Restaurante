import {CardRestaurante} from '../components';
import {restaurantes} from '../data/restaurantes.js';

export const Restaurantes = () => {
    return (
        <div>
            <h1 className='mt-5' >Restaurantes</h1>
             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {restaurantes.map(restaurante => (
                    <CardRestaurante key={restaurante.id} restaurante={restaurante} />
                ))}
             </div>
        </div>
    );
};





