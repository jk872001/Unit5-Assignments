import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",margin:"0px",border:"2px solid black"}}>
    <div style={{display:"flex"}}>
        <img style={{width:"20px"}} src='https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg' alt='' />
        <p style={{color:"#1D7CBF",fontSize:"20px"}}>Happay</p>
    </div> 
    <div style={{display:"flex"}}>
    <div >
        <ShoppingCartOutlinedIcon style={{width:"50px"}}> 2</ShoppingCartOutlinedIcon>
    </div>  
    <div>
       <AccountCircleOutlinedIcon/>
       </div>  
    </div>   
    </div>
  )
}

export default Navbar