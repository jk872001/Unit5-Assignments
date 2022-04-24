import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





export const Navbar = () => {
    const nav =[
    { title: "Home", to: "/" },
    { title: "MENS", to: "/mens" },
    { title: "WOMENS", to: "/womens" },
    { title: "ABOUT US", to: "/aboutus" },
    { title: "CONTACT US", to: "/contactus" },
    { title: "FAQ", to: "/faq" }
    ]
    return (
        <div>
        <AppBar position='static'>
<Toolbar>
<IconButton size='large' edge='start' color='inherit' aria-label='logo'>
<ShoppingCartIcon/>
</IconButton>
<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
E-COMMERCE
</Typography>
<Stack direction='row' spacing={2} >

{nav.map( (e, i) => (
    <Link key={i} to={e.to}>
    <Button color="inherit" sx={{color:"white"}}>
    {e.title}
    </Button>
    </Link>
    )) }
    
   

</Stack>
</Toolbar>
</AppBar>
 <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
</div>
    
    );
    };
    


    