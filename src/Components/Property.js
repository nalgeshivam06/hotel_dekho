import React from 'react'
import HotelCarts from './HotelCart'
import { useLocation } from 'react-router-dom';

function CardPage() {
  const location = useLocation();
  const cardDetails = location.state?.cardDetails;

  if (!cardDetails) {
    return <div>Card not found</div>;
  }

  const { city, address, price, image_url } = cardDetails;

  return (
    <div>
      <div>
        <img src={image_url} alt="Card" />
        <p>City: {city}</p>
        <p>Address: {address}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

export default CardPage;
