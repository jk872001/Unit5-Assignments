import React from 'react'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { CartContext} from "./Contexts/Cartcontext"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = () => {
    const {len}=useContext(CartContext);
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"3px 15px 3px 15px"}}>
    <div style={{display:"flex"}}>
    
        <img style={{width:"20px"}} src='https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg' alt='' />
        <Link  style={{textDecoration:"none",color:"black"}} key={1} to="/cards">
        <p style={{color:"#1D7CBF",fontSize:"20px"}}>Happay</p>
        </Link>
        
    </div> 
    
    <div style={{display:"flex"}}>
    <div >
        
        <Link  style={{padding:"25px",textDecoration:"none",color:"black"}} key={1} to="/cart">
        <ShoppingCartOutlinedIcon sx={{ fontSize: 35 ,marginTop:"20px"}}/> <div style={{display:"inline",position:"relative",bottom:"18px",right:"8px" ,border:"1px solid red",background:"red",color:"white"}}>{len}</div> </Link>
    </div>  
    <div>
       <AccountCircleOutlinedIcon sx={{ fontSize: 35 ,marginTop:"20px"}}/>
       </div>  
    </div>   
    </div>
  )
}

export default Navbar