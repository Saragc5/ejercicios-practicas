import React from 'react'

export default function Agenda({ contacts }) {
  return (
    <div className="row">
      {contacts.map((contacts, index) => {
        return (
          <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contacts.telefono}>
            <li className="list-group-item active">Contacto {index + 1 }</li>
            <li className="list-group-item">{contacts.nombre}</li>
            <li className="list-group-item">{contacts.apellidos}</li>
            <li className="list-group-item">{contacts.telefono}</li>
            <li className="list-group-item">{contacts.direccion}, {contacts.codigoPostal}, {contacts.ciudad}</li>
       
          </ul>
        )
      })}
      
    </div>
  )
}
