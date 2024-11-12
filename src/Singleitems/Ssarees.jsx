import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { sareesData } from '../Data/Dsarees';
import Sidenav from '../Components/Sidenav';


function Ssarees() {
  const { id } = useParams();
  const product = sareesData.find((e) => e.id === Number(id));
  
 return (
    <Row>
      <Col sm={2}>
        <Sidenav />
      </Col>
      <Col sm={10}>
    
        <div className='m98'>
          <img src={product.image} alt={product.Brand} />
          <p>Id: {product.id}</p>
          <p>Brand: {product.Brand}</p>
          <p>Price: {product.Price}</p>
          <button>Add to Cart</button>
        </div>
     
      </Col>
    </Row>
  
  );
}

export default Ssarees;
