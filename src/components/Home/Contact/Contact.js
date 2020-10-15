import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header col-md-4  text-white mb-5">
                    <h2 style={{color:'#2D2D2D'}}>Let us handle your <br/>
                    project, professionally</h2>
                    <small style={{color:'#2D2D2D'}}>With well written codes, we build amazing apps for all <br/>platforms, web and mobile apps im general.</small>
                    
               </div>
               <div className="col-md-8 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your email address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control text-muted" placeholder="Your name/ company's name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control text-muted" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-secondary btn-brand" style={{backgroundColor:'#2D2D2D'}}> Send </button>
                       </div>
                   </form>
               </div>
           </div>
           <div className="copyRight text-center">
                    <small> Copyright Orange labs {(new Date()).getFullYear()}</small>
                </div>
       </section>
    );
};

export default Contact;