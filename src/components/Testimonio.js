import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.name}`}
      />
      <div className='contedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          {props.nombre} en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <b>{props.empresa}</b>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
