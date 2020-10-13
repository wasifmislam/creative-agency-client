import React from 'react';

const Carousel = () => {
    return (
        
            
            
       <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#111430'}} class='container p-4'>
           <div class="w-75 h-75">
             <div class='carousel slide' id='carouselExample' data-ride='carousel'>
                 <div class="carousel-inner">
                     <ol className="carousel-indicators">
                         <li data-target='#carouselExample' data-slide-to="0" class="active"></li>
                         <li data-target='#carouselExample' data-slide-to="1"></li>
                         <li data-target='#carouselExample' data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-item active">
                         <img src="https://i.ibb.co/0QnqgHy/carousel-1.png" alt="First slide" class='d-block w-50 h-50'/>
                     </div>
                     <div class="carousel-item">
                         <img src="https://i.ibb.co/6ychnsY/carousel-2.png" alt="Second slide" class='d-block w-50 h-50'/>
                     </div>
                     <div class="carousel-item">
                         <img src="https://i.ibb.co/F8ZnQbM/carousel-3.png" alt="Third slide" class='d-block w-50 h-50'/>
                     </div>
                 </div>
                 <a href="#carouselExample" class="carousel-control-prev" data-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="sr-only">Previous</span>
                 </a>
                 <a href="#carouselExample" class="carousel-control-next" data-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="sr-only">Next</span>
                 </a>
             </div>
           </div>

       </div>
       
       
      


    );
};

export default Carousel;