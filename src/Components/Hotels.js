import React from 'react'
import HotelCarts from './HotelCart'
import hotelsData from './SampleOutput.json'

function Hotels(props) {
  let {city} =props;
  const targetCity = city;
  
  const Hotels = hotelsData.hotels;

  return (
    <div className='container my-5'>
      <div className="container"></div>
      <div className="row">
        {Hotels.filter(hotel => hotel.city === targetCity).map((element) => (
            <div className="col-md-4" key={element.id}>
              <HotelCarts id={element.id} price={element.price} address={element.address} image_url={element.image_url} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Hotels