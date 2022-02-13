import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({product}) =>{

  const onAdd = (count) => {
    console.log(`Agregados al Carrito ${count} productos`);
  };

  return (
      <div>
        <div className='card'>
        <img src={product.img}alt={"img"}/>
        <h3>{product.price}</h3>
        <h5>{product.name}</h5>
        </div>
        <div></div>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
  )
}

export default Item













