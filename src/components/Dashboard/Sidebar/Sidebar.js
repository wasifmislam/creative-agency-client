import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faGripHorizontal, faShoppingBag, faComment } from '@fortawesome/free-solid-svg-icons';
// import {  icofontomment } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-black">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-black" >
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-black" >
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-black">
                        <FontAwesomeIcon icon={faComment } /> <span>Review</span>
                    </Link>
                </li>
                
            </ul>
            
        </div>
    );
};

export default Sidebar;