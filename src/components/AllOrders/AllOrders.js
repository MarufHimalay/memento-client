import React, { useEffect, useState } from 'react';
import OrderDataTable from '../Dashboard/OrderDataTable/OrderDataTable';


const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-beach-88196.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <OrderDataTable orders={orders}></OrderDataTable>
            </div>
        </div>
    );
};

export default AllOrders;