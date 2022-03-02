import React, { useEffect, useState } from 'react'
import { getProduct } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ITemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams()
    
  
    useEffect(() => {
      getProduct(productId).then(item => {
        setProduct(item)
      }).catch(error => {
        console.log(error)
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