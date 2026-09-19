import Header from "./Componentes/layout/Header";
import Hero from "./Componentes/layout/Hero";
import Clientes from "./Componentes/layout/Clientes";
import Trabajos from "./Componentes/layout/Trabajos";
import AcercaDe from "./Componentes/layout/AcercaDe";
import Contacto from "./Componentes/layout/Contacto";
import Footer from "./Componentes/layout/Footer";

function App() {
  return (
    <>
      <div className="contenedor">
          <Header/>
          <Hero />
          <Clientes />
          <Trabajos />
          <AcercaDe />
          <Contacto />
          <Footer />
      </div>
    </>
  )
}

export default App
