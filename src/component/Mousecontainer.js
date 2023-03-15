import React,{useState} from 'react'
import HookMouse from './HookMouse'

function Mousecontainer() {

    const [display, setdisplay] = useState(false)

  return (
    
    <>
    <button onClick={()=>setdisplay(!display)}>toggle display</button>
    {
        display && <HookMouse/>
    }
    </>
  )
}

export default Mousecontainer