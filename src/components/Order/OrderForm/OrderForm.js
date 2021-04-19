import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../Payment/ProcessPayment/ProcessPayment';


const OrderForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { service } = useParams();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5055/addOrders`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('server side response', res)

      })
      
  };
  const handlePaymentSuccess = paymentId => {
    console.log("payment done");
  };
  return (
    <div className="container m-3">
      <h2>Book your Order</h2>
      <hr />
      <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control mb-3" defaultValue={loggedInUser.name} placeholder="John, Smith, Adam..." {...register("name", { required: true })} />
        <input className="form-control mb-3" defaultValue={loggedInUser.email} placeholder="maruf@gmail.com" {...register("email", { required: true })} />
        <input className="form-control mb-3" defaultValue={service} {...register("service", { required: true })} />
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
        <input className="btn btn-primary" type="submit" />
      </form>
     

    </div>
  );
};

export default OrderForm;