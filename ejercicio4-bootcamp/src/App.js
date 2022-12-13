import './App.css';
import { useState, useEffect } from 'react';
import AddNewInput2 from './Components/AddNewInput2';
import ListaToDo2 from './Components/ListaToDo2';

export default App;
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data.splice(0,20)));
  }, [])

  return (
    <div className="App">
      <AddNewInput2 setTodos={setTodos}/>
      <ListaToDo2 setTodos={setTodos} todos={todos}/>
    </div>
  );
}


