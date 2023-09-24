// 'use client'

// import Image from 'next/image'
// import Link from 'next/link';


// import GoogleButton from "react-google-button";
// import {signIn } from "next-auth/react"
// import GithubIcon from '@mui/icons-material/Github';
// import TwitterIcon from '@mui/icons-material/Twitter';

// import LinkedinIcon from '@mui/icons-material/Linkedin';




// export default function Home() {
//   return (
//     <main  className='flex   h-screen  '>
    


//       <Image className='p-0 '
//       src="/Left side.png"
//       alt="image"
      
//       width={700}
//       height={500}
      
//       />
//       <h1 className='absolute px-40  text-white py-10'>LOGO</h1>
//       <h1 className='absolute text-white  text-6xl  ml-30 px-80 py-80  '>Board .</h1>

//       <div className="social-icons absolute bottom-4 px-30 py-30 ml-60 gap-40">
//     <TwitterIcon className="icon " />
//     <GithubIcon className="icon" />
//     <LinkedinIcon className="icon" />
    
//   </div>

//   const handleFormSubmit = async (e) ={'>'} {
//   e.preventDefault().
// }



//        <div className="item-center mt-40 ml-60">
//       <h1 className='text-4xl font-bold '>Sign In</h1> <br></br>
//       <h1>Sign in to your account</h1><br></br>
//       <GoogleButton onClick={()=>signIn('google')} className=" "/>
//       <form onSubmit={(e) => handleFormSubmit(e)}>
//         <lable For="Email">Email</lable><br></br>
//         <input type="text" placeholder="enter email"></input> <br></br>
//         <lable For="password">Password</lable><br></br>
        
//         <input type="text" placeholder="enter email"></input> <br></br>
//         <h1>Forgot password</h1>
//         <Link href="/dashboard">
//          <button  className="text-bold bg-blue-500 w-80 h-10 rounded-xl border-1px mt-5"type="submit"> Sign In</button> <br></br>
//          </Link>
//          <p className='mt-20'>Don't have an account ? Register</p>

//       </form>
//       </div>

//     </main>
//   )
// }

'use client'
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import useRouter

import GoogleButton from 'react-google-button';
import GithubIcon from '@mui/icons-material/Github';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/Linkedin';

export default function Home() {
  const navigation = useRouter(); // Initialize the router

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform any necessary form validation and submission logic here
    // ...

    // If the form submission is successful and you want to navigate to the dashboard page
    await navigation.push('/dashboard'); // Use the router to navigate
  };

  return (
    <main className='flex h-screen'>
      <Image
        className='p-0'
        src='/Left side.png'
        alt='image'
        width={700}
        height={500}
      />
      <h1 className='absolute px-40 text-white py-10'>LOGO</h1>
      <h1 className='absolute text-white text-6xl ml-30 px-80 py-80'>Board .</h1>

      <div className='social-icons absolute bottom-4 px-30 py-30 ml-60 gap-40'>
        <TwitterIcon className='icon' />
        <GithubIcon className='icon' />
        <LinkedinIcon className='icon' />
      </div>

      <div className='item-center mt-40 ml-60'>
        <h1 className='text-4xl font-bold'>Sign In</h1> <br></br>
        <h1>Sign in to your account</h1><br></br>
        <GoogleButton onClick={() => signIn('google')} className=' ' />
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <label htmlFor='Email'>Email</label><br></br>
          <input type='text' placeholder='enter email'></input> <br></br>
          <label htmlFor='password'>Password</label><br></br>
          <input type='text' placeholder='enter email'></input> <br></br>
          <h1>Forgot password</h1>
          <button
            className='text-bold bg-blue-500 w-80 h-10 rounded-xl border-1px mt-5'
            type='submit'
          >
            Sign In
          </button> <br></br>
        </form>
        <p className='mt-20'>Don't have an account? Register</p>
      </div>
    </main>
  );
}
