import { createContext, useState, useEffect } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
      console.log(cart);
  }, [cart]);
    const addItem = (productToAdd, quantity) => {
      isInCart(productToAdd.id)
      ? plusQuantity(productToAdd, quantity)
      : setCart([...cart, { ...productToAdd, quantity }]);
};

    const removeItem = (item) => {
      let newCart = cart.filter((p) => p.item.id !== item.item.id);
      setCart(newCart);
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const plusQuantity = (productToAdd, quantity) => {
     const newProducts = cart.map((prod) =>{
       if (prod.id === productToAdd.id) {
         const newProduct ={
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


    return (
        <Context.Provider value={{
            cart,
            addItem,
            removeItem,
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context