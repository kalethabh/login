import React from 'react'
import "./css/Login.css"

export default function Login() {

  return (
    <>
        <div className='div'>
            <form className='form'>
            <h1>Login</h1>
                <label>Email</label>
                <input type="email" placeholder='correo@email...'/>
                <br/>
                <label>Password</label>
                <input type="password" placeholder='1234566@kal...'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    </>
  )
}
