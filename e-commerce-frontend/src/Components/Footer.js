import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   }}>
        All rights reserved
      </h1>
      <p>
        <Link to="/">About |</Link>
        <Link to="/"> Contact | </Link>
        <Link to="/"> Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Footer