import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({service}) => {
    return (
        
        <div className='col-md-4 text-center card-body mb-5'>
            <div className="card-footer d-flex  align-items-center">
            <Link>
            
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className='mt-3 mb-3'>{service.name}</h5>
            <p className='text-secondary'>{service.text}</p>
            
            </Link>
            </div>
        </div>
    
    );
};

export default ServiceDetail;

