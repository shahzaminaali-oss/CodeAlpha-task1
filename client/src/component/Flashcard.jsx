import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Flashcard = ({card,setCard}) => {
   const {register,handleSubmit,setValue,formState:{errors}}=useForm()
  const capitalizeSentences = (text) => {
  return text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
};



  const [index,setIndex]=useState(0)
  
  const [isEditing, setIsEditing] = useState(false)
const [editQuestion, setEditQuestion] = useState("")
const [editAnswer, setEditAnswer] = useState("")

  const handlePre=()=>{
    if(index>0)
      setIndex(index-1)
  }
  const handleNext=()=>{
    if(index<card.length-1)
      setIndex(index+1)
  }

  const handleDelete=()=>{
    const updateCard=card.filter((_,i)=>i!=index)
    setCard(updateCard)
    if(index>0)
      setIndex(index-1)
  }

  const handleEdit=()=>
  {
    setIsEditing(true)
    // setValue(fieldName, value) react-hook-form ka function hai jo input me value set karta hai.
    setValue("editQuestion",card[index].question)
      setValue("editAnswer",card[index].answer)
    // setEditQuestion(card[index].question)
    // setEditAnswer(card[index].answer)
  }


  const onSubmit=(data)=>{
    // yh array ke copy bna rha he , react me direct change ni hota isluyew hm copy bnaty he 
    const updateCard=[...card]
    updateCard[index]={
      question:data.editQuestion,
      answer:data.editAnswer
    }

      setCard(updateCard)
        setIsEditing(false)
      
    
  }
  if (card.length === 0) {
  return <h2 className="text-center mt-10">No Flashcards Available</h2>
}
  return (

  isEditing ? 
  (
    <>
    <form className='flex flex-col gap-5 pb-8 mt-12  shadow-xl w-[1200px]' onSubmit={handleSubmit(onSubmit)}>
          <input 
          className='px-3 py-6 font-bold border border-blue-600 mx-6 my-3 focus:outline-none'
        type="text" 
        placeholder='Enter Question'
        {...register("editQuestion",{required:true})}
       
         onChange={(e) =>
    setValue("editQuestion", capitalizeSentences(e.target.value))
  }
        />
       {/* {errors.question && (
  <p style={{ color: "red" }}>Question is required</p>
 )} */}
        <input 
         className='px-3 py-6 border border-blue-600 mx-6 mb-3 focus:outline-none'
        type="text" 
        placeholder='Enter Answer'
        {...register("answer",{required:true})}
         onChange={(e) =>
    setValue("editAnswer", capitalizeSentences(e.target.value))
  }
        />
        {/* {errors.answer && (
  <p style={{ color: "red" }}>Answer is required</p>
)} */}
        <button type="submit"  className='cursor-pointer w-32 p-4 ml-128 text-white bg-blue-900'>Save Card</button>
      </form>
    </>): (

    <>
    <h1 className='pb-2 w-24 ml-60 font-bold text-2xl border-b-2 border-blue-800'>FLASHCARDS</h1>
    <div className=' flex gap-6 justify-center  mt-6 w-[1200px]'>
      <button onClick={handlePre} disabled={index==0} className='cursor-pointer shadow-xl p-5 h-12 mt-60 rounded-2xl bg-blue-100'><FaArrowLeft /></button>
      <div className='relative rounded-2xl h-128 w-2/3 shadow-2xl pl-12'>
        <h1 className='w-128 ml-6 mt-24  border-b-2 border-blue-900 text-left p-6 text-blue-800 font-bold text-2xl'>{card[index].question}</h1>
        <p className='h-auto mt-2 p-6 text-blue-800 w-128 text-left ml-6 '>{card[index].answer}</p>
       
        <div className='flex'>
          <div className='mt-38 ml-6'>
           <button onClick={handleDelete} className='bg-blue-900 px-6 py-3 mr-3 cursor-pointer'>Delete</button>
           <button onClick={handleEdit} className='bg-blue-900 px-6 py-3 ml-3 cursor-pointer'>Edit</button>
           </div>
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
      </div>
        <button onClick={handleNext} disabled={index==card.length-1} className='cursor-pointer shadow-xl p-5 h-12 mt-60 rounded-2xl bg-blue-100'> <FaArrowRight /></button>
         
    </div>
    </>
  )



  )
}

export default Flashcard
