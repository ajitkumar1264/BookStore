import React from 'react'
import ReactDOM from 'react-dom'

function Portaldemo() {

  return ReactDOM.createPortal (
    <div>Portaldemo</div>
    ,
    document.getElementById('Portal-root')
  )
}

export default Portaldemo