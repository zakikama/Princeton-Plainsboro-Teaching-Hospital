import React from 'react'
import {Container,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import logo from '../assets/logo.png';
const Header = () => {
    return (
    <div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="/landing" class="navbar-brand">
        <img
        alt=""
        src={logo}
        width="90"
        height="50"
        className="d-inline-block align-top"
      />
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
               
            </div>
            
        </div>
    </nav>
</div>
       
    )
}

export default Header
