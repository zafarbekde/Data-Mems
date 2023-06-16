import React, { useState } from 'react';
import './login.css'


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Perform login logic here
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }} className='box form-signin'>
        <h2 className='form-signin-heading'>Login</h2>
        <div  className='bigbox'>
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
        <button type="submit" style={{ backgroundColor: '#00B2FF', width: '100%', color: 'white', border: 'none', borderRadius: '5px' }} className='btn'>
          Log in
        </button>          
        </div>

        <a href="#">Register</a>

      </form>
    </div>
  );
};

export default LoginForm;
