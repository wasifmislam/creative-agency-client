import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import SeeServiceList from '../../SeeServiceList/SeeServiceList';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    height:"100%"
}

const ServiceList = ( ) => {
    const [service, setService] = useState([]);
    console.log(service)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //const [serviceData, setServiceData] = useContext(ServiceContext);
    //const [serviceRegistration, setServiceRegistration] = useState([])
    //const {serviceType} = useParams()
    // const{name,img, serviceType, text} = useParams();
   
    useEffect(()=>{
        fetch('http://localhost:5000/enrolledService?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    
    return (
        <div>
            <Navbar></Navbar>
            <div style={containerStyle} className="container-fluid row">
                
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10" >
                
                {
                         service.map(events => <SeeServiceList events={events}></SeeServiceList> )
                     }
                 
                </div>
                
            </div>

            
           
                
    
          {/* <h3>{name}</h3> */}
        </div>
    );
};

export default ServiceList;

//+loggedInUser.email