import React from 'react';
import Slide from './Slide';
import { Link } from 'react-router-dom';

const Mid = () => {
  const captionStyles = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '100%',
    zIndex: 2,
    fontSize: '26px',
    color: 'white',
    background: 'rgba(57, 57, 57, 0.25)',
    width: '54vw',  // Set the width of the caption
    height: '6vh', // Set the height of the caption
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',

    borderRadius: '8px', // Add rounded corners if desired
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    textShadow: '0 0 10px rgba(32, 74, 212, 0.945)',
  };
  const linkStyles = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    position: 'absolute',
    top: '200%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '5px 10px',
    backgroundColor: '#651e3e',
    width: '150px',
    zIndex: 2,
    borderRadius: '8px', // Add rounded corners if desired
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', // Add a subtle shadow
  };

  const textStyle = {
    fontSize: '17px',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    textShadow: '0 0 10px rgba(32, 74, 212, 0.945)',
  };
  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'auto', marginTop: '20px' }}>

      <Slide />
      <div class="slide__caption" style={captionStyles}>Reduce food waste efficiently by connecting restaurants with NGOs

      <div  style={linkStyles}> 
          <Link to='/addngo' style={textStyle}>ADD NGO</Link>
        </div>

  </div>

    </div>
  );
};

export default Mid;