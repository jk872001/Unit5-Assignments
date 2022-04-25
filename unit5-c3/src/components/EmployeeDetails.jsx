import { useParams,Navigate } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import axios from "axios";
import { AuthContext} from "../contexts/AuthContext";
import styled from "styled-components"
import { TotalContext} from "../contexts/TotalContext";



export const EmployeeDetails = () => {
const { id } = useParams();
const [user, setUser] = useState({});
const {isAuth} = useContext(AuthContext);
const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  /* height: 250px;
  width: 210px; */
  justify-content:centre;
  background-color:yellow;
  margin:15px;
  align-content:center;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`
useEffect(() => {
axios.get(`http://localhost:8080/users/${id}`).then(({ data }) => {
setUser(data);
});
}, []);
const {handleChange} = useContext(TotalContext)

if(!isAuth)
{
    return <Navigate to={"/login"}/>
}

return <CardWrapper>
<img src={user.image} alt=""/>
         <div>Name: {user.name}</div> 
         <div>Salary: {user.salary}</div> 
         <div>Status: {user.status}</div> 
         <div>Tasks: {user.tasks}</div> 
         <div>Title: {user.title}</div> 
         <div>Team: {user.team}</div> 
         
         <div
    style={{
    width: "200px",
    height: "300px",
    padding: "10px",
    background: "teal",
    }}>
    <button
       onClick={() => {
        handleChange(-1);}}

    >Terminate</button>
    <button>Promote</button>
    </div>
    
</CardWrapper>;
}
