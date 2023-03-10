import React from 'react'
import Hoc from './Hoc'

function Clikcount(props) {

  const {increment,counter,name}=props

  return (
    <>
  
    <button onClick={increment} >clik {name} {counter} times</button>
    </>
  )
}

export default Hoc(Clikcount,5)