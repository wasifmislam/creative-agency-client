import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { ServiceContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



// const serviceData = [
//     {
//         name: 'Web & Mobile design',
//         img: 'https://i.ibb.co/02Xwhxv/service1.png',
//         text: 'We craft stunning and amazing web UI, using a well drafted UX to fit yout product.',
//         id: '12',
//         serviceType: 'Web & Mobile design'
//     },
//     {
//         name: 'Grapich Design',
//         img: 'https://i.ibb.co/r43W827/service2.png',
//         text: 'Amazing flyers, social media posts and brand represntations that would make your brand stand out.',
//         id: '22',
//         serviceType: 'Grapich Design'
//     },
//     {
//         name: 'Web Development',
//         img: 'https://i.ibb.co/wRTFQBd/service3.png',
//         text: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         id: '32',
//         serviceType: 'Web Development'
//     }
// ]



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