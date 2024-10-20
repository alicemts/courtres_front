import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './app/pages/login/LoginPage';
import ForgotPasswordPage from './app/pages/forgotPassword/ForgotPasswordPage';
import LogoutPage from './app/pages/logout/LogoutPage';
import RegisterPage from './app/pages/register/RegisterPage';

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React !!!</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
            </div>
            <Link to="/login">Go to Login Page</Link>
            <br />
            <Link to="/register">Go to Register Page</Link>

        </>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/logout" element={<LogoutPage />}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
