import React,{useState,useEffect} from 'react'

function IntervelHookcounter() {

const [count, setcount] = useState(0)

const incrementcounter=()=>{
    setcount(count+1)
}

useEffect(() => {
  
const interval=setInterval(incrementcounter,1000);

return ()=>{
    clearInterval(interval)
}

},[count])


  return (
    
    <>
    
    <h3>{count}</h3>
    
    </>

  )
}

export default IntervelHookcounter