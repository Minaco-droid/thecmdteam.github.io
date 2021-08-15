import React from 'react'
import newcmd from '../Images/newcmd.png'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
    <>
        <nav className="navbar navbar-expand-lg" style={{ height: '4rem'}}>
            <div className="container">
                <img src={newcmd} alt=""  style={{ width: '10rem'}}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link className="nav-link active" to="/">Home </Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/SignIn">Sign In</Link>
                    </div>
                </div>
            </div> 
        </nav>
    </>
        )
    }
}

export default Navbar
