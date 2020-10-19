// import React, { useContext, useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useParams } from 'react-router-dom';
// import { UserContext } from '../../../App';
// // import './CustomerOrderPlace.css'

// const CustomerOrderPlace = () => {
    //const [serviceData, setServiceData] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setServiceData(data))
    // }, [])
//     const { register, handleSubmit, watch, errors } = useForm();
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext)
//     const {serviceType} = useParams();
//     const onSubmit = data => {
//         console.log('form submitted', data)
//     }
//         const newSubmit = { ...loggedInUser}

//         fetch('http://localhost:5000/addSubmit',{
//             method: 'POST',
//             headers: {'Content-Type' : 'application/json'},
//             body: JSON.stringify(newSubmit)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log('Data',data)
//         })
//         console.log('form submitted')
     
//     return (
//        <section className=" my-5 py-5">
//            <div className="container customer">
           
//                <div  >
               
//                <form className='reg-form' onSubmit = {handleSubmit(onSubmit)} >
//                        <div className="form-group">
//                            <input type="name" defaultValue={loggedInUser.name}  ref = { register({ required: true }) } className="form-control" placeholder="Your name/ company's name"/>
//                        </div>
//                        <div className="form-group">
//                            <input type="email" defaultValue={loggedInUser.email}  ref = { register({ required: true }) } className="form-control " placeholder="Your email address"/>
//                        </div>
//                        <div className="form-group">
//                            <input type="text" defaultValue={serviceType}  ref = { register({ required: true }) } className="form-control " placeholder="Your service"/>
//                        </div>
//                        <div className="form-group">
//                            <textarea name="" className="form-control text-muted"  ref = { register({ required: true }) } id="" cols="10" rows="6" placeholder="Project details"></textarea>
//                        </div>
//                        <div className="form-group">
//                            <input type="number" className="form-control text-muted"  ref = { register({ required: true }) } placeholder="Price"/>
//                        </div>
//                        <div className="form-group ">
//                           <button onSubmit=  {handleSubmit(onSubmit)}  type="submit" className="btn btn-secondary btn-brand" style={{backgroundColor:'#2D2D2D'}}> Send </button> 
//                        </div>
//                    </form>
//                </div>
//            </div>
           
//        </section>
//     );
// };

// export default CustomerOrderPlace;

// //<Link to="/serviceList" ></Link>

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../../App';
// import './CustomerOrderPlace.css'

const CustomerOrderPlace = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [serviceData, setServiceData] = useContext(ServiceContext);
    console.log(serviceData)
    console.log(loggedInUser)
    const {serviceType} = useParams();
    const onSubmit = data => {
        const newSubmit = {  name: serviceData.name, text: serviceData.text, pic: serviceData.img, person:loggedInUser.name, email: loggedInUser.email }
        
        fetch('http://localhost:5000/addSubmit',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newSubmit)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Data',data)
            console.log('form submitted', data)
        })
        //console.log('form submitted', data)
        
    }
    return (
       <section className=" my-5 py-5">
           <div className="container customer">
           
               <div  >
               
                   <form action="" onSubmit={handleSubmit(onSubmit)}>
                       <div className="form-group">
                           <input type="name" defaultValue={loggedInUser.name} ref = { register({ required: true }) } className="form-control" placeholder="Your name/ company's name"/>
                           { errors.name && <span className='error'>Your Name/Company's is required</span> }
                       </div>
                       <div className="form-group">
                           <input type="email" defaultValue={loggedInUser.email} ref = { register({ required: true }) } className="form-control " placeholder="Your email address"/>
                           { errors.email && <span className='error'>Email is required</span> }
                       </div>
                       <div className="form-group">
                           <input type="text" defaultValue={serviceType} className="form-control " placeholder="Your service"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control text-muted" id="" cols="10" rows="6" placeholder="Project details"></textarea>
                       </div>
                       <div className="form-group">
                           <input type="number" className="form-control text-muted" placeholder="Price"/>
                       </div>
                       <div className="form-group ">
                           <button   type="submit" className="btn btn-secondary btn-brand" style={{backgroundColor:'#2D2D2D'}}> Send </button>
                       </div>
                   </form>
               </div>
           </div>
           
       </section>
    );
};

export default CustomerOrderPlace;