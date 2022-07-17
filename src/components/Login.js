import React from 'react'
import { accessUrl } from '../spotify'
import "./login.css"

function Login() {
    return (
        <div className='login'>
            
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={accessUrl}>Login with Spotify</a>
            {/* Spotify Logo */}
            {/* Login with Spotify Button */}
        </div>
    )
}

export default Login