import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the forgot password logic (e.g., send email to API)
        alert(`Password reset link sent to ${email}`);
    };

    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
            <h2>Forgot Password</h2>
            <label style={{ marginBottom: '10px' }}> {/* Add marginBottom for spacing */}
            Enter your email:
            </label>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '20px' }} // Add marginBottom here for more space
            />
            <button 
                type="submit" 
                style={{ 
                    backgroundColor: 'blue', 
                    color: 'white', // Change text color to white for better contrast
                    border: 'none', // Optional: remove border
                    padding: '10px', // Optional: add some padding
                    cursor: 'pointer' // Optional: change cursor on hover
                }}
                >
                Submit
            </button>
      </form>
    </div>
    );
}

export default ForgotPasswordPage;