import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const addItem = (productToAdd, quantity) => {
    isInCart(productToAdd.id)
      ? plusQuantity(productToAdd, quantity)
      : setCart([...cart, { ...productToAdd, quantity }]);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((p) => p.id !== id)
    setCart(newCart);
  }

  const isInCart = (id) => {
    return cart.some(p => p.id === id)
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotal = () => {
    let total = 0
    cart.forEach(prod => {
        total = total + prod.price * prod.quantity
    })
    return total
}

  const plusQuantity = (productToAdd, quantity) => {
    const newProducts = cart.map((prod) => {
      if (prod.id === productToAdd.id) {
        const newProduct = {
          ...prod,
          quantity: prod.quantity + quantity,
        };
        return newProduct;
      } else {
        return prod;
      }
    })
    setCart(newProducts)
  }

  const getQuantity = () => {
    let count = 0
    cart.forEach(prod => {
        count = count + prod.quantity
    })
    return count
}


  return (
    <Context.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      getTotal,
      getQuantity
    }}>
      {children}
    </Context.Provider >
  )
}

export default Context