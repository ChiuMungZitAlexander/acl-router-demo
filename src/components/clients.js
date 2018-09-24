import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => (
  <div className='clients-page'>
    <p>Clients</p>
    <div>
      <Link to='/clients/new'>
        <button>create new</button>
      </Link>
      <Link to='/clients/edit'>
        <button>edit clients</button>
      </Link>
      <Link to='/upload'>
        <button>upload</button>
      </Link>
    </div>
  </div>
);

export default Clients;
