import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { ServiceContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';







const Services = () => {
    const [serviceData, setServiceData] = useContext(ServiceContext);
    const [servicesData, setServicseData] = useState([]);
    console.log(serviceData);

useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data =>setServicseData(data))
}, [])

 const handleData = (data) => {
     setServiceData ({...data})
    
 }
    return (
        <section className='services-container mt-5 pt-5'>
            <div className='text-center'>
                
               
                <h2>Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
                
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-5 pt-5'>
                    {
                        servicesData.map(service => <ServiceDetail handleData={handleData} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;