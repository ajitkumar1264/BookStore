import React,{useState} from 'react'

function Countertwo(props) {

    const [counter, setcounter] = useState(0)

const increment=()=>{
    setcounter(counter+1)
}


  return (
    <div>
    {props.render(props.counter,props.increment)}
    </div>
  )
}

export default Countertwo