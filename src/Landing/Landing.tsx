import React from 'react'
import './Landing.scss'
export const Landing = () => {
  return (
    <>
    <div className="container">
    <div className="navBar">
        <h1>Pawswipe</h1>
        <button>Login</button>
        <button>Signup</button>
    </div>
    <div className="body">
        <p className="quote">Find your dog's pawfect match!</p>
        <img src="/imgs/landing.webp" className='photo'></img>
    </div>
    </div>
    </>
  )
}
