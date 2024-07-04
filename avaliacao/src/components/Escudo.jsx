import React from 'react';


function Escudo({ club }) {
  return (
    <div className="escudo">
      <img src={club.escudos['60x60']} alt={club.nome} className='ft'/>
      <h2 className='nome'>{club.nome}</h2>
      <p className='apelido'>{club.abreviacao}</p>
    </div>
  );
}


export default Escudo;