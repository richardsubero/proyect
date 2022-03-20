import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'
import { useNotificationServices } from '../../service/notification/NotificationServices'



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)
    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd = {
            id,
            name,
            price,
            img,
            category,
            description,
            stock
        }

        addItem(productToAdd, quantity)
        setNotification('success', `Se agrego ${name} al carrito`)
    }

    return (

        <div className='CardItem'>
            <h2>{name}</h2>
            <picture>
                <img style={{ width: '400px' }} className='img' src={img} alt={name} />
            </picture>
            <h3>Categoria: {category}</h3>
            <h3>Precio: {price}</h3>
            <h2>
                <dt>Stock</dt>
                <dd>{stock}</dd>
            </h2>
            <div className='center'>
                {quantity === 0 ?
                    (<ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />) :
                    (<Link to={'/cart'} className='Option'>Ir al carrito de compras</Link>)}
            </div>
            <h5>Descripción: {description}</h5>
            <Link to={'/'} className='Option'>Volver Home</Link>
        </div>

    )
}


export default ItemDetail