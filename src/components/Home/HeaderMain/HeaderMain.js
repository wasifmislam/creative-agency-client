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

        </main>

    );
};

export default HeaderMain;