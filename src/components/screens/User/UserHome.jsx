import React from 'react'
import image1 from '../../assets/addReview.png'
import image2 from '../../assets/seeData.png'
import { useNavigate } from 'react-router-dom'
function UserHome() {
    const navigate=useNavigate()
    return (
        <div className='d-flex align-items-center justify-content-between w-100 bgimage' style={{ height: '100vh'}}>
            <div className='row justify-content-between w-100'>

                    <button onClick={()=>navigate('/addreview')} className='btn col-4 border bg-white rounded mx-auto '>
                        <img src={image1} className="w-100" alt="" />
                        Add a Review</button>

                    <button onClick={()=>navigate('/dashboard')} className='btn col-4 border bg-white rounded mx-auto '>
                        <img src={image2} className="w-100" alt="" />
                        See Reports
                    </button>
            </div>
        </div>

    )
}

export default UserHome