import React from 'react';
import newcmd from '../Images/newcmd.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { FaSignInAlt } from 'react-icons/fa';

class Navbar extends React.Component {
    render() {
        return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <img src={newcmd} alt="TheCmdLogo"  style={{ width: '10rem'}}/>
                <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div id="menuBar">
                        <FontAwesomeIcon icon={faBars}/>
                        <h5 id="navBarToggler">Menu</h5>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link active" to="/" id="hover">Home </Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/SignIn"><FaSignInAlt className="mr-1"/>Sign In</Link>
                    </div>
                </div>
            </div> 
        </nav>
    </>
        )
    }
}

export default Navbar
