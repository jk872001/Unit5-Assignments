import { Link } from "react-router-dom";
// import "./navbar.css"


export const Navbar = () => {
    const nav =[
    { title: "Home", to: "/" },
    { title: "Admin", to: "/admin" },
    { title: "EmployeeLists", to: "/users" },
    { title: "Login", to: "/login" }
    ]
    return (
    <div>
    {nav.map( (e, i) => (
    <Link key={i} to={e.to}><h2>
    {e.title}</h2>
    </Link>
    )) }
    </div>
    );
    };
    