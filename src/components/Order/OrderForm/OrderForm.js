import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';


const OrderForm = () => {
  const { service } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://shrouded-beach-88196.herokuapp.com/addOrders`;
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
    return (
        <div>
            <h1>this is order form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="maruf" {...register("name", { required: true })} />
      <input defaultValue="maruf@gmail.com" {...register("email", { required: true })} />
      <input defaultValue={service} {...register("service", { required: true })} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default OrderForm;