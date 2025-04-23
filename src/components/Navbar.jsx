import React , { useRef } from "react";
import "./styles.css";
import Socials from "./Socials";

function Navbar({onNavigate}) {

  return (
    <nav id="navbar" className="flex items-center justify-between w-full px-10 py-4 page-width">
  {/* Left Side Menu */}
  <ul className="flex gap-10">
    <button onClick={()=> onNavigate("Home")}>Home</button>
    <button onClick={()=> onNavigate("Product")}>Product</button>
    <button onClick={()=> onNavigate("Pricing")}>Pricing</button>
    <button onClick={()=> onNavigate("About")}>About</button>
    <button onClick={()=> onNavigate("Contacts")}>Contacts</button>
  </ul>

  <div className="absolute left-1/2 transform -translate-x-1/2">
    <img id="logo" src="/assets/logo.png" alt="figma-logo" className="w-20" />
  </div>
  <Socials/>
  
</nav>

  );
}

export default Navbar;
