import React from 'react'


//example of render props
function User(props) {
  return (
    <div>{props.render(false)}</div>
  )
}

export default User