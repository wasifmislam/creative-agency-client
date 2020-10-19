import React, { useState } from 'react';



const serviceData = [
    {
        name: 'Web & Mobile design',
        img: 'https://i.ibb.co/02Xwhxv/service1.png',
        text: 'We craft stunning and amazing web UI, using a well drafted UX to fit yout product.',
        id: '12',
        serviceType: 'Web & Mobile design'
    },
    {
        name: 'Grapich Design',
        img: 'https://i.ibb.co/r43W827/service2.png',
        text: 'Amazing flyers, social media posts and brand represntations that would make your brand stand out.',
        id: '22',
        serviceType: 'Grapich Design'
    },
    {
        name: 'Web Development',
        img: 'https://i.ibb.co/wRTFQBd/service3.png',
        text: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        id: '32',
        serviceType: 'Web Development'
    }
]

const OurPortfolio = () => {
   
    const handleAddService = () => {
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
    }
    return (
        <div>
            <button onClick={handleAddService}>Add Service</button>
        </div>
    );
};

export default OurPortfolio;