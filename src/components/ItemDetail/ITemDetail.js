import './ItemDetail.css'


const ItemDetail = ({ product }) => {
    return (
        
            <div className='CardItem'>
                <h2>{product?.name}</h2>
                <picture>
                    <img className='img' src={product?.img} alt={product?.name} />
                </picture>
                <h3>Categoria: {product?.category}</h3>
                <h3>Precio: {product?.price}</h3>
                <h5>Descripción: {product?.description}</h5>
            </div>
        
    )
}


export default ItemDetail