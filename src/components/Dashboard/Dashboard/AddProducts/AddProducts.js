import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '1df7b684c57084b6e5953557052f265d');
        imageData.append('image', event.target.files[0]);
    
        axios.post('https://api.imgbb.com/1/upload',
          imageData)
          .then(function (response) {
            setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    
      }
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            image: imageURL,
            description: data.description,
            status: "pending"
          };
        console.log(data);
        const url = `https://shrouded-beach-88196.herokuapp.com/addProducts`;
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(productData)
        })
          .then(res => {
            console.log('server side response', res)
    
          })
      };
    return (
        <div>
            <h1>Add Services Here</h1>
            <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="form-control mt-2" placeholder="Product Title" {...register("name", { required: true })} />
      <input className="form-control mt-2" placeholder="Product Description" {...register("description", { required: true })} />
      <input className="form-control mt-2" placeholder="$120" {...register("price", { required: true })} />
      <input className="form-control mt-2" style={{textColor:"lightGreen"}} name="images" type="file" onChange={handleImageUpload} />
      <input className="btn btn-success mt-2" type="submit" />
    </form>
        </div>
    );
};

export default AddProducts;