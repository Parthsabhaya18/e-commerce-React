import React, { useEffect, useState } from 'react'
import '../Style/UserLogin.css'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserLogin = () => {

  let [username, setusername] = useState("");
  let [password, setPassword] = useState("");
  let [showpswd, setPswd] = useState(false);

  let [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch('http://localhost:2000/User');
      let res = await data.json();
      setUser(res)
    }
    fetchData()
  }, [])
  console.log(user);

  function login() {
    let val = user.filter((x) => {
      return (x.email == username && x.password == password)
    })
    if (val.length > 0) {
      alert("Login Successfully !!")
    }
    else {
      alert("Invalid Details")
    }
  }
  
  function show() {
    setPswd(!showpswd)
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
        <input type="text" onChange={(e) => { setusername(e.target.value) }} value={username} placeholder='Username' required />
        {!showpswd ? <FaRegEye className='eye' onClick={show} /> : <FaRegEyeSlash className='eye' onClick={show} />}
        <input type={showpswd ? "password" : "text"} onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='Password' required />
        <button onClick={login}>LOGIN</button>
        <div className='SignUppage'>
          <p>New To Account ?</p>
          <Link to=''>Sign Up Now</Link>
        </div>
      </form>
    </div>
  )
}

export default UserLogin