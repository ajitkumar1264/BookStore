import React from 'react'
import Hoc from './Hoc'

function Onhover(props) {

  const {increment,counter,name}=props
  
  return (
    <>
    <button onMouseOver={increment} >clik {name} {counter} times</button>
    </>
  )
}

export default Hoc(Onhover,2)