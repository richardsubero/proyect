import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ITemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/firebase'
import { useNotificationServices } from '../../service/notification/NotificationServices'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    
    const setNotification = useNotificationServices()

    useEffect(() => {
      setLoading(true)
       const docRef = doc(firestoreDb, 'products', productId)

       getDoc(docRef).then  (response=>{
         const product = {id: response.id, ...response.data()}
         setProduct(product)
        }).catch((error) => {
          setNotification('error',`Error buscando producto: ${error}`)
      }).finally(() => {
          setLoading(false)
      })
      

      return (() => {
        setProduct()
    })

    }, [productId])  // eslint-disable-line
  
    
  
  
    return (
      <div>
        {
        loading ?
        <h1>Cargando...</h1> :
        product ?
        <ItemDetail {...product} /> :
        <h1>Producto Inexistente</h1>
      }
      </div>
    )
  }


export default ItemDetailContainer