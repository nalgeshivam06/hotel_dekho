import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar({ handleCityChange }) {
  return (
    <div className='container' style={{height:"20px"}}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{ borderRadius: "24px", margin: "1px" }}>
        <div className="container-fluid">
          <div>
            <button className="btn btn2 btn-light mx-1" onClick={() => handleCityChange('London')}>London</button>
            <button className="btn btn2 btn-light mx-1" onClick={() => handleCityChange('Mumbai')}>Mumbai</button>
            <button className="btn btn2 btn-light mx-1" onClick={() => handleCityChange('New York')}>New York</button>
            <button className="btn btn2 btn-light mx-1" onClick={() => handleCityChange('Paris')}>Paris</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
