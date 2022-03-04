import { useContext } from "react"
import CartContext from '../../Context/CartContext'



const Cart = () => {
    const { cart, removeItem, getTotal,img } = useContext(CartContext)


    if(cart.length === 0) {
        return <h1 style={{color: 'white'}}>No hay productos en el carrito</h1>
    }
    

    const handleRemoveItem = (id) => {
        removeItem(id)
    }

    return (
        <>
            <h1>Cart</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                <picture>
                    <img style={{width: '100px'}} className='img' src={prod.img} alt={img} />
                </picture>
                            <h3 style={{color:'white', margin:'22px'}}>{prod.name}</h3>
                            <h3 style={{color: 'black'}}>Cantidad {prod.quantity}</h3>
                            <button className="Option" onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
            <p style={{color: 'white'}}>Total: ${getTotal()}</p>
        </>
    )
}

export default Cart