import axios from 'axios'

const clienteAxios = axios.create({
  baseUrl: 'http://localhost:8080/api/'
})

export default clienteAxios;