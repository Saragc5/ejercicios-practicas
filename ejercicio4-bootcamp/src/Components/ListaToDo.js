import React from 'react';
import "../stylesheet/ListaToDo.css";

export default function ListaToDo({ toDoPropiedadComponente, setToDoPropiedadComponente }) {
  
  //eliminar el elemento de la lista:
  //(lo dejo comentado porque no me funciona el eliminar y necesito este ejercicio para el ej.5)
  // const eliminarTarea = (title) => {
  //   const tareasActualizadas = toDoPropiedadComponente.filter(toDoPropiedadComponente =>
  //     toDoPropiedadComponente.title !== title);
  //   setToDoPropiedadComponente(tareasActualizadas);
  //   };

       // const eliminarTarea = (title) => {
  //   const tareasActualizadas = toDoPropiedadComponente.filter(toDoPropiedadComponente =>
  //toDoPropiedadComponente.title !== title);
  //   setTareas(tareasActualizadas);
  //}
  
  
  //hago la funcion toggle que va a tachar el elemento de la lista:
  const toggleCompleted = (e, index) => {
      const newToDo = [...toDoPropiedadComponente];
      newToDo[index].completed = !newToDo[index].completed;
      setToDoPropiedadComponente(newToDo);
  }

  //Una alternativa:
  //const toggleCompleted = (e, index) => {
  //  if(e.target.tagName !== "BUTTON"){
    //const newToDo = [...toDoPropiedadComponente];
    //newToDo(index).completed = !newToDo[index].completed;
    //setToDoPropiedadComponente(newToDo);
    //}
  //}

  //Otr alternativa, más complicada:
  // setToDo(currentToDo => currentToDo.map((toDoTarea, index) => {
  //   return idx === index ? {...toDoTarea, completed: !toDoTarea.completed} : toDoTarea;
  // }))


  
 

// const eliminarTarea = (id) => {
//   const tareasActualizadas = tareas.filter(tarea =>tarea.id !== id);
//   setTareas(tareasActualizadas);
// }

  return (
    <ul className="list-group-container">
    {toDoPropiedadComponente.map((list, index) => {   
  
      return (
      <li className={`list-group-item d-flex justify-content-between ${list.completed ? "completed" : "" }`}    //esto es para que si pincho la tarea me la tache y debe estar antes que el toggle de abajo porque si no, no me lo usa
          onClick={e => toggleCompleted (e, index)}>
          Tarea  {index} : {list.title}
          {/* <button className="btn btn-danger" onClick={() => eliminarTarea(list.title)}>X</button> */}
      </li>
      )
    })};
     
   
    </ul>
  )
}
