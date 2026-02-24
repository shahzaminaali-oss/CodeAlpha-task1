import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flashcard from './component/Flashcard'
import Form from './component/Form'

function App() {
   
const [card, setCard] = useState(() => {
  return JSON.parse(localStorage.getItem('cards')) || [];
});

useEffect(() => {
  localStorage.setItem('cards', JSON.stringify(card));
}, [card]);
  return (
   <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form card={card} setCard={setCard} />} />
        <Route path="/fcard" element={<Flashcard card={card} />} />
      </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
