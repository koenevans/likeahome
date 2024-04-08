import {Link} from "react-router-dom";

function Header() {
    return <nav className="#ffc400 amber accent-3">
        <div className='container'>
            <div class="nav-wrapper">
            <Link to="/" 
            className="brand-logo">Like a Home</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
            </div>
        </div>
      </nav>
    }
    export { Header };