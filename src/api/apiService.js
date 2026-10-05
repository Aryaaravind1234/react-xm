import axiosInstance from './axiosinstance'

export const getProducts = () => {
  return axiosInstance.get('/products')
}

export const addProduct = (product) => {
  return axiosInstance.post('/products', product)
}

export const getProduct = (id) => {
  return axiosInstance.get(`/products/${id}`)
}

export const updateProduct = (id, product) => {
  return axiosInstance.put(`/products/${id}`, product)
}

export const deleteProduct = (id) => {
  return axiosInstance.delete(`/products/${id}`)
}