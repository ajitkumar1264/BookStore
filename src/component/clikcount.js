import React from 'react'
import Hoc from './Hoc'

function Clikcount(props) {

  const {increment,counter}=props
  
  return (
    <>
  
    <button onClick={increment} >clik {counter} times</button>
    </>
  )
}

export default Hoc(Clikcount)