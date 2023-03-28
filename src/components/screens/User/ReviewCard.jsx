import React from 'react'

function ReviewCard({data, styleClass}) {
  return (
    <div className={`${styleClass}`}>
        <div className='card border text-dark rounded px-3 py-1'>
            <p className='my-1 '>{data.data['Do you have any suggestions for improving the quality of the food at the anganbadi center?']}</p>
            <div className='d-flex card-footer'>

            <p className='my-1'>- {data.name}</p>
            <p className='my-1'>{data.date}</p>
            <p className='my-1'>{data.location}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard