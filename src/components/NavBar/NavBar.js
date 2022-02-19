import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    return (
        <nav className="NavBar">
            <div>
                <h2>Game´MeApp</h2>
            </div>
            <div className="Botones">
                <button className='Option'>Consoles</button>
                <button className='Option'>Games</button>
                <button className='Option'>Accesories</button>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default NavBar