import { useState } from 'react';
import './App.css';
import { validEmail ,validPassword} from './Components/Regrex';

function App() {
  const[email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailErr] = useState(false);
  const [pwdError,setPwdError] = useState(false);
  const[msg,setMsg]=useState(false);
  const[show,setShow]=useState(false);

  const showtoggle=()=>{
    setShow(!show);
  }

  const validate=()=>{
    if(!validEmail.test(email)){
      setEmailErr(true);
    }
    if(!validPassword.test(password)){
      setPwdError(true);
    }
    setMsg(true);
  }
  console.log(emailError,pwdError)
  return (
    <div className='container'>
    <div className='register'>
      <h2>Registeration</h2>
      
    </div>
    <div className='inner'>
      <div className='email'>
      
       <input
         type="email"
         placeholder='Enter Your Email'
         value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
          <div className='password'>
        <input
         type={show?'text':'password'}
         placeholder='Enter Your Password'
         value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

</div>
          <div>
          <button onClick={showtoggle}>Show </button>
            <button onClick={validate}>Validate</button>
            {(emailError===false && pwdError===false && msg===true) ? <button>Login</button> : null}
          </div>
         <div className='fail'>
         {(emailError || pwdError)&&<p>Invalid Email or Password</p>}
        
         
          </div>
          <div className='success'>
          {(emailError===false && pwdError===false && msg===true) ? <p>Successful Registeration</p> : null}
          </div>
          </div>
</div>
    
  );
}

export default App;
