import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div className='unauthorized-page'>
    <p>
      You are not authorized<br />
      to visit this page!
    </p>
    <Link to='/'>Go back to home</Link>
  </div>
);

export default Unauthorized;
