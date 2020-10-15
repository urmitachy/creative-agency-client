import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import Sidebar from '../Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",  
    height : "95vh",
    width : "auto"   
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
                <div style={containerStyle} className="col-md-10 col-sm-6 col-12 d-flex justify-content-left">
                    <OrderDetails></OrderDetails>
                </div>               
            </div>
        </section>
    );
};

export default Dashboard;