import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { useContext } from 'react';
import {ThemeContext} from "./Contexts/Themecontext";
import {DarkTheme,LightTheme} from "./components/ThemeButton"


function App() {

  const {Dark,handleTheme}=useContext(ThemeContext);
 

  return (
    <div className="App">
  
    <button onClick={()=>{
      handleTheme("true");
    }}>Dark</button>
    <button onClick={()=>{
     handleTheme("false"); 
    }} >Light</button>
{Dark==="true"?<DarkTheme/>:<LightTheme/>}
  
    </div>
  )
}

export default App
