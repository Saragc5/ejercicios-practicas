import { useState } from 'react';
import '../App.css';
import Agenda from '../Components/Agenda';
import NuevoContacto from '../Components/NuevoContacto'


function Ejercicio3Pages() {

  const initialState = [
    {id: 1, nombre:"Sara", apellidos: "Muñoz Campos", direccion:"Jose Alvarez de la Vega 4", ciudad: "Estepona", codigoPostal:29680, telefono: 615856395},
    {id: 2, nombre:"Eva", apellidos: "García Rodríguez", direccion:"Ricardo Soriano 23", ciudad: "Marbella", codigoPostal:29600, telefono: 650326598},
    {id: 3, nombre:"Margarita", apellidos: "Pérez Gómez", direccion:"Jose Alvarez de la Vega 4", ciudad: "Puerto Banús", codigoPostal:29670, telefono: 680954632}
    
  ];
  const [contacts, setContacts] = useState(initialState);




  return (
    <div className="container">
      <h2 className="my-4">Agenda</h2>
      <Agenda contacts= {contacts} setContacts={setContacts}/>
      <h2 className="my-4">Nuevo contacto</h2>
      <NuevoContacto setContacts={setContacts} />    
    </div>
  );
}

export default Ejercicio3Pages;