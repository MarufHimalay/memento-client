import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.roll = "admin";
        console.log(data);
        fetch("http://shrouded-beach-88196.herokuapp.com/makeAdmin", {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => {
            console.log('server side response', res)
    
          })
    }
    return (
        <div>
            <h3>Email</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="maruf@gmail.com" {...register("email", { required: true })} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default MakeAdmin;