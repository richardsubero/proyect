import React, { useEffect, useState } from 'react'
import { getCategory } from '../../AsyncMock'
import ItemCategory from '../ItemCategory/ItemCategory'
import {useParams} from 'react-router-dom'

const ItemCategoryContainer = () => {
    const [category, setCategory] = useState()
    const {productCategory} = useParams()

    useEffect(() => {
      getCategory(productCategory).then(item => {
        setCategory(item)
      }).catch(error => {
        console.log(error)
      })

      return (() => {
        setCategory()
    })

    }, [productCategory])
  
    
    return (
      <div>
        <ItemCategory category ={category}/>
      </div>
    )
  }


export default ItemCategoryContainer