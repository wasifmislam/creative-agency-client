import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Navbar from '../../../Home/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
const containerStyle = {
         backgroundColor: "#F4F7FC",
         height:"100%"
     }

const Reviews = () => {

    const {register, handleSubmit, watch, errors} = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    const onSubmit = data => {
        const newSubmit = {  person:loggedInUser.name, email: loggedInUser.email ,pic:loggedInUser.photo}
        
        fetch('http://localhost:5000/addReview',{
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
        <section>
             <Navbar></Navbar>
             <div style={containerStyle} className="container-fluid row">
                
                 <div className="col-md-2">
                     <Sidebar></Sidebar>
                 </div>
                 <div className="col-md-6" >
                 <h3 className="pt-5 pl-3">Order</h3>
                  
                 <form action="" onSubmit={handleSubmit(onSubmit)}>
                       <div className="form-group">
                           <input type="name" defaultValue={loggedInUser.name} className="form-control" placeholder="Your name"/>
                       </div>
                       <div className="form-group">
                           <input type="name"  className="form-control " placeholder="company's name, Designation"/>
                       </div>
                       
                       <div className="form-group">
                           <textarea name="" className="form-control text-muted" id="" cols="10" rows="6" placeholder="Description"></textarea>
                       </div>
                       
                       <div className="form-group ">
                           <button type="submit" className="btn btn-secondary btn-brand" style={{backgroundColor:'#2D2D2D'}}> Send </button>
                       </div>
                   </form>
                 </div>
                
             </div>
         </section>
    );
};

export default Reviews;