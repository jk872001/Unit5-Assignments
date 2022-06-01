  import { useState } from 'react';
  import './App.css';
  import {Signin} from "./Components/Signin";
  import {Signup} from "./Components/Signup";

  function App() {
    const [signin,setSignin]=useState(false);
      
    return (
      <div className='containerbox'>
      <div className='register'>
        <button onClick={()=>{setSignin(true)}}>SIGN IN</button>
        <button onClick={()=>{setSignin(false)}}>SIGN UP</button>
        
      </div>
      {signin?<Signin/>:<Signup/>}
        </div>
      
    );
  }

  export default App;
