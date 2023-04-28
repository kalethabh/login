import React from 'react'
import "./css/Register.css"

export default function Register() {
  return (
    <div>
        <form class="form">
        <h1>Register</h1>
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
                <div class="container-1">
                    <div class="group">
                        <input required="true" class="main-input" type="password"/>
                        <span class="highlight-span"></span>
                        <label class="lebal-email">Repeat Password</label>
                    </div>
                </div>
            </form>
        </div>
  )
}
