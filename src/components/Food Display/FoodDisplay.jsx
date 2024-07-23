import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h3>Top Dishes near you!</h3>
        <div className="food-list">
            {food_list.map((item, index) => {
              {console.log(category,item.category)}
              if(category === "All" || category === item.category){
                return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
        </div>
        
    </div>  
  )
}

export default FoodDisplay