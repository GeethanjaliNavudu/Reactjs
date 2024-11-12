import React from 'react'
import { kurtisData } from '../Data/DKurtis'
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import { Link } from 'react-router-dom';

function Viewallkurtis() {
  const kurtis=kurtisData
  return (
    <Row>
      <Col sm={2}>
        <Sidenav/>
      </Col>
      <Col sm={10}>
      <Header/>
    <div className='container'>
    {
    kurtis.map((e) => (
        <div className='m99' >
              <Link to={`/ViewDKurtis/${e.id}`}>
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

export default Viewallkurtis
