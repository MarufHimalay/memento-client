import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
      
      // data.image = loggedInUser.image
        console.log(loggedInUser);
        const url = `http://localhost:5055/review`;
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
        <div className="container m-3 w-75">
            <h2>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control" name="name" placeholder="Your Name" {...register('name')} />
                <br/>
                <input className="form-control" name="designation" placeholder="Company's name, Designation" {...register('designation')} />
                <br/>
                <input style={{height:'100px'}} className="form-control" placeholder="description" {...register('description')} />
                <br/>
                <div  class="d-flex justify-content-end">
                  <input className="btn btn-success d-flex justify-content-" type="submit" />
                </div>
                
            </form>
        </div>
    );
};

export default Review;