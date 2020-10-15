import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
// import './CustomerOrderPlace.css'

const Contact = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {serviceType} = useParams();
    return (
       <section className=" my-5 py-5">
           <div className="container customer">
           
               <div  >
               
                   <form action="">
                       <div className="form-group">
                           <input type="name" defaultValue={loggedInUser.name} className="form-control" placeholder="Your name/ company's name"/>
                       </div>
                       <div className="form-group">
                           <input type="email" defaultValue={loggedInUser.email} className="form-control " placeholder="Your email address"/>
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
                           <button type="button" className="btn btn-secondary btn-brand" style={{backgroundColor:'#2D2D2D'}}> Send </button>
                       </div>
                   </form>
               </div>
           </div>
           
       </section>
    );
};

export default Contact;