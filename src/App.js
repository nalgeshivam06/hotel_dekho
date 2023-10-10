import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hotels from './Components/Hotels';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [selectedCity, setSelectedCity] = useState('London'); // Default to London

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar handleCityChange={handleCityChange} />
        <Routes>
          <Route path='/' element={<Hotels city={selectedCity} />} />
          <Route path='/mumbai' element={<Hotels city='Mumbai' />} />
          <Route path='/newyork' element={<Hotels city='New York' />} />
          <Route path='/paris' element={<Hotels city='Paris' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
