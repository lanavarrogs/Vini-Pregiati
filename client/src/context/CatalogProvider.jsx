import axios from "axios";
import { useState, useEffect, createContext } from "react";

const CatalogContext = createContext();

const CatalogProvider = ({children}) => {

  const [catalog,setCatalog] = useState([]);
  const [product,setProduct] = useState([]);

  useEffect(() => {

    const obtenerCatalogo = async () => {
      try {
        const { data } = await axios.get('https://vinipregati.onrender.com/api/catalog')
        setCatalog(data)
      } catch (error) {
        console.log(error)
      }
    }
      obtenerCatalogo()
  },[])
  

  const obtenerProducto = async code => {
    try {
      const { data } = await axios.get(`https://vinipregati.onrender.com/api/catalog/${code}`)
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