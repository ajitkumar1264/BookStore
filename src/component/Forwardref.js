import React from 'react'


const Forwardref=React.forwardRef((props,first)=>{
    return(
        <>
        
        <input type="text" ref={first} />
        
        </>
    )
})

export default Forwardref