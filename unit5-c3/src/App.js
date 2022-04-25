// import " ./App.css";
import  { Admin }   from "./components/Admin" ;
import { Home } from "./components/Home" ;
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UsersList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { AuthContextProvider } from "./contexts/AuthContext";
import { TotalContextProvider } from "./contexts/TotalContext";
import {PrivateComponent} from "./components/PrivateComponent"
import {Login} from "./components/Login"

function App(){
return (
<div className= "App">
<Navbar/>
<AuthContextProvider>
<TotalContextProvider>
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/admin" element={
    <PrivateComponent>
<Admin />
</PrivateComponent>
}></Route>
<Route path="/users" element={<UsersList />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/users/:id" element={
<PrivateComponent>
<EmployeeDetails />
</PrivateComponent>}></Route>
<Route path="/login" element={<Login />}></Route>
</Routes>
</TotalContextProvider>
</AuthContextProvider>
</div>
)
}
export default App;