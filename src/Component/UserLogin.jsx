import React,{useState} from 'react'
import '../Style/UserLogin.css'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {Link} from 'react-router-dom';

const UserLogin = () => {

  let [username,setusername]=useState("");
  let [password,setPassword]=useState("");
  let [showpswd,setPswd]=useState(false);

  function show(){
    setPswd(!showpswd)
  }

  function login(){
    if(username=="jspider"&&password==="1234"){
      alert("Login In Succesfully !!")
    }
    else{
      alert("Invalid Username and password !!")
    }
  }
  return (
    <div className="Userpage">
       <Link to="/JupmLeading">
            <div className="nav">
              <header>
                  <FaArrowLeft className='arrow' />
                  <li>Back</li>
              </header>
            </div>
        </Link>
    <form action="">
      <h1>User Login</h1>
      <input type="text" onChange={(e)=>{setusername(e.target.value)}} value={username} placeholder='Username' required />
      {!showpswd?<FaRegEye className='eye' onClick={show}/>:<FaRegEyeSlash className='eye' onClick={show} />}
      <input type={showpswd?"password":"text"} onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Password' required />
      <button onClick={login}>LOGIN</button>
   </form>
   </div>
  )
}

export default UserLogin