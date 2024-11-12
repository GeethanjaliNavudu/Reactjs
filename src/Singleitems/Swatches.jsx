import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { watchesData } from '../Data/DWatches';
import Sidenav from '../Components/Sidenav';


function Swatches() {
  const { id } = useParams();
  const product = watchesData.find((e) => e.id === Number(id));
  
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

export default Swatches;
