import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "auto"
}
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        // formData.append('file', data.picture[0]);
        formData.append('author', loggedInUser.name);
        formData.append('designation', data.designation);
        formData.append('description', data.description);
        formData.append('authorImg', loggedInUser.photo);

        fetch('https://stormy-anchorage-31653.herokuapp.com/addReviews', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Review submitted successfully');
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    console.log(watch("example"));
    return (
        <div className="col-md-10 col-sm-6 col-12 pt-5">            
            <form style={containerStyle} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="author" type="text" placeholder="Your Name" className="form-control" ref={register} />
                    {errors.title && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <input name="designation" type="text" placeholder="Your Company's Designation" className="form-control" ref={register} />
                    {errors.title && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input name="description" type="text" className="form-control" placeholder="Your comments" ref={register({ required: true })} />
                    {errors.description && <span>This field is required</span>}
                </div>

                <div className="form-group text-right">
                    <button style={{ width: "100px" }} type="submit" class="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Review;