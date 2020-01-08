import React from "react";
import BurgerLogo from "../../assets/Images/burger-logo.png";
import classes from "./Logo.css"

const Logo = (props)=>(
   <div className={classes.Logo} >
       <img src= {BurgerLogo} alt="my-Burger"/>
   </div>
);

export default Logo; 