import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import img from '../images/foodbackground.jpg';

const Restaurant = () => {


  const containerStyle = {
    backgroundImage: `url(${img})`,
    // height: '100vh',
    color: 'white',
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.671)',
    width: '100vw',
    height: '94vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    alignItems: 'center',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
    // maxWidth:'1200px',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    // position: 'absolute',
    position: 'fixed',
  top: '30%',
  left: '51.5%',
  transform: 'translate(-50%, -50%)',
  width: '900px', // Set the width of the caption
  height: '300px',

  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '50px 10px 10px', 
    padding: '10px 6px',
    background: 'rgba(32, 74, 212, 0.945)',
    borderRadius: '5px',
   width:'300px',
   textAlign:'center',
   
  };

  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
   
  };

  return (
  
      
      <div style={containerStyle}><Nav />
        <div style={contentStyle}>
          <h2 style={headingStyle}>
          Maximize your kitchen's potential! Partner with us to sell surplus food, create additional revenue streams, and foster a stronger connection with your local community.
          </h2>
          <div style={boxStyle}>
            <Link to='/signup' style={linkStyle}>Register your restaurant</Link>
            <Link to='/login' style={linkStyle}>Login to view your existing restaurants</Link>
          </div>
          <p>Need help?</p>
          <p>Please email us at resQfood@gmail.com</p>
          <p>contact +91-1234567890</p>
        </div>
      </div>
    
  );
};

export default Restaurant;