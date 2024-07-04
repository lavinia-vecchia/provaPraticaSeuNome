import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Escudo from './Escudo';


function Clubes() {
  const [clubs, setClubs] = useState([]);


  useEffect(() => {
    axios.get('https://api.cartola.globo.com/clubes')
      .then(response => {
        setClubs(Object.values(response.data));
      })
      .catch(error => {
        console.error("Erro", error);
      });
  }, []);


  return (
    <div className="club-list">
      {clubs.map(club => (
        <Escudo key={club.id} club={club} />
      ))}
    </div>
  );
}


export default Clubes;