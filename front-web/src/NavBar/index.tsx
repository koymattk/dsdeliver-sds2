import './style.css';
import { ReactComponent as Logo } from './logo.svg';
const Navbar = () => {
    return(
        <nav className="main-navbar">
            <Logo/>
            <a className="logo-text">DS Delivery</a>
        </nav>
    );
}

export default Navbar;