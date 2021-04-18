import React, { useContext, useEffect, useState } from 'react';
import OrdersByDate from '../OrdersByDate/OrdersByDate';
import Sidebar from '../Sidebar/Sidebar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [orders, setOrders] = useState([]);

    const handleDateChange = date => {
        setOrders(date);
    }

    useEffect(() => {
        fetch('https://salty-plateau-71286.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    {/* <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    /> */}
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <OrdersByDate orders={orders}></OrdersByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;