import React from 'react'
import Hoc from './Hoc'

function Onhover(props) {

  const {increment,counter}=props
  
  return (
    <>
    <button onMouseOver={increment} >clik {counter} times</button>
    </>
  )
}

export default Hoc(Onhover)