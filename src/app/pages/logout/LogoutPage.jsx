import React, { useEffect } from 'react';  // Import useEffect from React
import { useNavigate } from 'react-router-dom';


const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        // Send a request to the logout API
        const response = await fetch('https://aliceronti.atroul.gr/api/logout', {
          method: 'POST',  // Use POST if that's the expected method for logging out
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Assuming token is stored in localStorage
          },
        });

        // Check if the response was successful
        if (response.ok) {
          // Clear user authentication (e.g., remove tokens)
          localStorage.removeItem('authToken');

          // Redirect to login page after successful logout
          navigate('/login');
        } else {
          // Handle errors if the response was not successful
          const errorData = await response.json();
          console.error('Logout failed:', response.statusText);
          alert('Logout failed: ' + response.statusText);
        }
      } catch (error) {
        console.error('Error during logout:', error);
        alert('Network error. Please try again later.');
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>
      <h1>Logging you out...</h1>
    </div>
  );
};

export default LogoutPage;
