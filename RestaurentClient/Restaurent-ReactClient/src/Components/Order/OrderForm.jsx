import React , {useState , useEffect } from 'react'
import Form from '../../Layouts/Form'
import { Button, ButtonGroup, Grid, InputAdornment ,Button as MuiButton } from '@mui/material'
import Input from '../../Controls/input'
import Select from '../../Controls/select'
import { useForm } from '../../hooks/useForm'
import { styled } from '@mui/system';
import ReplayIcon from '@mui/icons-material/Replay';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ReorderIcon from '@mui/icons-material/Reorder';
import { createAPIEndpoint, ENDPOINTS } from '../../api'

const useStyles = styled( theme => ({
    adornmentText : {
    '& .MuiTypography-root': {
        color : '#f3b33d',
        fontWeight : 'bolder',
        fontSize : '1.5em'
    }
  },
  submitButtonGroup: {
    backgroundColor: '#f3b33d',
    margin: theme.spacing(1),
    color : '#000',
    '& .MuiButton-label': {
        textTransform: 'none'
    },
    '&:hover': {
        backgroundColor: '#f3b33d',
    }
  }
}
));

const pMethod = [
  {id: 'none' , title: 'Select'},
  {id: 'Cash' , title: 'Cash'},
  {id: 'Card' , title: 'Card'}
]


function OrderForm(props) {

  const { values, errors, handleInputChange } = props;
  const classes = useStyles();

  const [customerList, setCustomerList] = useState([]);
  
  useEffect(()=>{
    createAPIEndpoint(ENDPOINTS.CUSTOMER).fetchAll()
    .then( res => {
      let customerList = res.data.map(item => ({
        id : item.customerId,
        title : item.customerName
      }));
      customerList = [{id:0 , title: 'Select'}].concat(customerList);
      setCustomerList(customerList);
    })
    .catch(err => console.log(err => console.log(err)))
  }, [])


  return (
    <Form>
      <Grid container>
        <Grid item xs={6} >
          <Input
           disabled
           label ='Order Number'
           name ='OrderNumber'
           value = {values.orderNumber}
           InputProps = {{
            startAdornment : <InputAdornment className={classes.adornmentText} position='start'
            > # </InputAdornment>
           }}
          />
          <Select 
           label='Customer'
           name='customerId'
           value = {values.customerId}
           onChange = {handleInputChange}
           options= { customerList }
          />
        </Grid>
        <Grid item xs={6} >
        <Input
          disabled
          label='Grand Total' 
          name='gTotal'
          value = {values.gTotal}
          InputProps = {{
            startAdornment : <InputAdornment className={classes.adornmentText} position='start'
            > $ </InputAdornment>
           }}
          />
          <Select 
           label='Payment Method'
           name='pMethod'
           options= {pMethod}
           value = {values.pMethod}
           onChange = {handleInputChange}
          />
          <ButtonGroup className= {classes.submitButtonGroup}>
            <MuiButton size='large' endIcon={<RestaurantMenuIcon />} type='submit'>
              Submit
            </MuiButton>
            <MuiButton size='small' startIcon={<ReplayIcon />} >
            </MuiButton>
          </ButtonGroup>
          <Button
          size='large'
          startIcon={<ReorderIcon />}
          >Orders
          </Button>
        </Grid>
      </Grid>
    </Form>
  )
}

export default OrderForm