import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar
      position="static"
      
    >
      <Toolbar>

      
        <img
          src="/ipm.jpg"
          alt=""
          style={{
            width: '40px',
            height: '40px',
            marginRight: '10px',
            objectFit: 'contain'
          }}
        />

      
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Product Manager
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/products"
        >
          Products
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/add-product"
        >
          Add Product
        </Button>

      </Toolbar>
    </AppBar>
  )
}

export default Header