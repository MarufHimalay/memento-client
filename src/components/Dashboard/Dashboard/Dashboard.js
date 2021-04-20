import React, { useContext, useEffect, useState } from 'react';
import OrdersByDate from '../OrdersByDate/OrdersByDate';
import Sidebar from '../Sidebar/Sidebar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import Order from '../../Order/Order/Order';
import AdminPannel from '../AdminPannel/AdminPannel';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-beach-88196.herokuapp.com/admins/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
        console.log(admin);
    }, [])

    return (
        <section>
            <div className="row container">
                {
                    admin.length? <AdminPannel/> : <Order></Order>
                }
            </div>
        </section>
    );
};

export default Dashboard;