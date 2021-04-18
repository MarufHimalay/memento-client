import React, { useContext, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/NavBar/NavBar';
import OrderHeader from '../OrderHeader/OrderHeader';
import BookOrder from '../BookOrder/BookOrder';
import OrderForm from '../OrderForm/OrderForm';
import { Link, useParams } from 'react-router-dom';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import OrderOfUser from '../OrderOfUser/OrderOfUser';
import { UserContext } from '../../../App';
const Order = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    console.log(loggedInUser);
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    const { service } = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <OrderForm></OrderForm>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <OrderOfUser></OrderOfUser>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Order;