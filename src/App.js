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
import AllCustomers from './components/AllCustomers/AllCustomers/AllCustomers';
import Review from './components/Order/Review/Review';
import AddProducts from './components/Dashboard/Dashboard/AddProducts/AddProducts';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderOfUser from './components/Order/OrderOfUser/OrderOfUser';
export const loggedInUserContext = createContext();
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({});
  return (
    <loggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/order/:service">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/allCustomers">
            <AllCustomers></AllCustomers>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/orderFrom">
           <OrderOfUser></OrderOfUser>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </loggedInUserContext.Provider>
  );
}

export default App;