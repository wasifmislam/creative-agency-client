import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Testimonial from '../Testimonial/Testimonial';
// import './Testimonials.css';


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Nash Patrik',
        position : 'CEO, Manpal',
        img : 'https://i.ibb.co/HTNXLxP/customer-1.png'
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Miriam Barron',
        position : 'CEO, Erixson',
        img : 'https://i.ibb.co/QFYyKhs/customer-2.png'
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Bria Malani',
        position : 'CEO, Nesla',
        img : 'https://i.ibb.co/VS16r0g/customer-3.png'
    }
]


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/enrolledReviews?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
              
                   <h2>Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;