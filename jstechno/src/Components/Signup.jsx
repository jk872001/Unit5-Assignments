    import React from 'react'
    import { useState } from 'react';
    import "./Both.css";
    import {validEmail ,validPassword} from './Regrex';

    export const Signup = () => {
        const[email,setEmail] = useState('');
        const[fullname,setFullname] = useState('');
        const [password,setPassword] = useState('');
        const [conpwd,setConpwd] = useState('');
        const [emailError,setEmailErr] = useState(false);
        const [pwdError,setPwdError] = useState(false);
        const[msg,setMsg]=useState(false);
        const [match,setMatch]=useState(false);


        // Validation on clicking validate
    const validate=()=>{
        if(password!==conpwd)
        {
            setMatch(true);
            return;
        }


        if(!validEmail.test(email) || !validPassword.test(password)){
            
        setEmailErr(true);
        setPwdError(true);
        setEmail(() => "")
        setPassword(() => "")
        setFullname(() => "")
        setConpwd(() => "")
        }
    
        else
        {
        setMatch(false);
        setPwdError(false);
        setEmailErr(false);
        setMsg(true);
        setEmail(() => "")
        setPassword(() => "")
        setFullname(() => "")
    setConpwd(() => "")
        }
    
    }




    return (
        <div className='innerbox'>
            <div className='input_box'>
            <label>FULL NAME</label>
        <input
            type="text"
            value={fullname}
            onChange={(e)=>setFullname(e.target.value)}
            
            />
            </div>
        <div className='input_box'>
        <label>EMAIL</label>
        <input
            type="email"
            
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            <div className='input_box'>
            <label>CONFIRM PASSWORD</label>
            <input
            type="password"
            value={conpwd}
            onChange={(e)=>setConpwd(e.target.value)}
            
            
            />
            </div>
            
            <div>
            <button  className='button' onClick={validate}>SIGN UP</button>
            </div>

            {
                match?
                <div className='fail'>
                <p>Password not match</p>
                </div>:null}
                <div className='fail'>
                {(emailError || pwdError)&&<p>Invalid Email or Password</p>
            }
            
            </div>
            <div className='success'>
            {(emailError===false && pwdError===false && msg===true) ? <p>Successful Registeration</p> : null}
            </div>
            
            </div>
    )
    }

