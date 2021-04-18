import React from 'react';
import OrderDataTable from '../OrderDataTable/OrderDataTable';
import OrderShortList from '../OrderShortList/OrderShortList';

const OrdersByDate = ({ orders }) => {
    console.log(orders);
    return (
        <div>
            <h2 className="text-brand text-center">orders</h2>
            {
                orders.length ?
                 <OrderShortList orders={orders} ></OrderShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No orders for this Date</h4>
                </div>
            }
        </div>
    );
};

export default OrdersByDate;