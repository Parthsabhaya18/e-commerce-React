import React,{useState} from 'react'
import '../Style/SignUpPage.css'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {Link} from 'react-router-dom';

const SignUpPage = () => {

    let [username,setusername]=useState("");
    let [Password,setPassword]=useState("");
    let [showpswd,setPswd]=useState(false);

    function show(){
        setPswd(!showpswd)
      }
    return (

        <div className='signUp'>
            <Link to="/Jumplogin">
                <div className="nav">
                    <header>
                        <FaArrowLeft className='arrow' />
                        <li>Back</li>
                    </header>
                </div>
            </Link>

            <form action="">
                <h1>Sign Up</h1>
                <input type="text"  placeholder='First Name' required />
                <input type="text"  placeholder='Last Name' required />
                <input type={showpswd ? "password" : "text"} onChange={(e) => { setPassword(e.target.value) }} value={Password} placeholder='Password' required />
                <input type="password"  placeholder='Confirm Password' required />
                {!showpswd ? <  FaRegEye className='eye' onClick={show} /> : <FaRegEyeSlash className='eye' onClick={show} />}
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default SignUpPage