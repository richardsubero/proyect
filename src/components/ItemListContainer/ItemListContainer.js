import React, { useEffect, useState } from 'react'
import { agregarProductos } from '../Products/Products'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    agregarProductos.then((res) => {
      setProducts(res);
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
    })
  },[]);

  


  return (
    <div>
      <h1>"Let's Buy!"</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer;