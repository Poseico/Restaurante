
export const PlatoCard = ({ plato }) => {
  return (
    <div
      style={{
        width: '300px',
        margin: '20px',
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: 'white'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{plato.titulo}</h2>
      <img
        src={plato.imagenUrl}
        alt={plato.titulo}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '5px 5px 0 0'
        }}
      />
      <div style={{ padding: '2px 16px' }}>
        <p>{plato.resumen}</p>
        <p style={{ fontWeight: 'bold' }}>Precio: {plato.precio}</p>
      </div>
    </div>
  );
};

