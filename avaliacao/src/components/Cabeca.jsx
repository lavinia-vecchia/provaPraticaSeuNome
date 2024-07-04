import React from 'react';


function Header({ nome, Turma }) {
  return (
    <header className='cabeca'>
      <img src='senai.png'/>
      <p>{nome} - {Turma}</p>
    </header>
  );
}


export default Header;