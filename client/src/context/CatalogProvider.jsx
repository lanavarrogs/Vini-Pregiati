import axios from "axios";
import { useState, useEffect, createContext } from "react";

const CatalogContext = createContext();

const CatalogProvider = ({children}) => {

  const [catalog,setCatalog] = useState([]);
  const [product,setProduct] = useState([]);

  useEffect(() => {

    const obtenerCatalogo = async () => {
      try {
        const { data } = await axios.get('https://736a-2806-265-3484-802a-e936-bf49-6cae-8fb1.ngrok.io/api/catalog')
        setCatalog(data)
      } catch (error) {
        console.log(error)
      }
    }
      obtenerCatalogo()
  },[])
  

  const obtenerProducto = async code => {
    try {
      const { data } = await axios.get(`https://736a-2806-265-3484-802a-e936-bf49-6cae-8fb1.ngrok.io/api/catalog/${code}`)
      setProduct(data)
    } catch (error) {
      console.log('error')
    }
  } 

  return(
    <CatalogContext.Provider
      value={{
        catalog,
        product,
        obtenerProducto
      }}
    >{children}</CatalogContext.Provider>
  )

}

export {
  CatalogProvider
}

export default CatalogContext