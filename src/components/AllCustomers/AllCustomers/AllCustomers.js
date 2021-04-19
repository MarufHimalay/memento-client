import React, { useEffect, useState } from 'react';
import OrderDataTable from '../../Dashboard/OrderDataTable/OrderDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <OrderDataTable orders={orders} />
            </div>
        </div>
    );
};

export default AllPatients;