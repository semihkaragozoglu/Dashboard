import * as React from 'react';
import {
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons' 
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { NavLink as RRNavLink } from 'react-router-dom';

export default class Sidebar extends React.Component { 

    render() {
        const { toggle } = this.props;
        return ( 
        <nav id="sidebar">
            <div className="brand">
                <Link className="logo" to="/">
                    <span>DASHBOARD</span>
                </Link> 
                <button onClick={toggle} className="btn-sidebar-toggle">
                <FontAwesomeIcon icon={faArrowRight} />    
                </button>
            </div>
            <div className="sidebar-profile">  
                <div className="img-profile">
                    <img src="/img/profile.jpg" alt="my profile" className="img-fluid"></img>
                </div>
                <div className="detail">  
                    <p>Semih Karagözoğlu</p>
                    <p>Frontend Developer</p>
                    <a href="https://github.com/semihkaragozoglu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />     
                    </a>
                    <a href="https://www.linkedin.com/in/semih-karag%C3%B6zo%C4%9Flu-10a84491/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />     
                    </a>
                </div>
              
            </div> 
            <Nav className="ml-auto" navbar>
                <NavItem className="navItem">
                    <NavLink tag={RRNavLink} className="nav-link" to="/" activeClassName="active" exact path="/">
                    <FontAwesomeIcon icon={faHome} /> 
                    <span>Home</span>
                    </NavLink>
                </NavItem>
                <NavItem className="navItem">
                    <NavLink tag={RRNavLink} className="nav-link" to="/About" activeClassName="active">
                    <FontAwesomeIcon icon={faCoffee}/>
                    <span>About</span>
                    </NavLink>
                </NavItem>
            </Nav> 
        </nav> 
           
        );
    }

    
}
