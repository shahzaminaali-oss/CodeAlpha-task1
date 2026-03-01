import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    // bg-gradient-to-direction from-color via-color to-color
    <div className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 h-screen' >
        <h1 className='text-4xl text-gray-200 text-center pt-32 pb-12'>Boost Your Learning with Smart FlashCards</h1>
        <p className='text-center text-gray-200 px-32 text-xl mb-12'>This project is developed using React.js for frontend development, focusing on reusable components and efficient state management. It demonstrates practical implementation of CRUD operations and modern UI design principles.</p>
      <Link to="/start"><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 ml-132 cursor-pointer w-64 p-6 text-gray-200 rounded-xl border border-white/20 shadow-2xl'>LET START</button></Link>
    </div>
  )
}

export default Home
