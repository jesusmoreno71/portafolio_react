import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
    return(
        <>
        <header className="header">
            <div className="logo">
                <h2 className="titulo">Jesus Moreno</h2>
                <p className="subtitulo">Front-End Developer & Freelance</p>
            </div>
            <nav className="navbar">
                {//Link para que nos mande a la seccion de trabajos
                }
                <a href="#trabajos">Trabajos</a>
                <a href="#acerca-de">Acerca de</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <DarkModeSwitch />
        </header>
        </>
    );
};

export default Header;