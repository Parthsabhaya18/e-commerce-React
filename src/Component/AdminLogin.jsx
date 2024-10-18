import React, { useEffect, useState } from 'react'
import '../Style/AdminLogin.css'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminLogin = () => {

  let [username, setusername] = useState("");
  let [password, setPassword] = useState("");
  let [showpswd, setPswd] = useState(false);

  let [admin, setAdmin] = useState([]);
  useEffect(() => {
    async function fetchAdmin() {
      let data = await fetch('http://localhost:4000/Admin')
      let res = await data.json();
      setAdmin(res)
    }
    fetchAdmin()
  }, [])
  console.log(admin);



  function login() {
    let val = admin.filter((x) => {
      return (x.email == username && x.password == password)
    })
    if (val.length > 0) {
      alert("Login Succesfully")
    }
    else {
      alert("Invalid Details")
    }
  }

  function show() {
    setPswd(!showpswd)
  }

  return (
    <div className="Adminpage">
      <Link to="/JupmLeading">
        <div className="nav">
          <header>
            <FaArrowLeft className='arrow' />
            <li>Back</li>
          </header>
        </div>
      </Link>
      <form action="">
        <h1>Admin Login</h1>
        <input type="text" onChange={(e) => { setusername(e.target.value) }} value={username} placeholder='Username' required />
        {!showpswd ? <FaRegEye className='eye' onClick={show} /> : <FaRegEyeSlash className='eye' onClick={show} />}
        <input type={showpswd ? "password" : "text"} onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='Password' required />
        <button onClick={login}>LOGIN</button>
        <div className='SignUppage'>
          <p>New To Account ?</p>
          <Link to='/signUp'><a>Sign Up Now</a></Link>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin