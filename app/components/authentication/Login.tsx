"use client";
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setValidEmail] = useState(false);

  const logIn = () => {
    validateEmail()
    if (password.length > 0 && isValidEmail) {

    } else {

    }
  }

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setValidEmail(isValid);
  }

  return (
    <main>
      <div className="mt-20">
        <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher
        </h1>
      </div>
      <div className="mt-10">
        <form className='wrapper' action="/" method="post">
          <input type="text" placeholder="Please enter email" className="logintext__input"
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Please enter password" className="logintext__input mt-10"
            onChange={(e) => setPassword(e.target.value)} />
          <button type="button" className="authentication-btn mt-10" onClick={logIn}>Login</button>
        </form>
      </div >
    </main >
  );
}

export default Login