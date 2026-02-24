import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Flashcard = ({card}) => {
  const [index,setIndex]=useState(0)
  const handlePre=()=>{
    if(index>0)
      setIndex(index-1)
  }
  const handleNext=()=>{
    if(index<card.length-1)
      setIndex(index+1)
  }
  return (
<>
<h1 className='pb-2 w-24 ml-60 font-bold text-2xl border-b-2 border-blue-800'>FLASHCARDS</h1>
    <div className=' flex gap-6 justify-center  mt-6 w-[1200px]'>
      <button onClick={handlePre} disabled={index==0} className='cursor-pointer shadow-xl p-5 h-12 mt-60 rounded-2xl bg-blue-100'><FaArrowLeft /></button>
      <div className='relative rounded-2xl h-128 w-2/3 shadow-2xl pl-12'>
        <h1 className='w-128 ml-6 mt-24  border-b-2 border-blue-900 text-left p-6 text-blue-800 font-bold text-2xl'>{card[index].question}</h1>
        <p className='h-auto mt-2 p-6 text-blue-800 w-128 text-left ml-6 '>{card[index].answer}</p>
         <span className="absolute top-64 left-172 flex items-center justify-center 
  h-12 w-12 bg-blue-800 rounded-full text-blue-800">
    1
  </span>
       <span className="absolute top-76 left-160 flex items-center justify-center 
  h-18 w-18 bg-blue-800 rounded-full text-blue-800">
    1
  </span>

  {/* Second Circle (Bottom Right) */}
  <span className="absolute bottom-12 right-32 flex items-center justify-center 
  h-24 w-24 bg-blue-800 rounded-full text-blue-800">
    2
  </span>
      </div>
        <button onClick={handleNext} disabled={index==card/length-1} className='cursor-pointer shadow-xl p-5 h-12 mt-60 rounded-2xl bg-blue-100'> <FaArrowRight /></button>
         
    </div>
</>
  )
}

export default Flashcard
