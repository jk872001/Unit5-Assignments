import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Input } from "./components/restroInput"
import { Mapping } from './components/Mapping';

function App() {


  const [show ,setShow]=useState(true);
return (<div className='App'>

{show ?<Mapping/> :<Input/>}
<button className='show'
onClick={()=>{
  setShow(!show)
}}
>{show?"Add Another Restorent":"Restrorent Data"}</button>
    </div>
  )
}

export default App;