import React,{useState} from "react";
import "./navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
   } from "react-icons/fa";
   import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
    const [showMediaIcons, setShowMediaIcons]= useState(false); 

  return (
      <>
     <nav className="main-nav">
             { /* 1st logo part */}
        <div className="logo">
        <h2>
        <span>J</span>itesh
        <span>K</span>umar
         </h2>
        </div>

             { /* 2nd menu part */}
             <div
                 className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <ul>
            <li>
           <a href="#">Home</a>
            </li>
         <li>
           <a href="#">About</a>
         </li>
         <li>
           <a href="#">Services</a>
         </li>
         <li>
           <a href="#">Contact</a>
         </li>
            </ul>
         </div>
         
         { /* 3rd social media links */}
        <div className="social-media">
        <ul className="social-media-desktop">
        
        <li>
         <a
            href="https:// www.youtube.com/channel/
             UCwfaAHy4zQUb2APNOGXUCCA"
             target="_thapa"><FaFacebookSquare/></a>
        </li>
        <li>
         <a
            href="https:// www.youtube.com/channel/
             UCwfaAHy4zQUb2APNOGXUCCA"
             target="_thapa"><FaInstagramSquare/></a>
        </li>
        <li>
         <a
            href="https:// www.youtube.com/channel/
             UCwfaAHy4zQUb2APNOGXUCCA"
             target="_thapa"><FaYoutubeSquare/></a>
        </li>
        </ul>

         {/* hamburget menu start  */}
       <div className="hamburger-menu">
       <a href="#" onClick={"() = setShowMediaIcons(!showMediaIcons)"}>
        <GiHamburgerMenu />
       </a>
       </div>
</div>

</nav>
    </>
  );
};
export default Navbar;