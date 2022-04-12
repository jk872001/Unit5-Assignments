import "./App.css";
import {useState} from "react";

function App() {
  
  const [counter, setCounter] =useState(0);
  

  const handleChange= (value) => {
    if(value===1)
    {
    setCounter(counter + 1);
    }
    if(value===-1)
    {
      if(counter<1)
      {
        return;
      }
      setCounter(counter - 1);
    }
    if(value===2)
    {
    setCounter(counter*2);
    }
  };
  return (
    
    <div className="App">
     <h3>Counter: {counter}</h3>
      <button
       onClick={()=>handleChange(1)}>
       
       Add 1 
       </button>
       <button
       onClick={()=>handleChange(-1)}
       >
       Sub 1 
       </button>
       <button
       onClick={()=>handleChange(2)}
       >
       Double 
       </button>
       <p>{Color(counter %2===0? "even":"odd")}</p>
        </div>
  );
};

function Color(a){
  if(a==="odd"){
    return <p className="red">Number is Odd</p>
  }
  else{
    return <p className="green">Number is Even</p>
  }
 
}
export default App;
