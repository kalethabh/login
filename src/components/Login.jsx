import React from 'react'
import "./css/Login.css"
import { Link } from 'react-router-dom'

export default function Login() {

  return (
        <div>
            <form class="form">
              <h1>Login</h1>
              <div class="group">
                <input required="true" class="main-input" type="text"/>
                <span class="highlight-span"></span>
                <label class="lebal-email">Email</label>
              </div>
              <div class="container-1">
                <div class="group">
                  <input required="true" class="main-input" type="password"/>
                  <span class="highlight-span"></span>
                  <label class="lebal-email">Password</label>
                </div>
              </div>
              <Link to="/ChangePassword" >
                <h6>Forgot my password</h6>
              </Link>
              <button>Login</button>
              <Link to="/sigIn" >
                <h6>Register</h6>
              </Link>
              <h5>Start with: </h5>
            </form>
        </div>
  )
}
