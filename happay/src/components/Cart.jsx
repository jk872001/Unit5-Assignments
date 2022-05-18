import { useContext, useEffect,useState } from "react";
import { CartContext } from "./Contexts/Cartcontext"
// import { ThemeContext } from "../Contexts/ThemeContext";
import { StyleDiv } from "./Mydiv";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../Contexts/loginContext";
import  "./Cart.css";
export const Cart=()=>{
    const [Data,setdata]=useState([]);
    const {handleLength}=useContext(CartContext);
    const {len}=useContext(CartContext);
    // const {Theme}=useContext(ThemeContext);
    // const {isAuth}=useContext(AuthContext)

useEffect(()=>{
getData();
handleLength();
},[]);
const updateqty = async(id,quant)=>{
    let data = {"quant":quant}
    if(quant<1)
    {
        // const data=e;
               fetch(`http://localhost:8080/cart/${data.id}`,{
                   method:"DELETE"
               })
               
getData();
handleLength();
    }
    else{
    let response =  await fetch(`http://localhost:8080/cart/${id}`, {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

          let res =  await fetch("http://localhost:8080/cart");
          let final = await res.json();
          console.log("final",final)
          setdata(final)
        }
        // let final = await response.json();
    //    console.log("final",final)
            // handleLength();
}

// if(!isAuth){

//     return <Navigate to={"/login"}/>
//  }

async function getData() {
    const data=await fetch("http://localhost:8080/cart").then(d=>d.json());
     setdata(data);
    //  console.log(data);
}
const sum=Data.reduce((a, c) => a + (c.quant * c.final_price), 0);
const final= sum-18+5+2;
    return (
        <div>
    { len===0 ? <p>Cart is empty</p>:
    <div className="main">
    <div className="part1" style={{margin:"10px" ,border:"1px solid blue",width:"50%",justifyContent:"center",justifyItems:"center",alignItems:"center",alignContent:"center",}}>
    {Data.map((e)=>(

      
     
     
          
          
          <div style={{display:"flex",border:"1px solid red",width:"90%",justifyContent:"space-evenly"}}>
            <div style={{width:"100px"}}><p >{e.name}</p></div>
            <div  style={{width:"100px"}}><p >${e.final_price}</p></div>
            <div  style={{width:"150px",}}>
            <div style={{display:"flex",border:"3px solid black",justifyContent:"space-evenly",height:"30px",alignItems:"center",justifyItems:"center",borderRadius:"10px",marginTop:"13px"}} >
                 <p style={{width:"30px",color:"white",background:"black",cursor:"pointer"}} onClick={()=>{updateqty(e.id,e.quant+1)
                //    handleLength();
                 }}>{"+"}</p>
                 <p style={{width:"110px",marginLeft:"35%"}}>{e.quant}</p>
                 <p style={{width:"30px",color:"white",background:"black",cursor:"pointer"}} onClick={()=>{updateqty(e.id,e.quant-1)
                //    handleLength();
                 }}>{"-"}</p>
                 </div>
            </div>
            <div  style={{width:"150px",marginLeft:"10%",marginTop:"2%"}}><button 
            style={{width:"80%",height:"30px",borderRadius:"10px",color:"white",background:"#1D7CBF",cursor:"pointer"}}
              onClick={()=>{
                 
                const data=e;
               fetch(`http://localhost:8080/cart/${data.id}`,{
                   method:"DELETE"
               })
               
getData();
handleLength();
            }}>Delete from Cart</button></div>
              
              
              
              
                 
                 
             
           
        
     </div>



    ))}
    </div>
    <div className="part2" style={{margin:"10px" ,border:"1px solid blue",width:"50%",justifyContent:"center",justifyItems:"center",alignItems:"center",alignContent:"center"}}>
    <p>Price Details</p>
    {Data.map((e)=>(
<div style={{display:"flex",border:"1px solid red",width:"90%",}}>
  
    <p style={{margin:"10px 0px 10px 30px"}}>{e.quant}* ${e.final_price }</p>
    <p style={{margin:"10px 0px 10px 30px"}}>${e.quant*e.final_price}</p>
   
</div>




))}

<div >
<p>Total Savings               -$18 </p>
<p>Delivery Fees               $5 </p>
<p>Taxes & Charges               $2 </p>
<p>To Pay  {final}</p>
<button  style={{width:"30%",height:"40px",borderRadius:"10px",color:"white",background:"#1D7CBF",cursor:"pointer"}}
 onClick={()=>{
     alert("Order Placed");
     len=0;
     window.location.href="./cards"
 }}
>
    Place Order
</button>
</div>


    </div>
       

    </div>
    }
    </div>
    )
}