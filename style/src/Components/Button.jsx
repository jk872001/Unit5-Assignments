// import "./button.css";
import styled from "styled-components"
// export const Button = ({children,onClick}) => {
//     return <button onClick={onClick}>{children}</button>
// };

const Button = styled.body`
background-color: ${(props) => (props.theme==="light" ? "#f6f54d": "#143f6b") };
border: 1px solid black;
border-radius: 4px;
height: 100%;
padding: 10px;
padding-top: 8px;
text-align: center;
background: ${(props) => (props.theme==="light" ?  "#143f6b" : "#f6f54d") };
color: ${(props) => (props.theme === "light" ? "#143f6b": "#f6f54d") };
cursor: pointer;
margin: 5px;
&:hover {
box-shadow: #02f523 0 3px 8px;
}


`

export { Button };