import React, { useState } from 'react'
import {useForm} from "react-hook-form"
const Form = ({card,setCard}) => {
    const [answer,setAnswer]=useState(null)
    const [question,setQuestion]=useState(null)
  
    const defaultValues={
      answer:"",
      question:""
    }
    const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm({defaultValues})

    const capitalizeSentences = (text) => {
  return text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
};


    const onSubmit=(data)=>{
      console.log("data",data)
       if (!data.question.trim() || !data.answer.trim()) {
      alert("Please fill both Question and Answer before adding!");
      return;
    }
 const formattedQuestion = capitalizeSentences(data.question);
          const formattedAnswer = capitalizeSentences(data.answer);
            const newCard={
                id:Date.now(),
                answer:formattedAnswer,
                question:formattedQuestion,
            }

            setCard([...card,newCard])
            
            reset(defaultValues)
      }
         
    
  return (
    <div>
      <h1 className='pb-2 w-40 ml-120 mt-12 font-bold text-2xl border-b-2 border-blue-800'>ADD CARDS</h1>
      <form className='flex flex-col gap-5 pb-8 mt-12  shadow-xl w-[1200px]' onSubmit={handleSubmit(onSubmit)}>
          <input 
          className='px-3 py-6 font-bold border border-blue-600 mx-6 my-3 focus:outline-none'
        type="text" 
        placeholder='Enter Question'
        {...register("question",{required:true})}
       
         onChange={(e) =>
    setValue("question", capitalizeSentences(e.target.value))
  }
        />
        {errors.question && (
  <p style={{ color: "red" }}>Question is required</p>
)}
        <input 
         className='px-3 py-6 border border-blue-600 mx-6 mb-3 focus:outline-none'
        type="text" 
        placeholder='Enter Answer'
        {...register("answer",{required:true})}
         onChange={(e) =>
    setValue("answer", capitalizeSentences(e.target.value))
  }
        />
        {errors.answer && (
  <p style={{ color: "red" }}>Answer is required</p>
)}
        <button type="submit"  className='cursor-pointer w-32 p-4 ml-128 text-white bg-blue-900'>Add Card</button>
      </form>

     
    </div>
  )
}

export default Form
