import React from 'react'

function Screen(props) {
  return (
    <form>


      {
        props.data.map(e => {
          return (
            <div>
              <label htmlFor="">{e.label}</label>
              <select name={e.label} id="" onChange={props.onChange} required>
                {
                  e.options.map(k => {
                    return <option value={k}>{k}</option>
                  })
                }
              </select>
            </div>
          )
        })
      }

      <button type='submit' onClick={() => {

        props.active != 1 ? props.setActive(props.active - 1) : alert("Can't go back")

      }}>Back</button>
      <button type='submit' onClick={() => {

        props.setActive(props.active + 1)

      }}>Next</button>

    </form>
  )
}

export default Screen