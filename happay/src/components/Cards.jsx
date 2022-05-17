import { Link } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import { StyleDiv,UnderDiv } from "./Mydiv";
// import { Deal } from "./Deal";
// import { CartContext } from "../Contexts/Cartcontext";
// import { ThemeContext } from "../Contexts/ThemeContext";
// import { AuthContext } from "../Contexts/loginContext";

export const Cards=()=>{
    const [Data,setdata]=useState([]);
    // const {handleLength}=useContext(CartContext);
    // const {Theme}=useContext(ThemeContext);
    // const {isAuth}=useContext(AuthContext);

useEffect(()=>{
getData();
// handleLength()

},[]);

async function getData() {
    const data=await fetch("http://localhost:8080/data").then(d=>d.json());
     setdata(data);
    //  console.log(data);
}
async function handleChange(e){
    const data=await fetch("http://localhost:8080/data").then(d=>d.json());
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
  return a.price-b.price;
});
setdata(data);
    }
    if(e.target.value=="high"){
      const data=[...Data].sort((a,b)=>{
          return b.price-a.price;
      });
      setdata(data);
    }
    if(e.target.value=="sort"){
        getData();
    }
  }
  


    return (<div>
        
        {/* <Deal/> */}

    
        <select style={{backgroundColor:"lightgray",fontSize:"15px",marginLeft:"90%",marginTop:"30px"}} onChange={handleSelect} >
        <option value="sort">Sort</option>
        <option value="high" >High To Low</option>
        <option value="low">  Low To High</option>
        </select>

        <div >

    

         
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
                 
                  getData()
                const data=e;
               fetch("http://localhost:8080/data",{
                   method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(data)
               })
            //    handleLength();
            }}>Add To Cart</button>
         </div>
     </div>



    ))}</StyleDiv>
    </div>
    </div>
    )
}