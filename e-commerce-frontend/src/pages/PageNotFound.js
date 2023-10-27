import React from 'react'
// import Layout from '../Components/Layout'
import { Link } from 'react-router-dom'
import image from '../Assets/404.png'

function PageNotFound() {
    return (
        
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src={image} // Replace with the image path
            alt="Page Not Found"
            className="img-fluid mb-4"
          />
          <h1 className="display-4">Oops! Page Not Found</h1>
          <p className="lead">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
       

    )
}

export default PageNotFound