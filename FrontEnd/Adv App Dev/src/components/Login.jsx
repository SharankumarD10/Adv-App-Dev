import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import logo from "../assets/logo.jpg";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const nav = useNavigate();

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Dummy data for demonstration
    const dummyUserId = '123456';
    const dummyUserName = 'John Doe';
    const dummyUserRole = 'user';

    // Simulating login success
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful');
      nav('/user');
    } else if (email === 'admin@example.com' && password === 'password') {
      alert('Login successful');
      nav('/admin-dashboard');
    } else {
      alert('Wrong Credentials');
    }

    // Dummy data for demonstration
    localStorage.setItem('userId', dummyUserId);
    localStorage.setItem('userName', dummyUserName);
    localStorage.setItem('userRole', dummyUserRole);
    localStorage.setItem('isLoggedIn', true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  return (
    <body id="login-body">
      <div className='center-div'>
        <div className="login-container">
          <div className="login-outer-container">
            <div className="login-content-container">
              <br />
              <br />
              <br />
              <br />
              <img className='logo' alt="logo" src={logo}/>
              <h2>Hello!</h2>
              <form onSubmit={validate}>
                <div>
                  <input
                    onChange={handleEmailChange}
                    value={email}
                    type="email"
                    placeholder="Email"
                  />
                  {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>
                <div>
                  <input
                    onChange={handlePasswordChange}
                    value={password}
                    type="password"
                    placeholder="Password"
                  />
                  {formErrors.password && <p className="error">{formErrors.password}</p>}
                </div>
                <button type="submit">Login</button>
              </form>
              <h3> New To our platform ? Register as</h3>
              <Link className="register-link" to="/register">Register!</Link>
            </div>
            <div className="login-image-container"></div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default LoginPage;
