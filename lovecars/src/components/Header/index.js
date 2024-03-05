
import "./index.css";
import { FaCar } from "react-icons/fa";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="headercontainer">
            <FaCar size={25} />
            <Link to="/"><p>Home</p></Link>
            <p>Description</p>
            <a href="https://www.automotiveworld.com/articles/" target="_blank" rel="noopener noreferrer" className="underscore">Articles</a>
        </div>
    );
};

export default Header;
