import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ product }) => {


  return (
    <div className='Carta'>
      <h2>{product.name}</h2>
      <img className='img' src={product.img} alt={"img"} />
      <h2>{product.price}</h2>
      <div className='Botones'>
      <Link className='Option' to={`/detail/${product.id}`}>Ver detalle</Link>
      </div>
    </div>

  )
}

export default Item













