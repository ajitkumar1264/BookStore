import React,{useState} from 'react'

function ClickHovertwo() {

    const [counter, setcounter] = useState(0)

const increment=()=>{
    setcounter(counter+1)
}

  return (
    <>
    <button onMouseOver={increment}>clik button {counter} times</button>
    </>
  )
}

export default ClickHovertwo