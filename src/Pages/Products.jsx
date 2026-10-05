import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { getProducts, deleteProduct } from '../api/apiService'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice'

function Products() {

  const dispatch = useDispatch()

  const products = useSelector(
    (state) => state.product.products
  )

  useEffect(() => {
    getProducts().then((res) => {
      dispatch(setProducts(res.data))
    })
  }, [dispatch])

  const handleDelete = async (id) => {
    await deleteProduct(id)

    dispatch(
      setProducts(
        products.filter((product) => product.id !== id)
      )
    )
  }

  return (
    <Box sx={{ maxWidth: 800, margin: '30px auto', p: 2 }}>

      <Typography variant="h4" sx={{ mb: 3 }}>
        Products
      </Typography>

      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            border: '1px solid #ddd',
            borderRadius: 2,
            p: 2,
            mb: 2
          }}
        >

          <Typography variant="h6">
            {product.name}
          </Typography>

          <Typography>
            Price: ₹{product.price}
          </Typography>

          <Typography>
            Category: {product.category}
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to={`/edit-product/${product.id}`}
            sx={{ mr: 2, mt: 2 }}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            onClick={() => handleDelete(product.id)}
            sx={{ mt: 2 }}
          >
            Delete
          </Button>

        </Box>
      ))}

    </Box>
  )
}

export default Products