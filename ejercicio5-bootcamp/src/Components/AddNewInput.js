import React, { useState} from 'react'

export default function AddNewInput({ setToDoPropiedadComponente }) {

  const [newInput, setNewInput] = useState ("") ;

  function handleSubmit(e){
    e.preventDefault();

    setToDoPropiedadComponente(currentToDos =>[{title: newInput, completed: false},...currentToDos]); //esto es para añadir la nueva tarea al principio de la lista
    
    setNewInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="my-4 mx-4">
      <input  type="text" 
              placeholder="nueva tarea" 
              className="form-control"
              onChange={e => setNewInput(e.target.value)}
              value={newInput}
              />
      <button>Submit</button>
    </form>
  )
}
