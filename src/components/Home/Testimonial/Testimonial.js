import React from 'react';

const Testimonial = (props) => {
    const {quote,name,position ,img} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6>{name}</h6>
                    <p className="m-0">{position}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            
       </div>
    );
};

export default Testimonial;