import { Routes ,Route} from "react-router-dom";
import { Cards } from "./components/Cards";
import { Cart } from "./components/Cart";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
     
      
      <Routes>
      <Route path='/cards' element={<Cards/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
