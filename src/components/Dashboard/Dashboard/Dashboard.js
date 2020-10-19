import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import CustomerOrderPlace from '../CustomerOrderPlace/CustomerOrderPlace'
// import Reviews from './Reviews/Reviews';



const containerStyle = {
    backgroundColor: "#F4F7FC",
    height:"100%"
}

const Dashboard = () => {
 

    
    return (
        <section>
            <Navbar></Navbar>
            <div style={containerStyle} className="container-fluid row">
                
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6" >
                <h3 className="pt-5 pl-3">Order</h3>
                  <CustomerOrderPlace></CustomerOrderPlace>
                 
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;