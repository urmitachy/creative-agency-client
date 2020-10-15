import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Service from './components/Dashboard/Service/Service';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderDetails from './components/Dashboard/OrderDetails/OrderDetails';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ServiceList from './components/Admin/ServiceList/ServiceList';
import AddService from './components/Admin/ServiceList/AddService';
import Review from './components/Dashboard/Review/Review';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/order/:title">
            <Dashboard/>
          </PrivateRoute>          
          <PrivateRoute path="/service">
            <Service></Service>
          </PrivateRoute>                    
          <PrivateRoute path="/addReview">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>  
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>        
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
