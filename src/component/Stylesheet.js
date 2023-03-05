import React from 'react'
import "./myStyle.css"

function Stylesheet(props) {

    let classname=props.primary===false ? "secondary":"primary"

    var style={
        fontSize: '72px',
        color:'green',
        textAlign: "center",
    }

  return (
    <>
    <h1 style={style}>Goverment Enginnering Collage</h1>
      <div className={classname}>Stylesheet</div>
    </>
  )
}

export default Stylesheet