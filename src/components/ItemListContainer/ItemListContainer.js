import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


const ItemListContainer = ()=> {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
  

  
  useEffect(() => {
      getProducts(categoryId).then(item => {
          setProducts(item)
      }).catch(error  => {
          console.log(error)
      }).finally(() =>{

      })

      return (() => {
          setProducts()
      })          
  }, [categoryId])
  


  return (
    <div>
      <h1>"Let's Buy!"</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer