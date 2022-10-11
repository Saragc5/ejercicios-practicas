import React from 'react';


export default function Agenda({ contacts }) {
  
  return (
    <div className="container-fluid row xs-4">
     {contacts.map ((contacts, index) =>{
     return (
     <ul class="list-group mb-3 col-12 col-sm-6 col-xl-3 "key={contacts.id}>
        <li class="list-group-item active">Contacto{index + 1}</li>
        <li class="list-group-item">{contacts.nombre}</li>
        <li class="list-group-item">{contacts.apellidos}</li>
        <li class="list-group-item">{contacts.telefono}</li>
        <li class="list-group-item">{contacts.direccion} {contacts.codigoPostal} {contacts.ciudad}</li>
        
      </ul>);
     })
     }
    </div>
  )
}
