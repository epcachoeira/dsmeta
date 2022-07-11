import Logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-log-container">
                <img src={Logo} alt="Logomarca do projeto" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.instagram.com/epcachoeira/">@epcachoeira</a>
                </p>
            </div>
        </header>
    )
}

export default Header;