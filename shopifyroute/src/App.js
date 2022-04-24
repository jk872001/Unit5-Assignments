// import " ./App.css";

import { Home } from "./components/Home" ;
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Aboutus } from "./components/Aboutus";
import { Mens } from "./components/Mens";
import { Womens } from "./components/Womens";
import { FAQ } from "./components/FAQ";
import { Contactus } from "./components/Contactus";
// import logo from "./logo.svg"
// import { UserDetails } from "./components/UserDetails";
// import { AuthContextProvider } from "./contexts/AuthContext";
// import {PrivateComponent} from "./components/PrivateComponent"


function App(){
return (
<div className= "App">
<Navbar/>


<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/mens" element={<Mens />}></Route>
<Route path="/womens" element={<Womens />}></Route>
<Route path="/aboutus" element={<Aboutus />}></Route>
<Route path="/contactus" element={<Contactus />}></Route>
<Route path="/faq" element={<FAQ />}></Route>


</Routes>

</div>
)
}
export default App;