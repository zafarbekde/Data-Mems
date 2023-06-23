  import React, { useState } from 'react';
import DataMems from '../../assets/data-mems.png'
import './login.css'


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };  

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff',  padding: '20px', borderRadius: '5px' }} className='box form-signin'>
        <div className="form-loginn">
          <img className='form-signin-heading' src={DataMems} alt="" />
        </div>
        <div className='bigbox'>
          <div style={{ marginBottom: '20px' }} className='label'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: '10px' }}
              className='form-control'
              placeholder='Email:'
            />
          </div>
          <div style={{ marginBottom: '20px' }} className='label'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: '10px' }}
              className='form-control'
              placeholder='Password:'
            />
          </div>
          <div className="middle">
            <button type="submit" style={{ backgroundColor: '#00B2FF', width: '100%', color: 'white', border: 'none', borderRadius: '5px' }} className='btn'>
              Log in
            </button>
          </div>
          <div className="register-link">
            <a href="#">Register</a>
          </div>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
