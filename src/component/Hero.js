import React from 'react'

function Hero({heroname}) {

    if(heroname==="ajitkumar")
    {
        throw new Error("this is not real hero")
    }

  return (
    <div>{heroname}</div>
  )
}

export default Hero