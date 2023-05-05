import React, { useState } from 'react';
import './login.css';

import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Dashboard from '../Dashboard/Dashboard';



const Login = ( ) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = credentialResponse => {
    const details = jwt_decode(credentialResponse.credential);
    // console.log(details);
    // const profilePictureUrl = details.picture;
    // setProfilePictureUrl(profilePictureUrl);
    setIsLoggedIn(true);
    setShowLogin(false);
    // props.setProfilePictureUrl(profilePictureUrl);
    
    <Dashboard details={details} />
    console.log(details);
    navigate('/dashboard')
  };

  return (
    <>
    {/*Left Banner */}
    <div className='left-side'>
        <h1>Board.</h1>
    </div>

    {/*Right Banner */}
    <div className='right-side'>

        {/*LOGIN Page */}
        <div className='right-div'>
        <h2>Sign In</h2>
        <h5 className='t1'>Sign in to your account</h5>

        {/*Google button */}
        <div className='GoogleOAuthProvider'>
        <button className='google-button'>
            {!isLoggedIn && (
              <GoogleOAuthProvider   clientId= '915742303330-s9taht6bkuchregr7icsfv0rjpfmf1e6.apps.googleusercontent.com'>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
            )}
          </button>

        {/*Apple Button */}
        <button className='apple-button'><i class="ri-apple-fill" style={{marginRight: '12px'}} ></i>Sign in with Apple</button>
        </div>
        <div className='div-under'>
            {/*FORM Starting*/}
            <form >
                <label className='l1'>Email Address</label><br />
                <input className='i1' type='text' /><br />
                <label className='l1'>Password</label><br />
                <input className='i1' type='password'/>
                <h5 className='link' ><a>Forgot Password?</a></h5>
                <button className='submit-button'>SIGN IN</button>
            </form>
        </div>
        <h5 className='t2'>Don't have an account? <a className='link-register'>Register Here</a></h5>
        </div>
        {/*FORM Ending*/}
    </div>
    
    </>
  )
}

export default Login;