import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <ul class= "nav">
   
      <Link className="link" to="/paint/">
        PAINTINGS
        </Link>
      <Link className="link" to="/tatu/">
          TATU
        </Link>
      <Link className="link" to="/music/">
          MUSIC
        </Link>
  
    </ul>
  );
}

export default Navbar;
