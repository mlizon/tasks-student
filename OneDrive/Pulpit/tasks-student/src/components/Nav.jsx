import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return ( 
        <div className="nav">
            <ul>
                <li><Link to="/">Home and tasks</Link></li>
                <li><Link to="/Quotes">Quotes</Link></li>
                <li><Link to="/Album">Album</Link></li>
            </ul>
        </div>
     );
}
 
export default Nav;