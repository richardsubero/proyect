import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
    const [count, Setcount] = useState(1)


    const decrement = () => {
        count > initial && Setcount(count -1)
        
    }

    const increment = () => {
        count < stock && Setcount(count +1)
    }

    return (
        <div>
        <div className="Display">
            <h3>Agregame</h3>
            <button onClick={increment}>+</button>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
        </div>

        <div>
            <button onClick={()=>onAdd(count)}>
            Agregar al Carrito
            </button>
        </div>
        </div>
    )
}

export default ItemCount