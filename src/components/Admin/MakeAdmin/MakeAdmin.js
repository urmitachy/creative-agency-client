import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "auto"
}
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { handleSubmit, register } = useForm();
    let history = useHistory(); 
    
    const onSubmit = data => {
        const addedAdmin = { ...data }
        fetch('https://stormy-anchorage-31653.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedAdmin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('New Admin added successfully');;
                }
            })
    }
    return (
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0}}>
                    <div class="d-flex bd-highlight mb-3">
                        <div class="mr-auto p-2 bd-highlight">Make Admin</div>
                        <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt="" /></div>
                        <div class="p-2 bd-highlight">User: {loggedInUser.name}</div>
                    </div>
                    <form style={containerStyle} className="p-5 form-inline" onSubmit={handleSubmit(onSubmit)}>
                        <label class="sr-only" for="inlineFormInputName2">Email</label>
                        <input type="text" class="form-control mb-2 mr-sm-2" name="email" placeholder="Admin Email Address" ref={register} />
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>        
    );
};

export default MakeAdmin;