import Carrito from '../img/istockphoto-1199519164-170667a.jpg'
import './CartWidget.css'

const CartWidget = () => {

    return(
       <div>
       <img className="Imagen" src={Carrito}alt={"carrito"}/>
       </div>
    )
};



export default CartWidget