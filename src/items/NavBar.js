import './Navbar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <nav className="NavBar">
            <div>
                <h3>Game´MeApp</h3>
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