import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ product }) => {

  const onAdd = (count) => {
    console.log(`Agregados al Carrito ${count} productos`);
  };

  return (
    <div className='Card'>
      <img className='img' src={product.img} alt={"img"} />
      <h3>{product.price}</h3>
      <h5>{product.name}</h5>
      <div className='Botones'>
      <Link className='Option' to={`/detail/${product.id}`}>Ver detalle</Link>
      </div>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>

  )
}

export default Item













