import {   createContext, useContext, useState } from "react";
export const CartContext=createContext();

export const CartContextProvider=({children})=>{
const [len,setlen]=useState(0);
const [cart,setCart]=useState([]);
async function handleLength(){
const data=await fetch("info.js").then(d=>d.json());
setlen(data.length);
setCart(data);
}


return <CartContext.Provider value={{len,cart,handleLength,setlen}}>
    {children}
</CartContext.Provider>

}