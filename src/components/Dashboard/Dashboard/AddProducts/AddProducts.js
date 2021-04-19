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
            image: imageURL,
            description: data.description,
            status: "pending"
          };
        console.log(data);
        const url = `http://localhost:5055/addProducts`;
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
            <h1>this is order form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="maruf" {...register("name", { required: true })} />
      <input defaultValue="description description" {...register("description", { required: true })} />
      <input defaultValue="$120" {...register("price", { required: true })} />
      <input style={{textColor:"lightGreen"}} name="images" type="file" onChange={handleImageUpload} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProducts;