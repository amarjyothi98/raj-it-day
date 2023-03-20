import React from 'react'

function Loader() {
  return (
    <div className='bg-black d-flex justify-content-center' style={{minHeight:'100vh'}}>
        <i className='fa fa-spinner  fa-spin text-white'></i>
    </div>
  )
}

export default Loader