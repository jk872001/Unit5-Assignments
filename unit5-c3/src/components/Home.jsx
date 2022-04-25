import styled from "styled-components"
import { TotalContext } from "../contexts/TotalContext";
import { useContext } from "react";
export const Home = () =>{
    const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  height: 50px;
  width: 200px;
  justify-content:centre;
  background-color:yellow;
  margin:15px;
  align-content:center;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`
const {cart} = useContext(TotalContext)
return (
<CardWrapper>
<div>
 Total Employees:-{cart}</div>
 <div>
 Terminated Employees:- 0 </div>
 <div>
 Promoted Employees:- 0</div>
 <div>
 Total new:- 0</div>


</CardWrapper>
);
};
