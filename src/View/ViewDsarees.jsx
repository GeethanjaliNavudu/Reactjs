import React from 'react';
import { sareesData } from '../Data/Dsarees';
import { Link } from 'react-router-dom';

function ViewDsarees() {
  const slicesarees = sareesData.slice(0, 3);

  return (
    
    <div className='container'>
      {slicesarees.map((e) => (
        <div className='m99'>
     
          <Link to={`/ViewDsarees/${e.id}`}>
            <img src={e.image} alt={e.Brand} />
            </Link>
            <p>Id: {e.id}</p>
            <p>Brand: {e.Brand}</p>
            <p>Price: {e.Price}</p>
            <button>Add to Cart</button>
         
        </div>
      ))}
      <Link to='/Viewallsarees'>
        <button className='g1'>See all</button>
      </Link>
    </div>
   
   
  );
}

export default ViewDsarees;
