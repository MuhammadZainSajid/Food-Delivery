import React, { useContext } from 'react';
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
 
  return (
    <div className='food-item'>
        <div className="food-img-container">
            <img className='food-img' src={image} alt={name} />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :<div className="food-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-details">
            <h4>{name}</h4>
            <p className='description'>{description}</p>
            <div className="name-rating">
                <p className='price'>${price}</p>   
                <img src={assets.rating_starts} alt="" />
            </div>
        </div>
    </div>
  )
}

export default FoodItem