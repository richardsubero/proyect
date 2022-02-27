import Carrito from '../img/istockphoto-1199519164-170667a.jpg'
import './CartWidget.css'
import { Link } from 'react-router-dom'



const CartWidget = () => {

    return(
       <Link to={'/cart'}><img className="Imagen" src={Carrito}alt={"carrito"}/></Link>
    )
}

export default CartWidget