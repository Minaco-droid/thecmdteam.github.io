import React from 'react'
import {Link} from 'react-router-dom'
import newcmd from '../loginAndRegisterationPage/newcmd.png'

const Registration = () => {
    return (
        <div>
            <section class="form" style={{marginTop: '6rem'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6" id="image">
                            <img src={newcmd} alt="theCmdLogo" class="img-fluid"/>
                        </div>
                        <div class="col-lg-6">
                            <form action="">
                                <div class="form-row">
                                    <div class="col-12 mb-3">
                                        <h2>Register</h2>
                                    </div>
                                    <div class="col-12" id="userReg">
                                        <label for="">User Name</label>
                                        <input type="text" class="form-control" name="" placeholder="John Doe" id=""/>
                                    </div>
                                    <div class="col-12" id="userReg">
                                        <label for="">User Name</label>
                                        <input type="text" class="form-control" name="" placeholder="John Doe" id=""/>
                                    </div>
                                    <div class="col-12" id="userReg">
                                        <label for="">User Name</label>
                                        <input type="text" class="form-control" name="" placeholder="John Doe" id=""/>
                                    </div>
                                    <div class="col-12" id="userReg">
                                        <label for="">User Name</label>
                                        <input type="text" class="form-control" name="" placeholder="John Doe" id=""/>
                                    </div>
                                    <div class="col-12" id="emailReg">
                                        <label for="">Email</label>
                                        <input type="email" class="form-control" name="" placeholder="johndoe@gmail.com" id=""/>
                                    </div>
                                    <div class="col-12" id="passReg">
                                        <label for="">Password</label>
                                        <input type="password" class="form-control" name="" placeholder="********" id=""/>
                                    </div>
                                    <div class="col-12" id="confirmPassReg">
                                        <label for="">Confirm Password</label>
                                        <input type="text" class="form-control" name="" placeholder="********" id=""/>
                                    </div>
                                    <div class="col-12 text-center" id="signInReg">
                                        <p>Alraedy have an account? <Link to="/SignIn"><span>Sign In</span></Link></p>
                                    </div>
                                    <button type="submit" class="btn btn-block" id="login_btnReg">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration
