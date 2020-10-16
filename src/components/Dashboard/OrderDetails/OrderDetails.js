import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const OrderDetails = () => {
    const { register,handleSubmit, errors} = useForm();    
    const { title } = useParams();
    const [services, setServices] = useState([]);
    const selectedService = services.find(service => service.title === title);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const selectedOrder ={...selectedService} 
    const image = selectedOrder.authorImg; 
    console.log(image)
    const authorImg = {...image}
    
    useEffect(() => {
        fetch('https://stormy-anchorage-31653.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);    

    const onSubmit = data => {
        const formData = new FormData();        
        formData.append('file', data.file[0]);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('projectDetails', data.projectDetails);
        formData.append('orderName', data.orderName);
        formData.append('authorImg', authorImg.img);
        formData.append('price', data.price);
        formData.append('description', selectedOrder.description);

        fetch('https://stormy-anchorage-31653.herokuapp.com/addOrders', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('Order submitted successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }    
    return (
        <div className="col-12 col-md-8 m-4">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">                                          
                        <input name="email" type="email" defaultValue={loggedInUser.email} placeholder="Your Email Address" className="form-control" ref={register({ required: true })} />
                        {errors.title && <span>This field is required</span>}                   
                </div> 
                <div className="form-group">                                          
                        <input name="name" type="text" defaultValue={loggedInUser.name} placeholder="Your Name/Company's Name" className="form-control" ref={register({ required: true })} />
                        {errors.title && <span>This field is required</span>}                   
                </div> 
                <div className="form-group">                                          
                        <input name="orderName" type="text" defaultValue={title} placeholder="Enter Your Order Name" className="form-control" ref={register({ required: true })} />
                        {errors.title && <span>This field is required</span>}                   
                </div>                    

                <div className="form-group">                    
                    <input name="projectDetails" type="text" className="form-control" placeholder="Project Details" ref={register({ required: true })} />
                    {errors.description && <span>This field is required</span>}
                </div>
                <div className="form-group row">
                    <div className="col-6">
                        <input className="form-control" name="price" placeholder="Price" type="number" ref={register({ required: true })} />
                    </div>
                    <div className="col-6">
                        <input className="form-control" name="file" placeholder="Upload project file" type="file" ref={register}/>
                    </div>
                </div>                
                <div className="form-group text-right">
                    <button style = {{width : "100px"}} type="submit" class="btn btn-dark">Submit</button>
                </div>
            </form>    
        </div>
    );
};

export default OrderDetails;