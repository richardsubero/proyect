import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ItemDetail = ({ product}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)}

    return (
        
            <div className='CardItem'>
                <h2>{product?.name}</h2>
                <picture>
                    <img className='img' src={product?.img} alt={product?.name} />
                </picture>
                <h3>Categoria: {product?.category}</h3>
                <h3>Precio: {product?.price}</h3>
                {quantity > 0 ? 
                        <Link to={'/cart'} className='Option'>Ir al carrito de compras</Link> :
                <ItemCount stock={10} initial={1} onAdd={handleOnAdd} />
}
                <h5>Descripción: {product?.description}</h5>
            </div>
        
    )
}


export default ItemDetail