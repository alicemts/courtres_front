import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('https://aliceronti.atroul.gr/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid email or password. Please try again.');
        } else {
          throw new Error('An unexpected error occurred. Please try again later.');
        }
      }

      const data = await response.json();
      console.log(data); // You can handle the response data here, e.g., store the token in localStorage

      // Redirect to another page upon successful login
    //  navigate('/dashboard');
    //} catch (err) {
    //  setError(err.message);
    //}
    localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        
        <Link to="/forgot-password" style={{ marginTop: '10px' }}>
          Forgot Password?
        </Link>
                
        <button type="submit" style={{ marginTop: '20px' }}>
          Log In
        </button>
        
      </form>
    </div>
  );
};

export default LoginPage;
