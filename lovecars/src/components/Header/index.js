
import "./index.css";
import { FaCar } from "react-icons/fa";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="headercontainer">
            <FaCar size={25} />
            <Link className="liststyle" to="/">Home</Link>
            <Link className="liststyle" to="/cars">FindCars</Link>
            <a href="https://www.automotiveworld.com/articles/" target="_blank" rel="noopener noreferrer" className="underscore">Articles</a>
        </div>
    );
};

export default Header;
