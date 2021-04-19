import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt, faUser } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import Order from '../../Order/Order/Order';
import OrderOfUser from '../../Order/OrderOfUser/OrderOfUser';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    {(loggedInUser.role === "admin") & <div>
                        <li>
                            <Link to="/allCustomers" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allCustomers" className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Manage Services</span>
                            </Link>
                        </li>


                    </div>}
                   {(loggedInUser.role === "user") &  <div>
                        <li>
                            <Link to="/orderForm" className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Book Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/orders/${loggedInUser.email}`} className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Booking List</span>
                            </Link>
                        </li>
                    </div>}
                </ul>

                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>

            </div>
        </>
    );
};

export default Sidebar;