import React, { useContext, useEffect, useState } from 'react';
import OrdersByDate from '../OrdersByDate/OrdersByDate';
import Sidebar from '../Sidebar/Sidebar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                </div>
            </div>
        </section>
    );
};

export default Dashboard;