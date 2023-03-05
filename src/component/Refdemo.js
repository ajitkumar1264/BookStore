import React,{useRef,useEffect} from 'react'
import Forwardref from './Forwardref'

function Refdemo() {
const first=useRef()

useEffect(() => {
    first.current.focus()
    
}, [])

const checkvalue=()=>{
    console.log(first.current.value)
}

  return (
    <>
    <input type="text" ref={first} />
    <input type="text" ref={first} />
    <Forwardref ref={first}/>
    <button onClick={checkvalue}>focus</button>
    </>
  )
}

export default Refdemo