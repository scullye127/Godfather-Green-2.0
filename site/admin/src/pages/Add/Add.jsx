import React, {useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Recreational Blends"
    })

    return (
        <div className='add'>
            <form className='flex-col'>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):assets.upload_area}/>
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input  type="text" name='name' placeholder='Type here' />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea name="description" rows="6" placeholder='Write content here' required></textarea>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select name="category">
                            <option value="Recreational Blends">Recreational Blends</option>
                            <option value="Respiratory Support">Respiratory Support</option>
                            <option value="Stress/Calming">Stress/Calming</option>
                            <option value="Mood/Energy">Mood/Energy</option>
                            <option value="Flavor/Aroma">Flavor/Aroma</option>
                            <option value="Medicinal/Functional">Medicinal/Functional</option>
                            <option value="Experimentals">Experimentals</option>
                            <option value="Recovery Blends">Recovery Blends</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product price</p>
                        <input type="Number" name='price' placeholder='$20' />
                    </div>
                </div>
            <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add