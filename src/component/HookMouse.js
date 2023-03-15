import React,{useState,useEffect} from 'react'

function HookMouse() {

    const [setx, setsetx] = useState(0)
    const [sety, setsety] = useState(0)

    const logmouse=(e)=>{
        setsetx(e.clientX)
        setsety(e.clientY)
    }

useEffect(() => {
    console.log("useeffect called")
    window.addEventListener("mouseover",logmouse)
},[])



  return (
    <>
    <div>
    x-{setx}
    </div>
    
    </>
  )
}

export default HookMouse