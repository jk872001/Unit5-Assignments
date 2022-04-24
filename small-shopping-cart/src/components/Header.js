import React from 'react';
import {Link} from "react-router-dom"
export  function Header(props) {
  return (


    
    <header className="block row center">
    
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
      <Link  to={"/"}>
    Home
    </Link>
      </div>
      <div>
      <Link  to={"/main"}>
    Product
    </Link>
      </div>
      <div>
      <Link  to={"/basket"}>
    basket
    </Link>
      </div>
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
    </header>
  );
}
