import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ITemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams()
    
  
    useEffect(() => {
       const docRef = doc(firestoreDb, 'products', productId)

       getDoc(docRef).then  (response=>{
         const product = {id: response.id, ...response.data()}
         setProduct(product)
       })

      return (() => {
        setProduct()
    })

    }, [productId])
  
    
  
  
    return (
      <div>
        <ItemDetail {...product}/>
      </div>
    )
  }


export default ItemDetailContainer