import { useState } from 'react';
import './App.css';
import Agenda from './Components/Agenda.js';
import FormularioNuevoContacto from './Components/FormularioNuevoContacto.js';

function App() {

  const estadoInicial = [
    
    {id: 1, nombre:"Sara", apellidos: "Muñoz Campos", direccion:"Jose Alvarez de la Vega 4", ciudad: "Estepona", codigoPostal:29680, telefono: 615856395},
    {id: 2, nombre:"Eva", apellidos: "García Rodríguez", direccion:"Ricardo Soriano 23", ciudad: "Marbella", codigoPostal:29600, telefono: 650326598},
    {id: 3, nombre:"Margarita", apellidos: "Pérez Gómez", direccion:"Jose Alvarez de la Vega 4", ciudad: "Puerto Banús", codigoPostal:29670, telefono: 680954632}  
];

  const [contacts, setContacts] = useState(estadoInicial);

  //funcion del evento:



  return (
    <div className="App">
      <h2 className="my-4">Agenda</h2>
      <Agenda contacts={contacts}/> 
      <h2 className="my-4">Formulario de nuevo contacto</h2>
      <FormularioNuevoContacto setContacts={setContacts}/>
       
    </div>
  );
}

export default App;
