import React,{useState} from 'react'
import '../Style/SignUpPage.css'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {Link} from 'react-router-dom';
import axios from 'axios'

const SignUpPage = () => {

    let [username,setusername]=useState("");
    let [password,setPassword]=useState("");
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [number,setNumber]=useState("");

    let [showpswd,setPswd]=useState(false);
    let data={email,password,number,name};
    function addData(){
        axios.post('http://localhost:2000/Admin',data)
        .then((res)=>{
            console.log("Sucessfully SignUp");
            alert('Sucess SignUp')
        })
        .catch((err)=>{
            alert('Invalid Data');
        })

    }


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

            <form action="" onSubmit={addData}>
                <h1>Sign Up</h1>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}   placeholder='Name' required />
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='E-Mail'required />
                <input type="tel" value={number} onChange={(e)=>{setNumber(e.target.value)}} placeholder='Phone no' required />
                <input type={showpswd ? "password" : "text"} onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='Password' required />
                {!showpswd ? <  FaRegEye className='eye' onClick={show} /> : <FaRegEyeSlash className='eye' onClick={show} />}
                <button type='submit'>LOGIN</button>
            </form>
        </div>
    )
}

export default SignUpPage