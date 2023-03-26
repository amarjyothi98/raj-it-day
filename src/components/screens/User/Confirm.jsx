import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import tick from '../../assets/check-mark-verified.gif'
import { auth } from '../../constants/firebase'
function Confirm() {
    const navigate=useNavigate()
    useEffect(e=>{
        setTimeout(e=>{
            navigate('/dashboard')
        },5000)

        if(auth.currentUser==null){
            navigate('/login')
        }
        console.log(auth)
    },[])

    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className='mx-auto text-center' style={{ width: 'fit-content' }}>
            <img src={tick} alt="" />
            <div className=''>
                <h3>Thanks for Review</h3>
                <p className='w-50 mx-auto'>Thanks for giving us time. Your review is helpful to us. Information has been updated on our dashboard.</p>
            </div>
            <Link to="/addReview">
            <button className='btn btn-primary'>Add More Reviews</button>
            </Link>
            <p>You'll be redirected to Dashboard in 5 seconds</p>
            
        </div>
        </div>
        
    )
}

export default Confirm