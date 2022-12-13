import React from 'react';
import Lista from './Lista'

export default function Tienda (){

  const tienda = {
    electronics:[
        {id: 27, name:"Televisor", marca:"LG", modelo:"XP/302", precio:399},
        {id: 28, name:"Equipo Hi-Fi", marca:"LSamsungG", modelo:"VF235", precio:179},
        {id: 29, name:"Televisor", marca:"Sony", modelo:"Bravia-173", precio:498},
    ],
    groceries:[
        {id: 30, name:"Galletas", marca:"María", precio:0.90},
        {id: 31, name:"Ensalada", marca:"Imizurra", precio:1.30},
        {id: 32, name:"Patatas", marca:"McKain", precio:0.90},
        {id: 33, name:"Pasta", marca:"Gallo", precio:0.90},
    ],
    pets:[
        {id: 34, name:"Croquetas para gatos", marca:"Purina", precio:4.90},
        {id: 35, name:"Arena para gato", marca:"Limpior", precio:1.10},        
    ]
  };

  return(
        <div>
            <Lista categoria="Electrónica" productos={tienda.electronics} /> 
            <Lista categoria="Alimentación" productos={tienda.groceries} />
            <Lista categoria="Mascotas" productos={tienda.pets} />
       </div>
  );
}