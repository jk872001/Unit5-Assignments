import React from 'react'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { CartContext} from "./Contexts/Cartcontext"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = () => {
    const {len}=useContext(CartContext);
  return (
    <div style={{display:"flex",justifyContent:"space-between",margin:"0px",border:"2px solid black"}}>
    <div style={{display:"flex"}}>
        <img style={{width:"20px"}} src='https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg' alt='' />
        <p style={{color:"#1D7CBF",fontSize:"20px"}}>Happay</p>
    </div> 
    <Link  style={{padding:"25px",textDecoration:"none",color:"black"}} key={1} to="/cards">Home</Link>
    <div style={{display:"flex"}}>
    <div >
        <ShoppingCartOutlinedIcon style={{width:"50px"}}> 2</ShoppingCartOutlinedIcon>
        <Link  style={{padding:"25px",textDecoration:"none",color:"black"}} key={1} to="/cart">Cart {len}</Link>
    </div>  
    <div>
       <AccountCircleOutlinedIcon/>
       </div>  
    </div>   
    </div>
  )
}

export default Navbar