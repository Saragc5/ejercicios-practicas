import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import "./Card.css";


function  Card (props) {

  return(
    <div className="card-body">
      <img 
      className="imagen-card"
      src={`${props.imagen}.jpg`}
      alt={`Foto de ${props.imagen}` }  width="180" height="280"/>
      <h1 className="title">{props.title}</h1>
      <p className="text">{props.text}</p>
      <button type="button" class="btn btn-primary">{props.boton}</button>
     
      
    </div>
  );
};
export default Card;
