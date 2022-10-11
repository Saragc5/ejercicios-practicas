import './App.css';
import { useState, useEffect } from 'react';
import AddNewInput from './Components/AddNewInput';
import ListaToDo from './Components/ListaToDo';

function App() {
   //creo el estado: este ejercicio no lleva array con cosas iniciales
  const [toDoTarea, setToDo] = useState([]);

   //hacer fetch con useEffect:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos") 
      .then(response => response.json())
      .then(data =>setToDo(data.slice(0,20))); //data.slice dice que coja de data solo los 20 primeros)
  }, []);

  
  return (
    <div className="App">
    <h2>Lista de tareas</h2>
    <AddNewInput setToDoPropiedadComponente = {setToDo}/>
    <ListaToDo toDoPropiedadComponente={toDoTarea} setToDoPropiedadComponente = {setToDo}/>
    
  
  </div>
  );
}

export default App;
