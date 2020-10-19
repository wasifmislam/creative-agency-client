import React, { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { UserContext } from '../../../App';

const Navbar = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light mb-3 ">
                <img class="nav-link ml-5" style={{width:'150px', height:'47px'}} src={logo} alt=""/>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                       
                        <li class="nav-item active">
                          <Link to='/home'>  <a class="nav-link mr-5 ">Home <span class="sr-only">(current)</span></a> </Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/OurPortfolio'>   <a class="nav-link mr-5 " href="#">Our Portfolio</a> </Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/OurTeam'>   <a class="nav-link mr-5 " href="#">Our team</a> </Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/ContacUs'>   <a class="nav-link mr-5  " href="#">Contact Us</a> </Link>
                        </li>
                        <li>
                         <small><strong>{loggedInUser.name}</strong></small>
                        </li>
                        <li class="nav-item">
                        <Link to='/login'>   <button  class="btn btn-secondary btn-brand" style={{backgroundColor:'#2D2D2D'}}>Login</button> </Link> 
                        </li>



                    </ul>

                </div>
            </nav>
    );
};

export default Navbar;