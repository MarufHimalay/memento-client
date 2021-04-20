import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Order from './components/Order/Order/Order';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Order/Review/Review';
import AddProducts from './components/Dashboard/Dashboard/AddProducts/AddProducts';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderOfUser from './components/Order/OrderOfUser/OrderOfUser';
import AllOrders from './components/AllOrders/AllOrders';
import Navbar from './components/Shared/NavBar/NavBar';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <PrivateRoute path="/order/:service">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allCustomers">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/orders">
           <OrderOfUser></OrderOfUser>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/addProducts">
            <AddProducts></AddProducts>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;