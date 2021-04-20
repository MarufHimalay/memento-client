import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/NavBar/NavBar';

const OrderOfUser = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-beach-88196.herokuapp.com/orders/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser])
    console.log(orders);

    return (
        <div className="container">
            <h2>Your Orders: </h2>
            <p>Your Name: {loggedInUser.name}</p>
            <p>Your Email: {loggedInUser.email}</p>
            <table style={{border:"2px solid gray "}} className="table">
                <thead>
                    <tr>
                        <th className="text-secondary text-center" scope="col">Serial No</th>
                        <th className="text-secondary text-center" scope="col">Service</th>
                        <th className="text-secondary text-center" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr className="text-center">
                                <td>{index}</td>
                                <td>{order.service}</td>
                                <td>{order.status}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderOfUser;