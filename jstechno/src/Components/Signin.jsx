  import React from 'react'
  import { useState,useEffect } from 'react';
  import "./Both.css";
  import {ToggleSwitch} from './ToggleSwitch';
 
  
  
  export const Signin = () => {
    const [DATA, setDATA] = useState([]);
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[fail,setFail]=useState(false);
    const [success,setSuccess]=useState(false);
    
    useEffect(()=>{
      getData();
      },[])
      
      async function getData(){
      const data=await   fetch(`http://localhost:8080/users`).then((d)=>
      d.json()
      )
      setDATA(data);
      }
     
     const handleSubmit=()=>{
      if ( !email || !password )
      {
     alert("Please fill all the input fields");
     return;
     } 
      for(let key in DATA)
     {
      if(DATA[key].password===password && DATA[key].email===email)
      {
        setFail(false);
        setSuccess(true);
        setEmail(()=>"")
        setPassword(() => "")
        return;
        }
    setSuccess(false);
    setFail(true);
    setEmail(()=>"")
    setPassword(() => "")
    }
     }
      
     return (
      <div className='innerbox'>
        <div className='input_box'>
        <label>EMAIL</label>
        <input
        type="text"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        </div>
        <div className='input_box'>
        <label>PASSWORD</label>
        <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        </div>
        <ToggleSwitch label="KEEP ME SIGNED IN" />
            <div>
            <button  className='button' onClick={handleSubmit}>SIGN IN</button>
              </div>

          <div className='fail'>
          {fail &&<p>Invalid Email or Password</p>}
          </div>
          
          <div className='success'>
          {success &&<p>Login Successfully</p>}
            </div>

            </div>
    )
  }

  