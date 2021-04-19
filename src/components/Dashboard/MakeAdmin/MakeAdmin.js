import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.roll = "admin";
        console.log(data);
        fetch("http://localhost:5055/makeAdmin", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log('server side response', res)

            })
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5">
                <h3>Email</h3>
                <form className=" w-75"onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="form-control" defaultValue="maruf@gmail.com" {...register("email", { required: true })} />
                    <br/>
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;