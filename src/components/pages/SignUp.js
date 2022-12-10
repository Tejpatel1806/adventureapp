import React from 'react';
import '../../App.css';
import './SignUp.css';
export default function SignUp() {
    return (
        <>
            <div className='signup2'>
                <div className='signupcontainer'>
                    <div className='signup1'>
                        <h1 className='hello2'>TRVL</h1>
                        <p className="hello">Welcome to TRVL</p>
                        <img className='signup3' src='./images/signup.jpg.jpg'></img>
                    </div>
                    <div className='signup4'>
                        <h1>SIGN UP</h1>
                        <h3 className='hello1'>Create Your New Account</h3>
                        <form className='hello5'>
                            <div className='signup5'>
                                <label className='hello4'>Name</label>
                                <input className='hello6' type='text' placeholder='Enter Your Name' ></input>
                            </div>
                            <div className='signup5'>
                                <label className='hello4'>Email</label>
                                <input className='hello6' type='email' placeholder='Enter Your Email' ></input>
                            </div>
                            <div className='signup5'>
                                <label className='hello4'>Password</label>
                                <input className='hello6' type='password' placeholder='Enter Password'></input>
                            </div>
                            <div className='signup5-btn'>
    
                                <button className='hello8'  type='submit' >Create Your Account Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}