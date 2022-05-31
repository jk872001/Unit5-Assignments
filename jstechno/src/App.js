import { useState } from 'react';
import './App.css';
import { validEmail ,validPassword,validPassword2} from './Components/Regrex';

function App() {
  const[email,setEmail] = useState('');
  const[username,setUsername] = useState('');
  const[fullname,setFullname] = useState('');
  const [password,setPassword] = useState('');
  const [password2,setPassword2] = useState('');
  const [conpwd,setConpwd] = useState('');
  const [emailError,setEmailErr] = useState(false);
  const [pwdError,setPwdError] = useState(false);
  const [pwd2Error,setPwd2Error] = useState(false);
  const[msg,setMsg]=useState(false);
  const[msg2,setMsg2]=useState(false);
  const[show,setShow]=useState(false);
  const [signin,setSignin]=useState(false);
 const [match,setMatch]=useState(false);
  const showtoggle=()=>{
    setShow(!show);
  }

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
   setMsg(true);
  
   setEmail(() => "")
    setPassword(() => "")
    setFullname(() => "")
   setConpwd(() => "")
  }

  const validate2=()=>{
    console.log("hi")
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

  // console.log(emailError,pwdError)
  return (
    <div className='container'>
    <div className='register'>
      <button onClick={()=>{setSignin(true)}}>SIGN IN</button>
      <button onClick={()=>{setSignin(false)}}>SIGN UP</button>
      
    </div>
    {signin?
      <div className='inner'>
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
         type={show?'text':'password'}
         
         value={password2}
          onChange={(e)=>setPassword2(e.target.value)}
          />

</div>
          <div>
          
            <button onClick={validate2}>SIGN IN</button>
            
            
          </div>
         <div className='fail'>
         {pwd2Error && <p>Invalid Username or Password</p>}
        </div>
        
        <div className='success'>
          {( pwd2Error===false && msg2===true) ? <p> Login Successfully</p> : null}
          </div>

          





          </div>:<div className='inner'>
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
         type={show?'text':'password'}
         
         value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
         </div>
         <div className='input_box'>
          <label>CONFIRM PASSWORD</label>
        <input
         type={show?'text':'password'}
        value={conpwd}
          onChange={(e)=>setConpwd(e.target.value)}
        
         
          />
         </div>
         
          <div>
          {/* <button onClick={showtoggle}>{show?<p>Hide</p>:<p>Show</p>} </button> */}
            <button onClick={validate}>SIGN UP</button>
           
          </div>
          {match?
            <div className='fail'>
         <p>Password not match</p>
        
         
          </div>:null}
         <div className='fail'>
         {(emailError || pwdError)&&<p>Invalid Email or Password</p>}
        
         
          </div>
          <div className='success'>
          {(emailError===false && pwdError===false && msg===true) ? <p>Successful Registeration</p> : null}
          </div>
          </div>
    }
    
</div>
    
  );
}

export default App;
