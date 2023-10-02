

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProfileCard({onClose , onSubmit }:{onClose:any, onSubmit:any} ) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  const handleNextClick = () => {
    const data = {
      name,
      email,
      number,
      instagramLink,
      youtubeLink,
    };

    
    onSubmit(data);
    
    onClose();
  };

  

  return (
    <div className="bg-white w-1/3 p-6 rounded-lg shadow-xl">
      <h1 className="font-bold text-2xl">Add New Profile</h1>
      <div className="mt-4">
        <h2>Basic</h2>
        <label htmlFor="Name">Enter Name</label>
        <br></br>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="Email">Enter Email</label>
        <br></br>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="phone">Enter Phone</label>
        <br></br>
        <input
          type="number"
          placeholder="Enter PhoneNumber"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mt-4">
        <h2>Social</h2>
        <input
          type="text"
          placeholder="Instagram Link"
          value={instagramLink}
          onChange={(e) => setInstagramLink(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="YouTube Link"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <button
        onClick={handleNextClick}
        className="mt-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer ml-60"
      >
        Submit
      </button>
    </div>
  );
}


ProfileCard.propTypes = {
  onClose: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired, 
};

export default ProfileCard;


