import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const OrderOfUser = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://shrouded-beach-88196.herokuapp.com/orders/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);

    return (
        <div>
           
               
             {
               
                    <table className="table table-borderless">
                          <thead>
                 <tr>
                     <th className="text-secondary text-left" scope="col">Sr No</th>
                     <th className="text-secondary" scope="col">Service</th>
                     <th className="text-secondary" scope="col">Status</th>
                 </tr>
             </thead>
                       
                        <tbody>
                            {
                                orders.map((order, index) =>

                                    <tr>
                                        <td>{index}</td>
                                        <td>{order.service}</td>
                                        <td>{order.status}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default OrderOfUser;