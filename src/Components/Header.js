import React from 'react'



function Header({Name}) {
  const headerStyle={
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#ff6a95",
    textAlign: 'center'
  }
  return (
    
        <div className='container' style={headerStyle}>
            <h2>{Name}</h2>
        </div>
  )
}


export default Header