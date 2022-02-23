import ItemCount from "../ItemCount/ItemCount";


const ItemCategory = ({ product }) => {
    const onAdd = (count) => {
        console.log(`Agregados al Carrito ${count} productos`);
      };
    return (
        
            <div className='CardItem'>
                <h2>{product?.name}</h2>
                <picture>
                    <img className='img' src={product?.img} alt={product?.name} />
                </picture>
                <h3>Categoria: {product?.category}</h3>
                <h3>Precio: {product?.price}</h3>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
                <h5>Descripción: {product?.description}</h5>
            </div>
        
    )
}


export default ItemCategory