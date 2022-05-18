import { Link } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import { StyleDiv } from "./Mydiv";
// import { Deal } from "./Deal";
import { CartContext } from "./Contexts/Cartcontext";
import { Cart } from "./Cart";
import { borderColor } from "@mui/system";
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import { ThemeContext } from "../Contexts/ThemeContext";
// import { AuthContext } from "../Contexts/loginContext";

export const Cards=()=>{
    const [Data,setdata]=useState([]);
    const {cart}=useContext(CartContext);
    console.log(cart);
    const {handleLength}=useContext(CartContext);
    // const {Theme}=useContext(ThemeContext);
    // const {isAuth}=useContext(AuthContext)
useEffect(()=>{
getData();
handleLength()


},[]);

async function getData() {
    const data=await fetch("http://localhost:8080/item").then(d=>d.json());
     setdata(data);
    //  alert("Item Added Successfully")
    //  console.log(data);
}
async function handleChange(e){
    const data=await fetch("http://localhost:8080/item").then(d=>d.json());
if(e.target.value=="All"){
    getData();
}else{
const dat=data.filter((a)=>{
    
return a.Type===e.target.value;
});
setdata(dat);

}
}


function handleSelect(e){
    if(e.target.value=="low"){
const data=[...Data].sort((a,b)=>{
  return a.final_price-b.final_price;
});
setdata(data);
    }
    if(e.target.value=="high"){
      const data=[...Data].sort((a,b)=>{
          return b.final_price-a.final_price;
      });
      setdata(data);
    }
    if(e.target.value=="sort"){
        getData();
    }
  }
  


    return (
    <div>
        
        {/* <Deal/> */}

    
        
        <div >
       <div style={{width:"95%",justifyContent:"center"}}>
       <div style={{width:"300px",marginLeft:"40%"}}>
           <h1>Most Popular</h1>
           <div style={{display:"flex", marginLeft:"13%",color:"#1D7CBF"}}>
               <div>--------</div>
               <div><StarBorderIcon/></div>
               <div>--------</div>
        </div>       
       </div>
       </div>
    
       <select style={{backgroundColor:"lightgray",fontSize:"15px",marginLeft:"90%",marginTop:"30px"}} onChange={handleSelect} >
        <option value="sort">Sort</option>
        <option value="high" >High To Low</option>
        <option value="low">  Low To High</option>
        </select>

         
 {/* <Filters onChange={handleChange}   >
<h2>Filter</h2>
<h3><input type="radio" value="Tshirt" name="Filter"/>T-Shirt</h3>
<h3><input type="radio" value="Shoes" name="Filter"/>Shoes</h3>
<h3><input type="radio" value="Kurta" name="Filter"/>Kurta-Pajama</h3>
<h3><input type="radio" value="Pants" name="Filter"/>Pants</h3>
<h3><input type="radio" value="Jacket" name="Filter"/>Jacket</h3>
<h3><input type="radio" value="All" name="Filter"/>All</h3>
 </Filters> */}
       
    <StyleDiv >{Data.map((e)=>(

      
     <div style={{width:"64%"}}>
          
            <img width={"250px"} height={"150px"} src={e.img_url} alt=""/>
          
          
         <div >
         <div style={{display:"flex",justifyContent:"space-between"}}>
         <div>
             <p style={{color:"black",fontSize:"18px",fontWeight:"bold"}}>{e.name}</p>
             </div>
             <div style={{display:"flex",}}>
             <p style={{textDecoration:"line-through",color:"gray",marginRight:"15px",fontSize:"15px",fontWeight:"bold"}}>

                ${e.original_price}</p>
                <p style={{color:"black",fontSize:"18px",fontWeight:"bold",marginBottom:"20px"}}>${e.final_price}</p>
                </div>
            </div>
                <p style={{color:"gray",fontSize:"15px",marginBottom:"20px"}}>{e.description}</p>
               
             <button style={{color:"#1D7CBF",fontSize:"15px",width:"100%",height:"40px",border:"3px solid #1D7CBF",background:"white",borderColor:"#1D7CBF",cursor:"pointer",borderRadius:"10px"}}
              onClick={()=>{
                 
                  getData()
                const data=e;
               fetch("http://localhost:8080/cart",{
                   method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(data)
               })
               handleLength();

            }}
            
            >Add To Cart</button>
               
         </div>
     </div>



    ))}</StyleDiv>
    </div>
    </div>
    )
}