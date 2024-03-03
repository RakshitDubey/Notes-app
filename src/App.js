import React, { useState } from 'react'

import './App.css'
import Note from './components/Note'
function App() {
  const[notes,setnotes]=useState([])
  const addnote = () => {
    setnotes([...notes, { id: Date.now(), text: "Click edit to write your note" }]);

  
  }
  const updatenote = (id, newtext) => {
    setnotes((prevnote) =>
      prevnote.map((note) => (note.id === id ? { ...note, text: newtext } : note))
    );
  };

  const deletenote=(id)=>{

    setnotes(notes.filter((note)=>note.id!==id))
  }
  
  return (
    <div>
       <h1 className="text-5xl text-white  m-3 ml-5">
      Notes App
    </h1>
    <div className='text-center'>
      <button className='text-white bg-red-600 px-5 py-2.5 me-2 mb-2 rounded-lg' onClick={addnote}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>

    </div>
  <div className='flex flex-wrap'>
  {
    notes.map((note)=>(
      <Note key={note.id} id={note.id} text={note.text} onUpdate={updatenote} onDelete={()=>deletenote(note.id)}/>

    ))
  }
  </div>
    </div>
  )
}

export default App
