import React, {useState, createContext } from 'react'


export const valnum=createContext();

function Context(props) {

     const [car, setcar] = useState("BMW")

  return (
    <valnum.Provider value={{car,setcar}}>
   {props.children}
    </valnum.Provider>
  )
}

export default Context