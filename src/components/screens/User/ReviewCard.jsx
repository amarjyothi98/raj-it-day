import React from 'react'

function ReviewCard({data}) {
  return (
    <div className='container'>
        <div className='border rounded px-3 py-1'>
            <p className='my-1'>{data.review}</p>
            <div className='d-flex' style={{opacity:0.6}}>

            <p className='my-1 smallText'>- {data.name}</p>
            <p className='my-1 smallText'>{data.date}</p>
            <p className='my-1 smallText'>{data.location}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard