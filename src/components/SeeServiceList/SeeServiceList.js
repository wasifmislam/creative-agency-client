import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const SeeServiceList = (props) => {
    const{name,pic,text} = props.events
    return (
        <section>
            
        <div  className='col-md-4 text-center card-body mb-5'>
            <div className="card-footer d-flex  align-items-center">
            
            
            <img style={{height:'50px'}} src={pic} alt=""/>
            <h5 className='mt-3 mb-3'>{name}</h5>
            <p className='text-secondary'>{text}</p>
            
            
            </div>
        </div>
        </section>
    );
};

export default SeeServiceList;