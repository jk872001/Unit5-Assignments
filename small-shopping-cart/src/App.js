import {Header} from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import styled from "styled-components"
import {Routes,Route} from "react-router-dom"

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const Button = styled.div`
background-color:  red ;
border: 1px solid black;
width: 100%;
height:100px;
font-size:80px;
color:white;
text-align: center;
/* background: ${(props) => (props.theme==="light" ?  "#143f6b" : "#f6f54d") };
color: ${(props) => (props.theme === "light" ? "#143f6b": "#f6f54d") }; */
cursor: pointer;
margin: 5px;
&:hover {
box-shadow: #02f523 0 3px 8px;
}


`
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <Button>SALE SALE SALE !</Button>
      <Routes>
      
      
        <Route path="/main" element={<Main products={products} onAdd={onAdd}/>}></Route>
        <Route path="/basket" element={<Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>}>
        
        </Route>
        </Routes>
      
    </div>
    
  );
}

export default App;
