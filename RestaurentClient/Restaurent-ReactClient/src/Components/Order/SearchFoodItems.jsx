import React ,{useState , useEffect} from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../../api' 
import { List, ListItem, ListItemText } from '@mui/material';


export default function SearchFoodItems() {

    const [foodItems , setFoodItems] = useState([])

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.FOODITEM).fetchAll()
        .then(res => {
            setFoodItems(res.data)
        })
        .catch(err => console.log(err))
    },[]);

  return (
    <List>
        {
            foodItems.map((item , idx) =>(
                <ListItem
                key = {idx}>
                    <ListItemText
                    primary={item.foodItemName} 
                    secondary={'$'+ item.price }/>
                </ListItem>
            ))
        }
    </List>
  )
}