import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = ({product}) => {

    return (
        <nav className="NavBar">
            <div>
                <h2>Game´MeApp</h2>
            </div>
            <div className="Categories">
                <NavLink
                    to={`/category/consoles`}
                    className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'
                    }
                >
                    Consoles
                </NavLink>
                <NavLink
                    to={`/category/games`}
                    className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'
                    }
                >
                    Games
                </NavLink>
                <NavLink
                    to={`category/accesories`}
                    className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'
                    }
                >
                    Accesories
                </NavLink>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar