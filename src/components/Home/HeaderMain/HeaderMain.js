import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center main-container">


            <div className="col-md-4 offset-md-1">
                <h1>Lets Grow Your <br /> Brand To The <br />Next Level</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis odio assumenda fugit voluptate dignissimos excepturi, ab dolorum tempore.</p>
                <button className="btn btn-primary"> Hire Us </button>
            </div>
            <div className="col-md-6">
                <img src="https://i.ibb.co/ngmG0Nz/Frame.png" alt="" className="img-fluid" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
        <div >
            <img class="ml-5 mr-5"  style={{ width: '130px', height: '47px' }} src="https://i.ibb.co/8Nb64Kr/airbnb.png" alt="" />
            <img class=" ml-5 mr-5"   style={{ width: '130px', height: '47px' }} src="https://i.ibb.co/jgCwwYT/google.png" alt="" />
            <img class=" ml-5 mr-5"   style={{ width: '130px', height: '47px' }} src="https://i.ibb.co/HqwQwT1/netflix.png" alt="" />
            <img class=" ml-5 mr-5"   style={{ width: '130px', height: '47px' }} src="https://i.ibb.co/pRZGvmc/slack.png" alt="" />
            <img class=" ml-5 mr-5"   style={{ width: '130px', height: '47px' }} src="https://i.ibb.co/ySXpfrT/uber.png" alt="" />
        </div>

        </main>

    );
};

export default HeaderMain;

//<img style={{width:'150px', height:'47px' }} src="https://i.ibb.co/8Nb64Kr/airbnb.png" alt=""/>
//<img style={{width:'150px', height:'47px'}} src="https://i.ibb.co/jgCwwYT/google.png" alt=""/>
//<img style={{width:'150px', height:'47px'}} src="https://i.ibb.co/HqwQwT1/netflix.png" alt=""/>
//<img style={{width:'150px', height:'47px'}} src="https://i.ibb.co/pRZGvmc/slack.png" alt=""/>
//<img style={{width:'150px', height:'47px'}} src="https://i.ibb.co/ySXpfrT/uber.png" alt=""/>