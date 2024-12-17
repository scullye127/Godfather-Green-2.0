import React from 'react'
import PropTypes from 'prop-types'
import {assets} from '../../assets/assets.js'
import './FoodItem.css'

const FoodItem = ({id,name,price,description,image}) => {
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt = "" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                     <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
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