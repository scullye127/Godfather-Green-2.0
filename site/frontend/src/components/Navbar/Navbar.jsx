import React, {useContext, useState} from "react";
import PropTypes from "prop-types";
import './Navbar.css'
import { assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";
//Navbar
const Navbar = ({setShowLogin}) => {
    //State variables
    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

    return (
        <div className="navbar">
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>download app</a>
                <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className={"navbar-search-icon"}>
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
}

export default Navbar;