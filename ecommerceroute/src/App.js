// import logo from './logo.svg';
// import './App.css';
import {data} from "./components/back/Data/data"
import {Header} from "./components/front/Header"
import {Routes,Route} from "react-router-dom"
import {Products} from "./components/front/Products"
function App() {
  
  return (
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
