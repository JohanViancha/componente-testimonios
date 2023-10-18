import './App.css';
import Testimonio from './components/Testimonio';
import mocksTestimonios from './mocks/testimonios.mocks';
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        {mocksTestimonios.map(
          ({ nombre, pais, imagen, cargo, empresa, testimonio }, index) => {
            return (
              <Testimonio
                key={index}
                nombre={nombre}
                pais={pais}
                imagen={imagen}
                cargo={cargo}
                empresa={empresa}
                testimonio={testimonio}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
