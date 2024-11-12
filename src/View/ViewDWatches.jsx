import React from 'react';
import { watchesData } from '../Data/DWatches';
import { Link } from 'react-router-dom';

function ViewDWatches() {
    const slicewatches = watchesData.slice(0, 3);
   
    return (
        <div className='container'>
            {
            slicewatches.map((e) => (
                <div className='m99'> 
                   <Link to={`/ViewDWatches/${e.id}`}>
                    <img src={e.image} alt={e.Brand} /></Link>
                    <p>Id: {e.id}</p>
                    <p>Brand: {e.Brand}</p>
                    <p>Price: {e.Price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
            <Link to='/Viewallwatches'>
                <button className='g1'>See all</button>
            </Link>
        </div>
    );
}

export default ViewDWatches;
