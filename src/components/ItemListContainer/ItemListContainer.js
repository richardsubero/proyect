import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const onAdd = (count) => {
    console.log(`Agregados al Carrito ${count} productos`);
  };

  return (
      <div className="Container">
          <h1>"Vamos!"</h1>
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      </div>
      
  )  
}

export default ItemListContainer