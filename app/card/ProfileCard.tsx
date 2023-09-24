// import React, { useState } from 'react';

// function ProfileCard({ onClose }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number,setNumber]=useState('');
//   const [instagramLink, setInstagramLink] = useState('');
//   const [youtubeLink, setYoutubeLink] = useState('');

//   const handleNextClick = () => {
//     // Handle the "Next" button click action, e.g., send data to the server
//     // You can access the "name" and "email" values here

//     // Close the card when done
//     onClose();
//   };

//   return (
//     <div className="bg-white w-1/3 p-6 rounded-lg shadow-xl">
//       <h1 className="font-bold text-2xl">Add New Profile</h1>
//       <div className="mt-4">
//         <h2>Basic</h2>
//         <lable For="Name">Enter Name</lable><br></br>
//         <input
//            type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//       </div>
//       <div className="mt-4">
//       <lable For="Email"> Enter Email</lable><br></br>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//       </div>

//       <div className="mt-4">
//       <lable For="phone"> Enter Phone</lable><br></br>
//         <input
//           type="number"
//           placeholder="Enter PhoneNumber"
//           value={email}
//           onChange={(e) => setNumber(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//       </div>

//       <div className="mt-4">
//         <h2>Social</h2>
//         <input
//           type="text"
//           placeholder="Instagram Link"
//           value={instagramLink}
//           onChange={(e) => setInstagramLink(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//         <input
//           type="text"
//           placeholder="YouTube Link"
//           value={youtubeLink}
//           onChange={(e) => setYoutubeLink(e.target.value)}
//           className="w-full mt-2 p-2 border rounded-md"
//         />
//       </div>





//       <button
//         onClick={handleNextClick}
//         className="mt-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer ml-60"
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default ProfileCard;


// import React, { useState } from 'react';

// function ProfileCard({ onClose }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [instagramLink, setInstagramLink] = useState('');
//   const [youtubeLink, setYoutubeLink] = useState('');
//   const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

//   const handleNextClick = () => {
//     // Toggle the submitted state to true on button click
//     setSubmitted(true);
//   };

//   const handleSubmitClick = () => {
//     // Handle the form submission here (e.g., send data to the server)
//     // You can access all the form fields' values here

//     // For demonstration purposes, we'll just log the data
//     console.log("Submitted Data:");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Phone Number:", number);
//     console.log("Instagram Link:", instagramLink);
//     console.log("YouTube Link:", youtubeLink);

//     // Close the card when done
//     onClose();
//   };

//   return (
//     <div className="bg-white w-1/3 p-6 rounded-lg shadow-xl">
//       <h1 className="font-bold text-2xl">Add New Profile</h1>
//       <div className="mt-4">
//         <h2>Basic</h2>
//         <label htmlFor="Name">Enter Name</label><br></br>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//       </div>
//       <div className="mt-4">
//         <h2>Contact</h2>
//         <label htmlFor="Email">Enter Email</label><br></br>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//       </div>

//       <div className="mt-4">
//         <label htmlFor="phone">Enter Phone</label><br></br>
//         <input
//           type="number"
//           placeholder="Enter PhoneNumber"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//       </div>

//       {submitted && (
//         <div className="mt-4">
//           <h2>Social</h2>
//           <p>Instagram Link: {instagramLink}</p>
//           <p>YouTube Link: {youtubeLink}</p>
//         </div>
//       )}

//       {!submitted && (
//         <div className="mt-4">
//           <h2>Social</h2>
//           <input
//             type="text"
//             placeholder="Instagram Link"
//             value={instagramLink}
//             onChange={(e) => setInstagramLink(e.target.value)}
//             className="w-full p-2 border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="YouTube Link"
//             value={youtubeLink}
//             onChange={(e) => setYoutubeLink(e.target.value)}
//             className="w-full mt-2 p-2 border rounded-md"
//           />
//         </div>
//       )}

//       {!submitted ? (
//         <button
//           onClick={handleNextClick}
//           className="mt-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer ml-60"
//         >
//           Next
//         </button>
//       ) : (
//         <button
//           onClick={handleSubmitClick}
//           className="mt-4 bg-green-500 text-white p-2 rounded-md cursor-pointer ml-60"
//         >
//           Submit
//         </button>
//       )}
//     </div>
//   );
// }

// export default ProfileCard;

import React, { useState } from 'react';

function ProfileCard({ onClose, onSubmit }) {
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

    // Call the onSubmit function to send the data to the parent component
    onSubmit(data);
    // Close the card when done
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

export default ProfileCard;

