import React from 'react'
import { useState} from 'react';

export default function NuevoContacto({ setContacts}) {
  //Creación de los estados:
  // const [nombre, setNombre] = useState("");
  // const [apellidos, setApellidos] = useState("");
  // const [telefono, setTelefono] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [codigoPostal, setCodigoPostal] = useState("");
  // const [ciudad, setCiudad] = useState("");

  

  //Configuración de los estados:
  // function handleNombre(e) {
  //   setNombre(e.target.value);
  // };
  // function handleApellidos(e) {
  //   setApellidos(e.target.value);
  // };
  // function handleTelefono(e) {
  //   setTelefono(e.target.value);
  // };
  // function handleDireccion (e) {
  //   setDireccion(e.target.value);
  // };
  // function handleCodigoPostal(e) {
  //   setCodigoPostal(e.target.value);
  // };
  // function handleCiudad(e) {
  //   setCiudad(e.target.value);
  // };

  //MUY IMPORTANTE:
  //Crear mi objeto con 6 propiedades pero vacío, se irá rellenando con los datos que metemos en el form.
  const initialState = {
    nombre:"",
    apellidos:"",
    telefono:"",
    direccion:"",
    codigoPostal:"",
    ciudad:""
  };

  //Crear el estado: Es único para todo el formulario,
  //es un objeto con tantas propiedades como inputs tengamos:
  const [form, setForm] = useState(initialState);

  //Crear la confirguración del estado:Actualizamos solo la propiedad relacionada con el
  //input que nos llega a traves del atributo "name" del input
  function handleInput(e){
    
    setForm({...form, ...{[e.target.name] : e.target.value}})

  }
  //Crear la función de submit del botón:***esto mirar la libreta porque tengo apuntado
  //una forma mucho más corta y fácil de entender para mi.Es lo mismo pero más corto.
  function submit (e) {
    e.preventDefault();

    // const newContact = {nombre, apellidos, telefono,  direccion, codigoPostal, ciudad};

    const newContact = {
      nombre: form.nombre,
      apellidos: form.apellidos,
      telefono: form.telefono,
      direccion: form.direccion,
      codigoPostal: form.codigoPostal,
      ciudad: form.ciudad
    }
    setContacts(currentContacts =>[...currentContacts, newContact ]);

    // console.log(nuevoContacto);

    //esto es el reset:
    setForm(initialState);
    // setNombre("");
    // setApellidos("");
    // setTelefono("");
    // setDireccion("");
    // setCodigoPostal("");
    // setCiudad("");

  }
  //MUY IMPORTANTE HASTA AQUÍ.
  //En el form hemos añadido el evento onSubmit
  //En los inputs hemos añadido name, value, onChange. Name se añade al html para que la funcion handle input de arriba sepa qué mostrar.
  return (
    <div>
     <form className="form-group" onSubmit={submit}>
      <input name="nombre" className="form-control mb-3" type="text" value={form.nombre} onChange={handleInput} placeholder="Introduce el nombre" />
      <input name="apellidos" className="form-control mb-3" type="text" value={form.apellidos} onChange={handleInput} placeholder="Introduce el apellido" />
      <input name="telefono" className="form-control mb-3" type="text" value={form.telefono} onChange={handleInput} placeholder="Introduce el teléfono" />
      <input name="direccion" className="form-control mb-3" type="text" value={form.direccion} onChange={handleInput} placeholder="Introduce la dirección" />
      <input name="codigoPostal" className="form-control mb-3" type="text" value={form.codigoPostal} onChange={handleInput} placeholder="Introduce el código postal" />
      <input name="ciudad" className="form-control mb-3" type="text" value={form.ciudad} onChange={handleInput} placeholder="Introduce la ciudad" />   
      <input className="btn btn-success" type="submit" value="Registrar"></input>
     </form>
    </div>
  )
}

