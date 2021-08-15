import React from 'react'

const SignIn = () => {
    return (
    <>
    <Navbar />
        <section class="form">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6" id="image">
                        <img src="/src/images/newcmd.png" class="img-fluid" alt="" srcset="" />
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
                                    <a href="#">Forgot Password</a><br/>
                                </div>
                                <div class="col-12 text-center" id="reg">
                                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                                </div>
                                
                                <button type="submit" class="btn btn-block" id="login_btn">Login</button>
                                <a href="#">Forgot password</a><br/>
                                <h5>Already have an account? <a href="#">Sign in</a></h5><br/>
                                <p>Don't have an account? <a href="#">Sign up</a></p><br/>
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
