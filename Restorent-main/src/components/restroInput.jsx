import { useEffect, useState } from "react";
import css from "./Input.css";


export const Input =()=>{
const [Data,setData]=useState({
    Name:"",
    Title:"",
    Cost:+(""),
    Card:"",
    Votes: +(""),
    Review:+(""),
    Rating:+(""),
    Image:"",
    Loved:+("")
});
function handleChange(e){
const {id,value}=e.target;

setData({
    ...Data,
    [id]:value
})

}

function handleSubmit(event){
event.preventDefault();

fetch ("http://localhost:8080/restro",{
method:"POST",
headers:{
    "content-type":"application/json"
}
,
body:JSON.stringify(Data)


})


}

    return (<div className="Input">

<form onSubmit={handleSubmit}>
    
<input id="Name" onChange={handleChange} placeholder="Resto Name " type="text"/>
<br/>
<input id="Title" onChange={handleChange} placeholder="Dish Name " type="text"/>
<br/>
 <input id="Cost" onChange={handleChange} placeholder="Cost" type="number" />
<br/>
<input id="Card" onChange={handleChange} placeholder="Card Accepted " type="text" />
<br/>
<input id="Votes" onChange={handleChange}  placeholder="Votes" type="number" />
<br/>
<input id="Review" onChange={handleChange} placeholder="Review" type="number" />
<br/>
<input id="Rating" onChange={handleChange} type="number" placeholder="Rating" />
<br/>
<input onChange={handleChange} id="Loved" type="number" placeholder="Loved For People" />
<br/>
<input id="Image" onChange={handleChange} placeholder="mage Url " type="text"/>
<br/>

<input className="button" type="submit" value="Submit"/>
</form>

    </div>)
}