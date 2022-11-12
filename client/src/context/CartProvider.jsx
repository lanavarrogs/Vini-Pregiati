import { useState, useEffect, createContext } from "react";
import Swal from "sweetalert2";


const CartContext = createContext();

const CartProvider = ({children}) => {

  const [ totalCart, setTotalCart ] = useState(0);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  
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
    const values = () => {
      let item = 0
      carItems.forEach( element => {
        item += element.amount
      })
      setTotalCart(item)
    }
    values()
  },[carItems]);
  
  const addItem = product => {
    const inCart = carItems.find(productInCart => productInCart.code === product.code)
    if(inCart){
      const items = carItems.map(productInCart => (
        productInCart.code === product.code ? {...inCart, amount: inCart.amount + 1 } : productInCart
      ))
      setCarItems(items)
    }else{
      setCarItems([...carItems, {...product, amount: 1}])
    }
    

    Swal.fire({
    icon: 'success',
    title: product.name.toUpperCase() ,
    text: 'Se grego correctamente al carrito',
  })

  }

  const deleteItem = product => {
    const inCart = carItems.find(productInCart => productInCart.code === product.code)

    if(inCart.amount === 1){
      const items = carItems.filter( productInCart => productInCart.code !== product.code)
      setCarItems(items)
    }else{
      const items = carItems.map(productInCart => (
        productInCart.code === product.code ? {...inCart, amount: inCart.amount - 1 } : productInCart
      ))
      setCarItems(items)
    }
    

  }
  
  return(
    <CartContext.Provider
      value={{
        carItems,
        addItem,
        deleteItem,
        totalCart
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