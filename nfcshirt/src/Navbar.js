import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <nav className="navbar">
            {/**<img className="brand" src=''/>**/}
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/shirts'>Shirts</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/'>Logout</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;