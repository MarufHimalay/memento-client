import React from 'react';
// import chair from '../../../images/chair.png';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const OrderHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Order</h1>
                {/* <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                /> */}
            </div>
            <div className="col-md-6">
                {/* <img src={chair} alt="" className="img-fluid" /> */}
            </div>
        </main>
    );
};

export default OrderHeader;