import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

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

        fetch('http://localhost:5000/addReviews', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push("/service");
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    console.log(watch("example"));
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-6 col-12 pt-5">
                <div class="d-flex bd-highlight mb-3">
                    <div class="mr-auto p-2 bd-highlight">Reviews:</div>
                    <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt=""/></div>
                    <div class="p-2 bd-highlight">{loggedInUser.name}</div>
                </div>
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

        </div>
    );
};

export default Review;