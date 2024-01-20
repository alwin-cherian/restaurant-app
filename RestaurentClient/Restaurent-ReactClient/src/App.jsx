import { useState } from 'react'
import './App.css';
import { Container, Typography } from "@mui/material";
import Order from './Components/Order/Index';

function App() {

  return (
      <Container maxWidth="md" >
        <Typography
        gutterBottom
        variant='h2'
        align='center'>
          Restaurent App
        </Typography>
        <Order />
      </Container>
  )
}

export default App
