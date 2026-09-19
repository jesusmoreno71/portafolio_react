import './Trabajos.css';
import { useState } from 'react';
import trabajos from '../Data/trabajos';
import Modal from '../Modal';

const Trabajos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  //Filtrado mediante estado
  const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
  //Mostrar overlay de trabajos mediante estados
  const [estadoModal, setEstadoModal] = useState(false);
  const [trabajoSeleccionado, setTrabajoSeleccionado] =useState(trabajos[0]);
  
  //Base interactiva de filtros
  const handleChange = (e) => {
    //Accedemos al elemento luego al id y lo guardamos en la const categoria
    const categoria = e.target.id;
    //Asignamos el nuevo valor de categoria a categoriaSeleccionada
    setCategoriaSeleccionada(categoria);

    if(categoria === 'todos') {
      //Si la categoria es 'todos' establecemos los TrabajosFiltrados a los trabajos sin filtrar
      setTrabajosFiltrados(trabajos);
      //Si la categoria no es 'todos' establecemos los TrabajosFiltrados a la categoria que este seleccionada
    } else {
      const nuevosTrabajos = trabajos.filter((trabajo) => {
        if(trabajo.categoria === categoria) {
          return true;
        }
      });
      setTrabajosFiltrados(nuevosTrabajos);
    }
  };

  //Funciones para abrir y cerrar el estado Modal
  /*Recibimos el evento (e) y el id y con el evento prevenimos que nos mande hasta arriba en la pagina 
    con el preventDefault*/
  const openModal = (e, id) => {
    e.preventDefault();
    setEstadoModal(true);

    const trabajo = trabajos.find((trabajo) => {
      if(trabajo.id === id) {
        return true;
      }
    });

    setTrabajoSeleccionado(trabajo);
  };

  const closeModal = () => {
    setEstadoModal(false);
  };

  return (
    <>
      <section className="trabajos" id="trabajos">
        <div className="encabezado">
          <h3 className="titulo">Mis Trabajos</h3>
          <p className="subtitulo">Explora mis trabajos como freelance.</p>
        </div>
        <div className="filtros">
          <label htmlFor="todos">
            <input type="radio" name="categoria" id="todos" onChange={handleChange} checked={categoriaSeleccionada === 'todos'} />
            <span className="opcion">Todos</span>
          </label>

          <label htmlFor="diseño-web">
            <input type="radio" name="categoria" id="diseño-web" onChange={handleChange} checked={categoriaSeleccionada === 'diseño-web'} />
            <span className="opcion">Diseño Web</span>
          </label>

          <label htmlFor="desarrollo-web">
            <input type="radio" name="categoria" id="desarrollo-web" onChange={handleChange} checked={categoriaSeleccionada === 'desarrollo-web'} />
            <span className="opcion">Desarrollo Web</span>
          </label>

          <label htmlFor="aplicaciones-moviles">
            <input type="radio" name="categoria" id="aplicaciones-moviles" onChange={handleChange} checked={categoriaSeleccionada === 'aplicaciones-moviles'} />
            <span className="opcion">Aplicaciones Moviles</span>
          </label>

          <label htmlFor="desarrollo-software">
            <input type="radio" name="categoria" id="desarrollo-software" onChange={handleChange} checked={categoriaSeleccionada === 'desarrollo-software'} />
            <span className="opcion">Desarrollo de Software</span>
          </label>
        </div>
        <div className="grid">
          {/* Estructura para los trabajos */}
          {trabajosFiltrados.map((trabajo, index) => {
            //Por cada trabajos.map() devuelve la siguiente estructura para cada trabajo
            return (
                <div className="trabajo" key={trabajo.id}>
                {/*Pasamos el evento (e) en el onClick como funcion y en el openModal
                   recibimos el evento (e) y le pasamos el trabajo.id de cada trabajo */}
                <a href="#" className="thumb" onClick={(e) => openModal(e, trabajo.id)}>
                {/* Con loading="lazy" el navegador va a cargar la imagen hasta que bajemos en la pagina */}
                {/*Remplazamos la info de img y textos con la info del arreglo de trabajos.jsx */}
                <img
                  loading="lazy"
                  src={trabajo.thumb.url}
                  alt={trabajo.thumb.alt}
                />
              </a>
              <div className="info">
                <div className="textos">
                  <a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>
                    {trabajo.info.nombre}
                  </a>
                  <p className="categoria">{trabajo.info.categoria}</p>
                </div>
                <a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                  </svg>
                </a>
              </div>
                </div>
            );
          })}
        </div>
      </section>

      {/*Pasamos la propiedad de closeModal a <Modal /> (los props) */}
      {estadoModal && <Modal closeModal={closeModal} trabajo={trabajoSeleccionado} />}
    </>
  );
};

export default Trabajos;
