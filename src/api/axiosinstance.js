import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://product-crud-backend-sh7l.onrender.com'
})

export default axiosInstance