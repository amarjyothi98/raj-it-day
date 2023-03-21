import React from 'react'

function Screen(props) {
  return (
    <form>


      {
        props.data.map(e => {
          return (
            <div className='bg-white border rounded p-3 my-2 d-flex flex-wrap justify-content-between align-items-center'>
              <label htmlFor="">{e.label}</label>
              {(e.options.length)?<select name={e.label} id="" className='p-1 border rounded' onChange={props.onChange} required>
                {
                  e.options.map(k => {
                    return <option value={k}>{k}</option>
                  })
                }
              </select>:<input name={"review"} className='form-control my-1' onChange={props.onChange} placeholder='Answer' required />}
            </div>
          )
        })
      }
    <div className='d-flex justify-content-between align-items-center'>

      <button type='submit' className='btn btn-light' onClick={() => {

        props.active !== 1 ? props.setActive(props.active - 1) : alert("Can't go back")

      }}>Back</button>
      <button type='submit' className='btn btn-light' onClick={() => {

        props.setActive(props.active + 1)

      }}>Next</button>
    </div>

    </form>
  )
}

export default Screen