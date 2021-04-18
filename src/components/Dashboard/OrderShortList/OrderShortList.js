import React from 'react';

const orderShortList = ({orders}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.phone}</td>
                        <td>{order.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default orderShortList;