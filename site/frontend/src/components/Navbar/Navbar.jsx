import React, { useState } from "react";
import './Navbar.css'
import { assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";
//Navbar
const Navbar = () => {
    //State variables
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>download app</a>
                <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className={"navbar-search-icon"}>
                    <img src={assets.basket_icon} alt="" />
                    <div className={"dot"}></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar;