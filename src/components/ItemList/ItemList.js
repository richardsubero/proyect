import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {

  return (
    <ul className="imagen">
      {products?.map(product => <Item key={product.id} product={product} />)}
    </ul>
  )
}

export default ItemList