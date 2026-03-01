import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
const Form = ({card,setCard}) => {
    const [answer,setAnswer]=useState(null)
    const [question,setQuestion]=useState(null)
  
    const defaultValues={
      answer:"",
      question:""
    }
    const {register,handleSubmit,reset,setValue}=useForm({defaultValues})

    const capitalizeSentences = (text) => {
  return text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
};

const onError = () => {
  alert("Please fill all fields before submitting");
};
    const onSubmit=(data)=>{
      console.log("data",data)
    //    if (!data.question.trim() || !data.answer.trim()) {
    //   alert("Please fill both Question and Answer before adding!");
    //   return;
    // }
 const formattedQuestion = capitalizeSentences(data.question);
          const formattedAnswer = capitalizeSentences(data.answer);
            const newCard={
                id:Date.now(),
                answer:formattedAnswer,
                question:formattedQuestion,
            }

            setCard([...card,newCard])
            alert("Form successfully submitted")
            reset(defaultValues)
      }
         
    
  return (
    <div className='bg-gray-100 min-h-screen w-screen py-12'>
      <div className='flex'>
        <Link to='/'><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 text-lg mt-0 text-gray-200 rounded ml-260 cursor-pointer'>Home</button></Link>
<Link to='/fcard'><button className='bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 p-4 text-lg mt-0 text-gray-200 rounded  ml-4 cursor-pointer'>View Your Cards</button></Link>

      </div>
   
      <h1 className='pb-2 text-gray-600 w-40 ml-120 mt-2 font-bold text-2xl border-b-2 border-blue-800'>ADD CARDS</h1>
      <form className='flex flex-col gap-5 justify-center items-center pb-2 mt-12 rounded-xl  border-t-2 border-l-2 border-blue-600 shadow-2xl mx-12' onSubmit={handleSubmit(onSubmit,onError)}>
          <input
          className='px-6 py-6 mt-12 font-bold w-180 border-b-2 border-b-blue-600 mx-6 my-3 focus:outline-none'
        type="text" 
        placeholder='Enter Question'
        {...register("question",{required:"Question is required"})}
       
         onChange={(e) =>
    setValue("question", capitalizeSentences(e.target.value))
  }
        />
     
        <input 
         className='px-6 py-6 w-180 border-b-2 border-b-blue-600  mx-6 mb-3 focus:outline-none'
        type="text" 
        placeholder='Enter Answer'
        {...register("answer",{required:"Answer is required"})}
         onChange={(e) =>
    setValue("answer", capitalizeSentences(e.target.value))
  }
        />
       

        <button type="submit"  className='cursor-pointer w-32 p-4 mr-30 mb-6 mt-4 text-gray-100 bg-gradient-to-br from-[#021261] via-[#3277d1] to-yellow-600 rounded'>Add Card</button>
      </form>


     
    </div>
  )
}

export default Form
