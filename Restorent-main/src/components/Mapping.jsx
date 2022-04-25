import { useEffect, useState } from 'react'
import css from "./Mapping.css"

export const Mapping=()=>{


    const [DATA, setDATA] = useState([]);
    const arr=["KHUSHY","Home","Spacial","Login"];
    const [page,setPage]=useState(1);
    
    useEffect(()=>{
    getData();
    },[page])
    
    async function getData(){
    const data=await   fetch(`http://localhost:8080/restro`).then((d)=>
    d.json()
    )
    setDATA(data);
    }
    
    function handleChange(e){
      
      if(e.target.value=="High"){
     const data=  [...DATA].sort((a,b)=>{
       return  Number(b.Cost)-Number(a.Cost);
     })
     setDATA(data);
    }
    if(e.target.value=="Low"){
      const data=  [...DATA].sort((a,b)=>{
        return  Number(a.Cost)-Number(b.Cost);
      })
      setDATA(data);
    }if(e.target.value=="sort")
    {
      getData();
    }
    }
    
    function handleStar(e){
      console.log(e.target.id);
      if(e.target.id=="1star")
    {
    
      const data=[...DATA].filter((star)=>{
        
                    return Number(star.Rating)>=1;
    
      })
      setDATA(data);
    }
    if(e.target.id=="2star")
    {
    
      const data=[...DATA].filter((star)=>{
        
                        return Number(star.Rating)>=2;
    
      })
      setDATA(data);
    }
    
    if(e.target.id=="3star")
    {
    
      const data=[...DATA].filter((star)=>{
    
    return Number(star.Rating)>=3;
    
      })
      setDATA(data);
    }
    if(e.target.id=="4star")
    {
      const data=[...DATA].filter((star)=>{
                  
                          return Number(star.Rating)>=4;
    
      })
      setDATA(data);
    }
    }
    
    
    
    function handleCash(e){
    if(e.target.id=="Card"){
      
    const data=[...DATA].filter((data)=>{
    return data.Card=="True";
    })
    setDATA(data)
    }
     if(e.target.id=="Cash"){
    
      const data=[...DATA].filter((data)=>{
        return data.Card!="True";
        })
        setDATA(data)
    }
    }
      return (
      <div className="App">
    
    <div className='nav'>
    {arr.map((e)=>(<div>{e}</div>))}
    </div>
    <div className='Buttons'>
    <select onChange={handleChange}  >
      <option value="sort">Sort By Cost</option>
      <option value="High">High to low</option>
      <option value="Low">Low to High</option>
    </select>
    <button onClick={handleStar} id="1star">1 Star</button>
    <button onClick={handleStar}  id='2star' >2 Star</button>
    <button  onClick={handleStar} id='3star'>3 Star</button>
    <button onClick={handleStar}  id="4star">4 Star</button>
    
    
    <button onClick={handleCash} id='Cash'>Cash Only</button>
    <button onClick={handleCash} id='Card'>Card Only</button>
    </div>
    
    
    <div>
      {DATA.map((data)=>(
        <div className='data'>
    <img src={data.Image}/>
    <div>
    <h1>{data.Name}</h1>
    <h3>{data.Title}</h3>
    <p>Cost : {data.Cost}Rs. for One</p>
    <p>Card {data.Card==="True" ? "Accepted":"Not Accepted"}</p>
    
    
    </div>
    <div>
    
    <p className='rating'> {data.Rating}</p>
    <p>{data.Review} review</p>
    <p>{data.Votes} votes</p>
    <p>{data.Loved} people love</p>
    <button>Order Online</button>
    
    </div>
        </div>
      ))}
 
    </div>
    </div>
    )
    
    



}