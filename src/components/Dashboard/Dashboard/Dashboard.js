import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import Sidebar from '../Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "auto"
}
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-6 col-12 pt-5">
                    <div class="d-flex bd-highlight mb-3">
                        <div class="mr-auto p-2 bd-highlight">Orders</div>
                        <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt="" /></div>
                        <div class="p-2 bd-highlight">{loggedInUser.name}</div>
                    </div>
                    <div style={containerStyle}>
                         <OrderDetails ></OrderDetails>
                    </div>                    
                </div>
            </div>
        </section>
    );
};

export default Dashboard;