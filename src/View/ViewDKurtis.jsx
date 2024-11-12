import React from 'react'
import { Link } from 'react-router-dom';
import { kurtisData } from '../Data/DKurtis';
function ViewDKurtis() {
    const slicekurtis=kurtisData.slice(0,3);

  return (
    <div className='container'>
     {
    slicekurtis.map((e) => (
        <div className='m99' >
             <Link to={`/ViewDKurtis/${e.id}`}>
            <img src={e.image} alt={e.Brand} /></Link>
            <p>Id:{e.id}</p>
            <p>Brand:{e.Brand}</p>
            <p>Price:{e.Price}</p>
            <button>Add to Cart</button>
        </div>
    ))}
     <Link to='/Viewallkurtis'><button className='g1'>See all</button></Link>
</div>
  )
}

export default ViewDKurtis




