
import "./index.css";
import { FaCar } from "react-icons/fa";
import {withRoute} from "react-router-dom"

const Header = () => {
    return (
        <div className="headercontainer">
            <FaCar size={25} />
            <p>Home</p>
            <p>Description</p>
            <a href="https://www.automotiveworld.com/articles/" target="_blank" rel="noopener noreferrer" className="art">Articles</a>
        </div>
    );
};

export default withRoute(Header);
