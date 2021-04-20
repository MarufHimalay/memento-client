import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AllOrders from '../../AllOrders/AllOrders';
import OrderForm from '../../Order/OrderForm/OrderForm';
import AddProducts from '../Dashboard/AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderDataTable from '../OrderDataTable/OrderDataTable';

const AdminPannel = () => {
    return (
       <div className="container m-2"> 
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
       <Row>
         <Col sm={3}>
           <Nav variant="pills" className="flex-column">
             <Nav.Item>
               <Nav.Link eventKey="first">Order List</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="second">Add Service</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="third">Make Admin</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="fourth">Manage Services</Nav.Link>
             </Nav.Item>
           </Nav>
         </Col>
         <Col sm={9}>
           <Tab.Content>
             <Tab.Pane eventKey="first">
             <AllOrders></AllOrders>
             </Tab.Pane>
             <Tab.Pane eventKey="second">
             <AddProducts></AddProducts>
             </Tab.Pane>
             <Tab.Pane eventKey="third">
             <MakeAdmin></MakeAdmin>
             </Tab.Pane>
             <Tab.Pane eventKey="fourth">
               <ManageServices></ManageServices>
               <h1>manage services</h1>
             </Tab.Pane>
           </Tab.Content>
         </Col>
       </Row>
     </Tab.Container>
     </div>
    );
};

export default AdminPannel;