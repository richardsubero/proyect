import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import {getDocs, collection, query, where} from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/firebase'


const ItemListContainer = ()=> {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
  

  
  useEffect(() => {

    const collectionRef = categoryId ?
    query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
    collection(firestoreDb,'products')

   getDocs(collectionRef).then(response => {
   const products = response.docs.map(doc => {
    return {id: doc.id, ...doc.data() }
   })
   setProducts(products)
})

      return (() => {
          setProducts()
      })          
  }, [categoryId])
  


  return (
    <div>
      <p>"Let's Buy!"</p>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer