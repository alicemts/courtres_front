import React, { useEffect } from 'react';  // Import useEffect from React
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any user authentication (e.g., remove tokens, etc.)
    // localStorage.removeItem('authToken'); // Example of clearing token or session data

    // Redirect to login page after 2 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>You have been logged out</h1>
      <p>You will be redirected to the login page shortly...</p>
    </div>
  );
};

export default LogoutPage;
