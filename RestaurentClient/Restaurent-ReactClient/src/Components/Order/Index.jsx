import React from 'react'
import OrderForm from './OrderForm'
import { useForm } from '../../hooks/useForm'
import { Grid } from '@mui/material';
import SearchFoodItems from './SearchFoodItems';
import OrderedFoodItems from './orderedFoodItems';

const generateOrderNumber = () => Math.floor(100000 + Math.random() * 90000 ).toString();

const getFreshModelObject = () => ({
  orderMasterId : 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  pMethod: 'none',
  gTotal:0,
  deletedOrderItemIds:'',
  orderDetails:[]
})

function Order() {

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls
  } = useForm(getFreshModelObject);

  return (
    <Grid container>
      <Grid item xs={12}>
        <OrderForm 
          { ...{ values, errors, handleInputChange } }
        />
      </Grid>
      <Grid item xs={6}>
        <SearchFoodItems />
      </Grid>
      <Grid item xs={6}>
        <OrderedFoodItems />
      </Grid>
    </Grid>

  )
}

export default Order