import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'
import ViewDsarees from '../View/ViewDsarees'
import ViewDKurtis from '../View/ViewDKurtis'
import ViewDWatches from '../View/ViewDWatches'
import ViewDFashion from '../View/ViewDFashion'




function Dashboard() {
  return (
    <div class="container-fluid">
      <Row>
        <Col sm={2} >
      <Sidenav />
      </Col>
        <Col sm={10}>
     <Header />
     <ViewDsarees />
     <ViewDKurtis />
     <ViewDWatches />
     <ViewDFashion />
     
   
       </Col>
        
        
    </Row>
   
    </div>
  )
}

export default Dashboard
