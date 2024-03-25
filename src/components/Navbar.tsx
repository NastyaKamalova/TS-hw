import  { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <h1>Navbar</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
                <li><NavLink to="/weather">Weather</NavLink></li>
                <li><NavLink to="/city">City</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;