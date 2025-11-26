import React from 'react';
import logo from '../assets/images/logo.png';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <img src={logo} alt="DigitalFlake Logo" className="w-40 mb-4" />
        <p className="text-2xl font-medium text-gray-700">Welcome to Digitalflake admin</p>
      </div>
    </div>
  );
}

export default Home;
