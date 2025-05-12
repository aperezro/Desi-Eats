import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import desiLogo from '../assets/desi_logo.png';
import { RxCross1 } from "react-icons/rx";

const SignIn = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const apiBase = 'http://localhost:8080';

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setIsLoggedIn(true);
      setMessage('Welcome back!');
      setMessageType('success');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoggedIn) return;

    const endpoint = isRegistering ? '/register' : '/login';

    try {
      const res = await fetch(`${apiBase}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || (isRegistering ? 'Account created successfully!' : 'Signed in successfully!'));
        setMessageType('success');
      
        if (!isRegistering) {
          localStorage.setItem('userEmail', email);
          setIsLoggedIn(true);
          setTimeout(() => navigate('/'), 1000);
        }
      }
       else {
        setMessage(data.error || 'Something went wrong');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
      setMessageType('error');
    }
  };

  const handlePasswordReset = async () => {
    try {
      const res = await fetch(`${apiBase}/update-password`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await res.json();
      setMessage(data.message || data.error);
      setMessageType(res.ok ? 'success' : 'error');

      if (res.ok) {
        setForgotPassword(false);
        setNewPassword('');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
      setMessageType('error');
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch(`${apiBase}/logout`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      localStorage.removeItem('userEmail');
      setEmail('');
      setPassword('');
      setIsLoggedIn(false);
      setMessage('Signed out.');
      setMessageType('success');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account?')) return;

    try {
      const res = await fetch(`${apiBase}/delete-account`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      localStorage.removeItem('userEmail');
      setEmail('');
      setPassword('');
      setIsLoggedIn(false);
      setMessage(data.message || data.error);
      setMessageType(res.ok ? 'success' : 'error');
    } catch (err) {
      console.error(err);
      setMessage('Error deleting account.');
      setMessageType('error');
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center relative px-4">
      {/* Top-right Close Button */}
      <div className="absolute top-6 right-10">
      <button
          className="text-white hover:text-orange-600 border border-gray-300 rounded-full bg-[#7C2D53] p-2 transition-colors hover:scale-115"
          onClick={() => navigate('/')}
        >
          <RxCross1 size={30} />
        </button>
      </div>
   {/* Blurs Container */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-20 right-0 h-[200px] w-[200px] bg-[#ff0000ce] opacity-50 blur-[100px] rounded-full -translate-x-[370%] translate-y-[20%]"></div>
      </div>

      {/* Logo as clickable button */}
      <button onClick={() => navigate('/')} className="mb-6 z-4">
        <img src={desiLogo} alt="Desi Eats Logo" className=" hover:scale-107 transition-all w-50 cursor-pointer" />
      </button>

      <h1 className="text-3xl font-bold text-[#7C2D53] mb-6 z-4">
        {isLoggedIn ? 'Account' : isRegistering ? 'Create Account' : 'Sign In'}
      </h1>

      {/* Message */}
      {message && (
        <div
          className={`text-center mb-4 font-semibold ${
            messageType === 'success' ? 'text-green-700' : 'text-red-600'
          }`}
        >
          {message}
        </div>
      )}

      {/* Form */}
      {!isLoggedIn && (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 z-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!forgotPassword && (
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}

          {!forgotPassword && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600 cursor-pointer" />
                Remember me
              </label>
              <button
                type="button"
                className="text-orange-600 underline cursor-pointer"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-800 text-white font-bold py-3 rounded hover:bg-orange-700 cursor-pointer"
          >
            {isRegistering ? 'Register' : 'Sign In'}
          </button>
        </form>
      )}

      {/* Password Reset */}
      {forgotPassword && !isLoggedIn && (
        <div className="w-full max-w-md mt-6">
          <h3 className="font-bold mb-2 text-lg">Reset Your Password</h3>
          <input
            type="password"
            placeholder="New Password"
            className="w-full border p-3 rounded mb-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            onClick={handlePasswordReset}
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            Save New Password
          </button>
        </div>
      )}

      {/* Sign Out & Delete Account */}
      {isLoggedIn && (
        <div className="mt-8 w-full max-w-md">
          <button
            onClick={handleSignOut}
            className="w-full bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700"
          >
            Sign Out
          </button>
          <button
            onClick={handleDeleteAccount}
            className="mt-2 w-full border border-red-600 text-red-600 text-sm py-2 rounded hover:bg-red-100"
          >
            Delete Account
          </button>
        </div>
      )}

      {/* Toggle Login/Register */}
      {!isLoggedIn && (
        <div className="mt-8 text-center">
          <p className="font-semibold mb-2">
            {isRegistering ? 'Already have an account?' : 'Not a member?'}
          </p>
          <button
            className="border border-orange-600 text-orange-600 font-bold py-2 px-4 rounded hover:bg-orange-400 hover:text-white"
            onClick={() => {
              setIsRegistering(!isRegistering);
              setForgotPassword(false);
            }}
          >
            {isRegistering ? 'Sign In' : 'Create an Account'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
