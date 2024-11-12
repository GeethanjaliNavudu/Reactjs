import React from 'react'
import { fashionData } from '../Data/DFashion';
import { Link } from 'react-router-dom';

function ViewDFashion() {
    const slicefashion=fashionData.slice(0,3);
  return (
    <div className='container'>
    {
   slicefashion.map((e) => (
       <div className='m99' >
        <Link to={`/ViewDFashion/${e.id}`}>
          <img src={e.image} alt={e.Brand} /></Link>
           <p>Id:{e.id}</p>
           <p>Brand:{e.Brand}</p>
           <p>Price:{e.Price}</p>
           <button>Add to Cart</button>
       </div>
   ))}
    <Link to='/Viewallfashion'><button className='g1'>See all</button></Link>
</div>
  )
}

export default ViewDFashion
