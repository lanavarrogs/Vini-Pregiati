import axios from 'axios'

const clienteAxios = axios.create({
  baseUrl: 'http://vinipregati.eastus.cloudapp.azure.com:8080/api'
})

export default clienteAxios;