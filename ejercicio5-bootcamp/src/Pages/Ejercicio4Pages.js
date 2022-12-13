import '../App.css';
import { useState, useEffect } from 'react';
import AddNewInput from '../Components/AddNewInput';
import ListaToDo from '../Components/ListaToDo';

function Ejercicio4Pages() {
   //creo el estado: este ejercicio no lleva array con cosas iniciales
   const [todos, setTodos] = useState([]);

   //hacer fetch con useEffect:
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data.splice(0,20)));//data.slice dice que coja de data solo los 20 primeros)
  }, [])

  
  return (
    <div className="listaToDo">
      <AddNewInput setTodos={setTodos}/>
      <ListaToDo setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default Ejercicio4Pages;
