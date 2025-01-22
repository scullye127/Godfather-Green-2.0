import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {assets} from '../../assets/assets.js'
import './FoodItem.css'
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({id,name,price,description,image}) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt = "" />
                {!cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white} alt="" />
                    :<div className='food-item-counter'>
                        <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)}src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                     <p>{name}</p>
                    <img src={assets.rating_stars} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

FoodItem.propTypes = {
    id: PropTypes.string.isRequired,  // _id is a string
    name: PropTypes.string.isRequired, // name is a string
    price: PropTypes.number.isRequired, // price is a number
    description: PropTypes.string.isRequired, // description is a string
    image: PropTypes.string.isRequired, // image is a string (path to image)
    category: PropTypes.string.isRequired // category is a string
}

export default FoodItem