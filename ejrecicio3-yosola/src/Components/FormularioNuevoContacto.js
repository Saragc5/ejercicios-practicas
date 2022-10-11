import React, { useState } from 'react';

export default function FormularioNuevoContacto({ setContacts }) {

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [ciudad, setCiudad] = useState("");
  

  function handleNombre(e){
    setNombre(e.target.value);
  };
  function handleApellidos(e){
    setApellidos(e.target.value);
  };
  function handleTelefono(e){
    setTelefono(e.target.value);
  };
  function handleDireccion(e){
    setDireccion(e.target.value);

  };
  function handleCodigoPostal(e){
    setCodigoPostal(e.target.value);
  };
  function handleCiudad(e){
    setCiudad(e.target.vale);
  };

  function submit(e){
    e.preventDefault();

    const nuevoContacto = {nombre, apellidos, telefono, direccion, codigoPostal, ciudad};

    
    setContacts([...contacts, nuevoContacto]);

    console.log(nuevoContacto);

  }

  

  
  return (
    <div className="container">
      <form className="form-group col-6">
        <input type="text" className="form-control mb-2" onChange={handleNombre} placeholder="Introduce tu nombre" />
        <input type="text" className="form-control mb-2" onChange={handleApellidos} placeholder="Introduce tus apeillos" />
        <input type="text" className="form-control mb-2" onChange={handleTelefono} placeholder="Introduce tu teléfono" />
        <input type="text" className="form-control mb-2" onChange={handleDireccion} placeholder="Introduce tu dirección" />
        <input type="text" className="form-control mb-2" onChange={handleCodigoPostal} placeholder="Introduce tu codigo postal" />
        <input type="text" className="form-control mb-2" onChange={handleCiudad} placeholder="Introduce tu ciudad" />
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}
