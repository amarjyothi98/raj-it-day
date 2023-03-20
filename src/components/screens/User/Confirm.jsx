import React from 'react'
import { Link } from 'react-router-dom'
import tick from '../../assets/check-mark-verified.gif'
function Confirm() {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className='mx-auto text-center' style={{ width: 'fit-content' }}>
            <img src={tick} alt="" />
            <div className=''>
                <h3>Thanks for Review</h3>
                <p className='w-50 mx-auto'>Thanks for giving us time. Your review is helpful to us. Information has been updated on our dashboard.</p>
            </div>
            <Link to="/dashboard">
            <button className='btn btn-primary'>Go to Dashboard</button>
            </Link>
            
        </div>
        </div>
        
    )
}

export default Confirm