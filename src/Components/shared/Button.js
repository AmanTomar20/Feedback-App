import React from 'react'

function Button({children, version, type, isdisabled}) {
  return (
    <button type={type} disabled={isdisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button