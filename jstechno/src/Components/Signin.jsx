  import React from 'react'
  import { useState } from 'react';
  import "./Both.css";
  import {validPassword2} from './Regrex';
  import {ToggleSwitch} from './ToggleSwitch';





  export const Signin = () => {
    const[username,setUsername] = useState('');
    const [password2,setPassword2] = useState('');
    const [pwd2Error,setPwd2Error] = useState(false);
    const[msg2,setMsg2]=useState(false);

    const validate2=()=>{
    
      if(!validPassword2.test(password2)){
        setPwd2Error(true);
        setPassword2(() => "")
        setUsername(() => "")
        console.log("hi2")
      }
      else{
        setPwd2Error(false);
        setMsg2(true);
        setPassword2(() => "")
        setUsername(() => "")
        console.log("hi3")
      }
      
    }


    return (
      <div className='innerbox'>
        <div className='input_box'>
        <label>USERNAME</label>
        <input
          type="text"
          value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
          
            />
            </div>
            <div className='input_box'>
            <label>PASSWORD</label>
          <input
          type="password"
          
          value={password2}
            onChange={(e)=>setPassword2(e.target.value)}
            />

            </div>
            <ToggleSwitch label="KEEP ME SIGNED IN" />
            <div>
            <button  className='button' onClick={validate2}>SIGN IN</button>
              </div>

          <div className='fail'>
          {pwd2Error && <p>Invalid Username or Password</p>}
          </div>
          
          <div className='success'>
            {( pwd2Error===false && msg2===true) ? <p> Login Successfully</p> : null}
            </div>

            </div>
    )
  }

  