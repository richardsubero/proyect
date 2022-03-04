import Carrito from '../img/istockphoto-1199519164-170667a.jpg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import { useContext } from "react"



const CartWidget = () => {
    const {getQuantity} = useContext(CartContext)

    return(
       <Link to={'/cart'} className= 'CartWidget'>
           <img className="Imagen" src={Carrito}alt={"carrito"}/>
           {getQuantity()}
       </Link>
    );
}

export default CartWidget