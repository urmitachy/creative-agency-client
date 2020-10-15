import React from 'react';
import { useForm } from 'react-hook-form';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';

const MakeAdmin = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        const addedAdmin = { ...data }
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedAdmin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <SidebarAdmin></SidebarAdmin>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form class="form-inline" onSubmit={handleSubmit(onSubmit)}>
                    <label class="sr-only" for="inlineFormInputName2">Email</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" name="email" placeholder="Admin Email Address" ref={register} />
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;