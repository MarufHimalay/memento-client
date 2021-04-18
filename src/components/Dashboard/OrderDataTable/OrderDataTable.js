import React, { useEffect } from 'react';

const orderDataTable = ({ orders }) => {

    const handleChange = (e) => {
        console.log( e.target.value);
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
                                <select onChange={handleChange} id="cars" name="carlist" form="carform">
                                    <option value="On going">On going</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Done">Done</option>
                                </select></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default orderDataTable;