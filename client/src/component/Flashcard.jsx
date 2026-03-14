import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Flashcard = ({card,setCard}) => {
   const {register,handleSubmit,setValue,formState:{errors}}=useForm()
  const capitalizeSentences = (text) => {
  return text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
};



  const [index,setIndex]=useState(0)
  
  const [isEditing, setIsEditing] = useState(false)
const [editQuestion, setEditQuestion] = useState("")
const [editAnswer, setEditAnswer] = useState("")
const [showAnswer,setshowAnser]=useState(false)
  const handlePre=()=>{
    if(index>0)
      setIndex(index-1)
  }
  const handleNext=()=>{
    if(index<card.length-1)
      setIndex(index+1)
  }

  const handleDelete=()=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");

  if (!confirmDelete) return;
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
      alert("Card updated successfully");
        setIsEditing(false)
      
    
  }
  if (card.length === 0) {
  return <h2 className="text-center my-64 text-3xl text-gray-600">No Flashcards Available</h2>
}

const handleOpen=()=>{
  setshowAnser(!showAnswer)
}
  return (

  isEditing ?  
  (
    <>
    <div className='flex justify-around '>
       <h1 className='pb-2 mt-8 w-64  font-bold text-gray-600 text-2xl border-b-2 border-blue-800'>UPDATE FLASHCARDS</h1>
       <div>
<Link to='/'><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 text-lg mt-6 text-gray-200 rounded cursor-pointer'>Home</button></Link>
<Link to='/start'><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 text-lg mt-6 text-gray-200 rounded cursor-pointer ml-4'>Add Your Cards</button></Link>
<Link to='/fcard'><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 text-lg mt-6 text-gray-200 rounded cursor-pointer ml-4'>View Card</button></Link>
       </div>
      
    
    </div>
     
     
    <form className='flex flex-col gap-5 justify-center items-center pb-2 mt-12 rounded-xl  border-t-2 border-l-2 border-blue-600 shadow-2xl mx-12 ' onSubmit={handleSubmit(onSubmit)}>
          <input 
          className='px-6 py-6 mt-12 font-bold w-180 border-b-2 border-b-blue-600 mx-6 my-3 focus:outline-none'
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
         className='px-6 py-6 mt-12 font-bold w-180 border-b-2 border-b-blue-600 mx-6 my-3 focus:outline-none'
        type="text" 
        placeholder='Enter Answer'
        {...register("editAnswer",{required:true})}
         onChange={(e) =>
    setValue("editAnswer", capitalizeSentences(e.target.value))
  }
        />
        {/* {errors.answer && (
  <p style={{ color: "red" }}>Answer is required</p>
)} */}
         <button type="submit"  className='cursor-pointer w-32 p-4 mr-30 mb-6 mt-4 text-gray-100 bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 rounded'>Update Card</button>
      </form>
    </>)
    : (

    <>
    <div className='flex justify-around '>
       <h1 className='pb-2 mt-8 w-24  font-bold text-gray-600 text-2xl border-b-2 border-blue-800'>FLASHCARDS</h1>
       <div>
<Link to='/'><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 text-lg mt-6 text-gray-200 rounded cursor-pointer'>Home</button></Link>
<Link to='/start'><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 text-lg mt-6 text-gray-200 rounded cursor-pointer ml-4'>Add Your Cards</button></Link>
       </div>
      
    
    </div>

   
    <div className=' flex gap-6 justify-center  mt-6 '>
      <button onClick={handlePre} disabled={index==0} className='cursor-pointer p-5 h-12 mt-60'><FaArrowLeft /></button>
      <div className='relative rounded-2xl h-128 w-2/3 shadow-2xl pl-12'>
        <h1 className='w-128 ml-6 mt-12  border-b-2 border-blue-900 text-left p-6 text-blue-800 font-bold text-2xl'>{card[index].question}</h1>
        {
          showAnswer &&(
 <p className='h-auto mt-2 p-6 text-blue-800 w-128 mb-0 text-left ml-6 '>{card[index].answer}</p> 
          )

        }
        
     
        <div className='flex'>
          <div className='absolute bottom-6 left-16 top-94'>
              <button onClick={handleOpen} className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 w-36 ml-2 mt-6 text-lg text-gray-200 rounded cursor-pointer'>{
                  showAnswer?"Hide Answer":"Show Answer"
}</button>
           <button onClick={handleDelete} className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4  ml-4 w-24 text-lg mt-6 text-gray-200 rounded cursor-pointer'>Delete</button>
           <button onClick={handleEdit} className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 w-24 text-lg mt-6 text-gray-200 rounded ml-4 cursor-pointer'>Update</button>
           </div>
         <span className="absolute top-64 left-172 flex items-center justify-center 
  h-12 w-12 bg-gradient-to-br from-[#021261]  to-yellow-600 rounded-full">
    
  </span>
       <span className="absolute top-76 left-160 flex items-center justify-center 
  h-18 w-18 bg-gradient-to-br from-[#021261]  to-yellow-600 rounded-full ">
    
  </span>

  {/* Second Circle (Bottom Right) */}
  <span className="absolute bottom-10 right-58 flex items-center justify-center 
  h-24 w-24  rounded-full bg-gradient-to-br from-[#021261]  to-yellow-600">
    
  </span>
  </div>
      </div>
        <button onClick={handleNext} disabled={index==card.length-1} className='cursor-pointer  p-5 h-12 mt-60'> <FaArrowRight /></button>
         
    </div>
    </>
  )



  )
}

export default Flashcard
