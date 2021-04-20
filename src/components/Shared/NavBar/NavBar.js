import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="container text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-gradient">
        <div className="container-fluid">
          <Link style={{ color: 'white', fontWeight: '700' }} className="navbar-brand fs-2" to="#">Memento</Link>
          <Button style={{ color: 'white'}} className="navbar-toggler" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-3 active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/dashboard">Dashboard</Link>
              </li>
              {!loggedInUser.email && <li className="nav-item">
                <Button style={{ color: "white" }} as={Link} className="nav-link ms-3 btn btn-success" to="/login">Login</Button>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light container mb-3 mt-2">
    //   <div className="container-fluid">
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    // <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //   <li className="nav-item">
    //     <Link className="nav-link ms-3 active" aria-current="page" to="/">Home</Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link className="nav-link ms-3" to="/dashboard">Dashboard</Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link className="nav-link ms-3" to="/orders">Orders</Link>
    //   </li>
    //   {!loggedInUser.email && <li className="nav-item">
    //     <Button style={{ color: "white" }} as={Link} className="nav-link ms-3 btn btn-success" to="/login">Login</Button>
    //   </li>}
    // </ul>
    //     </div>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //   </div>
    // </nav>
  );
};

export default Navbar;