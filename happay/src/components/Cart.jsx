import { useContext, useEffect,useState } from "react";
import { CartContext } from "../Contexts/Cartcontext";
// import { ThemeContext } from "../Contexts/ThemeContext";
import { StyleDiv } from "./Mydiv";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../Contexts/loginContext";

export const Cart=()=>{
    const [Data,setdata]=useState([]);
    const {handleLength}=useContext(CartContext);
    // const {Theme}=useContext(ThemeContext);
    // const {isAuth}=useContext(AuthContext)

useEffect(()=>{
getData();
handleLength();
},[]);

// if(!isAuth){

//     return <Navigate to={"/login"}/>
//  }

async function getData() {
    const data=await fetch("http://localhost:8080/data").then(d=>d.json());
     setdata(data);
    //  console.log(data);
}

    return (<StyleDiv >{Data.map((e)=>(

      
     <div style={{width:"70%",border:"1px solid black"}}>
     <img width={"200px"} height={"120px"} src={e.img_url} alt=""/>
          
          
          <div >
              <h4>{e.name}</h4>
              <p>Rs.{e.final_price}</p>
              <p style={{textDecoration:"line-through"}}>
 
                 Rs.{e.original_price}</p>
                 <p>{e.description}</p>
             <button
              onClick={()=>{
                  handleLength();
                const data=e;
               fetch(`http://localhost:8080/data/${data.id}`,{
                   method:"DELETE"
               })
getData();
            }}>Delete from Cart</button>
         </div>
     </div>



    ))}</StyleDiv>)
}