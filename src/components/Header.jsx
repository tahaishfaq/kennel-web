import React from 'react';
import { useState } from 'react';
import background from '../assets/headerbg.png'
import NavBar from './NavBar';

const Header = () => {
  const [gender, setGender] = useState('');

  return (
    <header className="relative bg-cover bg-center h-screen w-[1440]" style={{ backgroundImage: `url(${background})` }}>
      <NavBar />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start px-10">
        <div className="max-w-lg">
          <h1 className="text-white text-5xl font-bold mb-4">Your New Puppy Is Looking Forward To Meeting You!</h1>
          <p className="text-white text-lg mb-4">Your new puppy is bursting with excitement to meet their new family! With a wagging tail and bright eyes, they’re ready to shower you with affection and become your loyal companion.</p>
        </div>
      </div>
      <div className="absolute top-1/4 right-10 bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-gray-700 text-xl mb-4">Lorem ipsum dolor sit amet consectetur.</h2>
        <div className="flex space-x-4 mb-4">
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">1</div>
          <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">2</div>
          <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">3</div>
          <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">4</div>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Gender?</p>
          <p className="text-gray-400 mb-4">Please select which gender are you interested.</p>
          <div className="flex space-x-4 mb-4">
            <button onClick={() => setGender('male')} className={`px-4 py-2 border rounded ${gender === 'male' ? 'border-black' : 'border-gray-300'}`}>
              <span className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.293 3.293a1 1 0 011.414 0l.293.293a1 1 0 010 1.414l-6.586 6.586a1 1 0 01-1.414 0L5 8.414 3.293 10.12a1 1 0 11-1.414-1.414L3.293 7 2 5.707a1 1 0 010-1.414l.293-.293a1 1 0 011.414 0L5 5.293 7.586 2.707a1 1 0 011.414 0L12 6.414 16.293 3.293zM5 15a3 3 0 100 6 3 3 0 000-6z"></path>
                </svg>
                Male
              </span>
            </button>
            <button onClick={() => setGender('female')} className={`px-4 py-2 border rounded ${gender === 'female' ? 'border-black' : 'border-gray-300'}`}>
              <span className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M14 5a3 3 0 11-6 0 3 3 0 016 0zM10 0a5 5 0 00-5 5c0 2.22 1.45 4.11 3.5 4.75V12H7a1 1 0 000 2h1v1a1 1 0 102 0v-1h1a1 1 0 000-2h-1.5V9.75A5.002 5.002 0 0010 0z"></path>
                </svg>
                Female
              </span>
            </button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded">Next Step</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
