import React from 'react'
import {Link} from 'react-router-dom'
import newcmd from '../loginAndRegisterationPage/newcmd.png'

const SignIn = () => {
    return (
    <>
        <section class="form" style={{marginTop: '6rem'}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6" id="image">
                        <img src={ newcmd } class="img-fluid" alt="" srcset="" />
                    </div>
                    <div class="col-lg-6">
                        <form action="">
                            <div class="form-row">
                                <div class="col-12 mb-3">
                                    <h2>LOGIN</h2>
                                </div>
                                <div class="col-12" id="user">
                                    <label for="">User Name</label>
                                    <input type="text" class="form-control" name="" placeholder="John Doe" id="" />
                                </div>
                                <div class="col-12" id="pass">
                                    <label for="">Password</label>
                                    <input type="password" class="form-control" name="" placeholder="********" id="" />
                                </div>
                                <div class="col-12 text-center" id="fgPass">
                                    <Link to="#">Forgot Password</Link><br/>
                                </div>
                                <div class="col-12 text-center" id="reg">
                                    <p>Don't have an account? <Link to="/Registeration">Sign Up</Link></p>
                                </div>
                                
                                <button type="submit" class="btn btn-block" id="login_btn">Login</button>
                        
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default SignIn
