import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "auto"
}
const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', data.picture[0]);
        formData.append('title', data.title);
        formData.append('description', data.description);

        fetch('https://stormy-anchorage-31653.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('New Service added successfully');
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    console.log(watch("example"));
    return (
        // <div>
        //     <SidebarAdmin />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div class="d-flex bd-highlight mb-3">
                    <div class="mr-auto p-2 bd-highlight">Add Service:</div>
                    <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt="" /></div>
                    <div class="p-2 bd-highlight">User: {loggedInUser.name}</div>
                </div>
                <form style={containerStyle} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Service Title</label>
                            <input name="title" type="text" placeholder="Enter title" className="form-control" ref={register} />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="col-6">
                            <label>Icon</label>
                            <input type="file" name="picture" placeholder="Uploaded image" ref={register({ required: true })} />
                            {errors.description && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input name="description" type="text" className="form-control" placeholder="Enter Description" ref={register({ required: true })} />
                        {errors.description && <span>This field is required</span>}
                    </div>

                    <div className="form-group text-right">
                        <button style={{ width: "100px" }} type="submit" class="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        // </div>

    );
};

export default AddService;