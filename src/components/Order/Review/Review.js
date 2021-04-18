import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://shrouded-beach-88196.herokuapp.com/review`;
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
            <h1>this is review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="test" {...register('name')} />
                <br/>
                <input name="email" defaultValue="test" {...register('email')} />
                <br/>
                <input name="description" defaultValue="test" {...register('description')} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;