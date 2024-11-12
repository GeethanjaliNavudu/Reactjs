import React from 'react'
import { watchesData } from '../Data/DWatches'
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import { Link } from 'react-router-dom';


function Viewallwatches() {
    const watches=watchesData
  return (
    <Row>
        <Col sm={2}>
            <Sidenav/>
      </Col>
      <Col sm={10}>
    <Header/>
    <div className='container'>
      {
    watches.map((e) => (
        <div className='m99' >
              <Link to={`/ViewDWatches/${e.id}`}>
            <img src={e.image} alt={e.Brand} /></Link>
            <p>Id:{e.id}</p>
            <p>Brand:{e.Brand}</p>
            <p>Price:{e.Price}</p>
            <button>Add to Cart</button>
        </div>
    ))}
   
    </div>
    </Col>
  </Row>
  )
}

export default Viewallwatches
