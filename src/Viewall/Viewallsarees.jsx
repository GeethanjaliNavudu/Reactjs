import React from 'react'
import { sareesData } from '../Data/Dsarees'
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import { Link } from 'react-router-dom';


function Viewallsarees() {
    const sarees=sareesData
  return (
    <Row>
      <Col sm={2}>
        <Sidenav/>
      </Col>
      <Col sm={10}>
      <Header/>
    <div className='container'>
    {
    sarees.map((e) => (
        <div className='m99' >
          
          <Link to={`/ViewDsarees/${e.id}`}>
            <img src={e.image} alt={e.Brand} />
            </Link>
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
  

export default Viewallsarees
