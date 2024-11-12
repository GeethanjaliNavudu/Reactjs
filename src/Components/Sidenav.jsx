import React from 'react';
import { Link } from 'react-router-dom';
function Sidenav() {
      return (
        
        <div className='sidenav'>
        
          <ul>
          <h3>DASHBOARD</h3>
            <li>
              <Link to="/Viewallsarees">Sarees</Link>
            </li>
            <li>
              <Link to="/ViewallKurtis">Kurtis</Link>
            </li>
            <li>
              <Link to="/Viewallwatches">Watches</Link>
            </li>
            <li>
              <Link to="/Viewallfashion">Fashion</Link>
            </li>
          </ul>
          <Link to="/"><button>Logout</button></Link>
        </div>
       
      );
    }
    
    export default Sidenav;
    

