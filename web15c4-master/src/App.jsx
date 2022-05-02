import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";

function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>
      <AuthContextProvider>
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/about" element={
    <PrivateComponent>
<About />
</PrivateComponent>
}></Route>
<Route path="/users" element={<UsersList />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/users/:id" element={
<PrivateComponent>
<UserDetails />
</PrivateComponent>}></Route>

</Routes>
</AuthContextProvider>
      </Routes>
    </div>
  );
}

export default App;
