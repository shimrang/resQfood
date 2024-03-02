import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo3.png";

const Nav = () => {
    const navStyle = {
        backgroundColor: '#651e3e', // Set the background color here
        padding: '2px', // Add padding for better appearance
        marginBottom: '-20px',
      
      };
    
      const linkStyle = {
        color: 'white',
        textDecoration: 'none', // Remove underline
        
        
    
      };
      const style={
        height:"50px",
        width: "150px"
      }

      //<Navbar style={{marginBottom: "0"}} inverse className="fixed-top collapseOnSelect nav-bar">
    
      return (
        <div className="navbar" style={navStyle}>
          <div className="navbar-logo">
            {/* Your logo component or image goes here */}
         <img src={logo} alt="jhjkfhj" style={style}/>
          </div>
          <ul className="nav justify-content-end">
            <li className="nav-item p-3">
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link to="/rest" style={linkStyle}>
                Restaurant
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link to="/ngo" style={linkStyle}>
                Ngo
              </Link>
            </li>
          </ul>
        </div>
      );
    
}

export default Nav;