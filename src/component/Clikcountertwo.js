import React,{useContext, useState} from 'react'
import { valnum } from './Context'

function Clikcountertwo() {

 const {car,setcar}=useContext(valnum)
 
  return (
    <>
    <button >name is {car} </button>
    </>
  )
}

export default Clikcountertwo