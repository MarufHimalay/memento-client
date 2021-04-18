import React, { useState } from 'react';
import OrderForm from '../OrderForm/OrderForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button className="btn btn-brand text-uppercase">Book Order</button>
                    <OrderForm  OrderOn={booking.subject} date={date}></OrderForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;