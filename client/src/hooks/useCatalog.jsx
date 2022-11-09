import { useContext } from "react";
import CatalogContext from "../context/CatalogProvider";


const useCatalog = () =>{
  return useContext(CatalogContext)
}

export default useCatalog