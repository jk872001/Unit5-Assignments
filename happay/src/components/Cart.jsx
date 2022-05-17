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
    // const {Theme}=useContext(ThemeContext);
    // const {isAuth}=useContext(AuthContext)

useEffect(()=>{
getData();
handleLength();
},[]);
const updateqty = async(id,quant)=>{
    let data = {"quant":quant}
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

    return (
    
    <div className="main">
    <div className="part1" style={{margin:"10px" ,border:"1px solid blue",width:"50%",justifyContent:"center",justifyItems:"center",alignItems:"center",alignContent:"center"}}>
    {Data.map((e)=>(

      
     
     
          
          
          <div style={{display:"flex",border:"1px solid red",width:"90%",}}>
            <p style={{margin:"10px 0px 10px 30px"}}>{e.id}</p>
              <p style={{margin:"10px 0px 10px 30px"}}>{e.name}</p>
              
              
                 
                 <div style={{marginLeft:"80px",display:"flex",border:"1px solid red"}} >
                 <p style={{margin:"10px 0px 10px 30px"}} onClick={()=>{updateqty(e.id,e.quant+1)
                //    handleLength();
                 }}>{"+"}</p>
                 <p style={{margin:"10px 0px 10px 30px"}}>{e.quant}</p>
                 <p style={{margin:"10px 0px 10px 30px"}} onClick={()=>{updateqty(e.id,e.quant-1)
                //    handleLength();
                 }}>{"-"}</p>
                 </div>
             <button style={{margin:"10px 0px 10px 30px"}}
              onClick={()=>{
                 
                const data=e;
               fetch(`http://localhost:8080/cart/${data.id}`,{
                   method:"DELETE"
               })
               
getData();
handleLength();
            }}>Delete from Cart</button>
           
        
     </div>



    ))}
    </div>
    <div className="part2" style={{margin:"10px" ,border:"1px solid blue",width:"50%",justifyContent:"center",justifyItems:"center",alignItems:"center",alignContent:"center"}}>
    <p>Price Details</p>
    {Data.map((e)=>(

      
     
     
          
          
<div style={{display:"flex",border:"1px solid red",width:"90%",}}>
  
    <p style={{margin:"10px 0px 10px 30px"}}>{e.quant}* ${e.final_price }</p>
    <p style={{margin:"10px 0px 10px 30px"}}>${e.quant*e.final_price}</p>
    <p>{}</p>
    
    
       
       
   
 

</div>



))}
    </div>
       

    </div>
    )
}