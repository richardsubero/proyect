import './Navbar.css'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {

    return (
        <nav className="NavBar">
            <div>
                <h2>Game´MeApp</h2>
            </div>
            <div className="Botones">
                <button className='Option'>Consolas</button>
                <button className='Option'>Juegos</button>
                <button className='Option'>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default NavBar