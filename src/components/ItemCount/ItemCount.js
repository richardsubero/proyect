import { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({ onAdd, stock = 1 , initial= 1})  => {
    const [count, Setcount] = useState(initial)


    const decrement = () => {
        count > initial && Setcount(count -1)
        
    }

    const increment = () => {
        count < stock && Setcount(count +1)
    }

    return (
        <div>
        <div>
            <h3>Buy</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
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