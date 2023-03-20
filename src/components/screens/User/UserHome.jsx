import React from 'react'
import { Link } from 'react-router-dom'
function UserHome() {
    return (
        <div>
            <Link to="/addreview">
                <button className='btn btn-primary'>Report Issue</button>
            </Link>
        </div>
    )
}

export default UserHome