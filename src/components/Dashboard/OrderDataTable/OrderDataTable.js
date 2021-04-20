import React, { useEffect, useState } from 'react';

const OrderDataTable = ({ orders }) => {
    const [update, setUpdate] = useState("")
    const[updateOrder, setUpdateOrder] = useState({})
    const handleChange = (order) => {
        setUpdateOrder(order)
    }
    const handleUpdate = (event) => {
        const valueUp = event.target.value;
        // console.log(event.target.value);
        const newOrder = {...updateOrder}
        newOrder.status = valueUp;
        console.log(newOrder)
        fetch(`https://shrouded-beach-88196.herokuapp.com/update/${newOrder._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
            })
    
    }
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service</th>
                    
                    <th className="text-secondary" scope="col">Pay with</th>
                    <th className="text-secondary" scope="col">Status</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>

                        <tr>
                            <td>{index}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.service}</td>
                            <td>Credit Card</td>
                            <td>
                                <select onBlur={handleUpdate} onChange={()=>handleChange(order)}>
                                    <option  value="On going">On going</option>
                                    <option  value="Pending">Pending</option>
                                    <option  value="Done">Done</option>
                                </select></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderDataTable;