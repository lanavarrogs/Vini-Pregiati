import { useState, useEffect, createContext } from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
  
  const [ carItems,setCarItems ] = useState(() => {
    try{
      const productoStorage = localStorage.getItem('carProducts');
      return productoStorage ? JSON.parse(productoStorage) : [];
    }catch(error){
      return [];
    }
  }); 
  

  useEffect(() => {
    localStorage.setItem('carProducts', JSON.stringify(carItems))
  },[carItems]);
  
  const addItem = product => {
    console.log(product)
    const inCart = carItems.find(productInCart => productInCart.code === product.code)

    if(inCart){
      const items = carItems.map(productInCart => (
        productInCart.code === product.code ? {...inCart, amount: inCart.amount + 1 } : productInCart
      ))
      setCarItems(items)
    }else{
      setCarItems([...carItems, {...product, amount: 1}])
    }
    console.log(carItems)
  }
  
  return(
    <CartContext.Provider
      value={{
        carItems,
        addItem
      }}
    >
      {children}
    </CartContext.Provider>
  )

}

export{
  CartProvider
}

export default CartContext