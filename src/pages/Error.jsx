// import React from 'react'
// import { useNavigate } from 'react-router';

// const Error = () => {
//   const navigate = useNavigate();
//   return (
//     <div className='flexCenter flex-col gap-3 h-screen'>
//         <h1 className='font-semibold text-dark2 text-7xl'>404 Not Found</h1>
//         <p className='text-[#636363]'>Visited page not found, please go to homepage.</p>
//         <button onClick={()=> navigate('/')} className='bg-Primary w-max px-6 py-4 cursor-pointer text-white font-medium rounded'>Go home page</button>
//     </div>
//   )
// }

// export default Error


import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();

  // Check if user is logged in (example using token)
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleRedirect = () => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <div className='flexCenter flex-col gap-3 h-screen'>
      <h1 className='font-semibold text-dark2 text-7xl'>404 Not Found</h1>
      <p className='text-[#636363]'>
        Visited page not found, please go to homepage.
      </p>
      <button
        onClick={handleRedirect}
        className='bg-Primary w-max px-6 py-4 cursor-pointer text-white font-medium rounded'
      >
        Go home page
      </button>
    </div>
  );
};

export default Error;
