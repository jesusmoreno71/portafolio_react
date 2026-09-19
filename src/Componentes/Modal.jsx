import "./Modal.css";

//Destructuramos las propiedades de <Modal /> siendo la propiedad de closeModal
const Modal = ({closeModal, trabajo}) => {
  return (
    <>
    {/*Agregando el onClick={closeModal} al overlay, ahora podemos cerrar el overlay
       tambien al darle click al fondo negro del overlay */}
      <div className="overlay" id="overlay" onClick={closeModal}>
        <div className="modal">
          {/*Boton para cerrar el overlay */}
          <button className="boton-cerrar" id="btn-cerrar" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>

          {/*Cuadricula donde estara la imagen y la informacion de los trabajos */}
          <div className="grid">
            <div className="thumb">
                {/*Accedemos a la informacion especifica de cada trabajo gracias al trabajo.-.- */}
              <img src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
            </div>
            <div className="info">
              <div className="head">
                <h3 className="titulo">{trabajo.info.nombre}</h3>
                <span className="categoria">{trabajo.info.categoria}</span>
              </div>
              <div className="body">{trabajo.info.contenido}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
