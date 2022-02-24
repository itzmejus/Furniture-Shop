import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
function Login() {
  return (
    <form method="POST" className="login">
      <div className="logincard">
        <h1>Resgister</h1>

        <input
          type="text"
          placeholder="please enter name"
          
        />
        <input
          type="email"
          placeholder="please enter email"
        
        />
        <input
          type="password"
          placeholder="please enter password"
          
        />
        <button><Link to='/'>Login</Link></button>
      </div>
    </form>
  )
}

export default Login