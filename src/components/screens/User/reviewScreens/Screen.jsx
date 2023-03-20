import React from 'react'

function Screen(props) {
  return (
    <div>


      {
        props.data.map(e => {
          return (
            <div>
              <label htmlFor="">{e.label}</label>
              <select name={e.label} id="" onChange={props.onChange}>
                {
                  e.options.map(k=>{
                    return <option value={k}>{k}</option>
                  })
                }
              </select>
            </div>
          )
        })
      }

      <button onClick={() => props.setActive(props.active + 1)}>Next</button>

    </div>
  )
}

export default Screen