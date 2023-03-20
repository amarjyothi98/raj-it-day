import React from 'react'
import { Link } from 'react-router-dom'
function UserHome() {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
            <div>
            <Link to="/addreview">
                <button className='btn btn-primary d-block my-1 w-100'><i className="fa fa-plus mx-2"></i>Add a Review</button>
            </Link>
            <Link to="/dashboard">
                <button className='btn btn-primary d-block my-1 w-100'><i className="fa fa-eye mx-2"></i>See Reports</button>
            </Link>
        </div>
        </div>
        
    )
}

export default UserHome