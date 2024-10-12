import React from 'react'
import '../Style/Leading.css'
import { Link } from 'react-router-dom'
const Leading = () => {
    return (
        <div className='page'>
            <Link to='/adminlogin'>
                <img src="https://thumbs.dreamstime.com/b/customer-support-service-agent-headset-flat-vector-icon-design-designs-153069456.jpg" alt="" />
                <h1>Admin</h1>
            </Link>
            <Link to='/userlogin'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s" alt="" />
                <h1>User</h1>
            </Link>
        </div>
    )
}

export default Leading