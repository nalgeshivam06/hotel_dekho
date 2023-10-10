
import React from 'react';
import { Link } from 'react-router-dom';

function HotelCarts({ id, city, address, price, image_url }) {
  return (
    <div>
      <div className="card" style={{ width: "21rem", border: "1px solid" }}>
        <Link to={`/property/${id}`}>
          <img src={image_url} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <i className="fa-solid fa-location-dot"></i>
          <p style={{ display: "inline" }}>8585 Pecan St. {city}</p>
          <strong style={{ display: "block" }}>{address}</strong>
          <div className="icon-container">
            <i className="icon fa-regular fa-city"></i>
            <i className="icon fa-solid fa-bed"></i>
            <i className="icon fa-solid fa-bath"></i>
            <i className="icon fa-solid fa-arrows-up-down-left-right"></i>
          </div>
          <div className="para-container">
            <p>3 Rooms</p>
            <p>4 Beds</p>
            <p>1 Bath</p>
            <p>800sqt</p>
          </div>


          <h4 style={{ float: "left", color: "blue" }}>{price}</h4>
          <p style={{ margin: "5px", display: "inline" }}>/month</p>
          <Link to={`/property/${id}`} style={{ float: "right" }} className="btn cart-btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelCarts;
