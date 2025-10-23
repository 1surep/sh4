'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const router = useRouter();
  const authContext = useAuth();
  
  // Debug: Check what we get from useAuth
  // console.log('Auth context:', authContext);
  // console.log('Login function:', authContext?.login);
  // console.log('Type of login:', typeof authContext?.login);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear messages when user types
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset all states
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // console.log('Attempting signin with:', formData.email);
      
      const response = await axios.post('/api/auth/signin', formData);
      
      // console.log('API Response:', response.data);
      
      // Check if response is successful
      if (response.data.success) {
        // Verify we have all required data
        if (!response.data.user || !response.data.token) {
          // console.error('Missing user or token in response:', response.data);
          setError('Authentication failed. Missing user data.');
          setLoading(false);
          return;
        }

        // console.log('User data received:', response.data.user);
        // console.log('Token received:', response.data.token ? 'Yes' : 'No');

        // Check if login function exists
        if (!authContext || typeof authContext.login !== 'function') {
          // console.error('Login function not available!', authContext);
          setError('Authentication system error. Please refresh the page.');
          setLoading(false);
          return;
        }

        // Try to log the user in FIRST, before showing success
        try {
          // Ensure userData is a plain object
          const userData = {
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            createdAt: response.data.user.createdAt
          };
          
          // console.log('Calling login with userData:', userData);
          
          authContext.login(userData, response.data.token);
          
          // console.log('User logged in successfully');
          
          // Only show success message AFTER login succeeds
          setSuccess(response.data.message || 'Signed in successfully!');
          
          // Redirect to home page after 1.5 seconds
          setTimeout(() => {
            // console.log('Redirecting to home page...');
            router.push('/dashboard');
          }, 1500);
          
        } catch (loginError) {
          // console.error('Login function error:', loginError);
          // console.error('Error details:', loginError.message);
          // console.error('Error stack:', loginError.stack);
          // Don't set success, only set error
          setError(`Failed to save login credentials: ${loginError.message}`);
          setLoading(false);
          return;
        }
        
      } else {
        // API returned success: false
        const errorMsg = response.data.message || response.data.error || 'Signin failed';
        console.error('Signin failed:', errorMsg);
        setError(errorMsg);
        setLoading(false);
      }
      
    } catch (err) {
      console.error('Signin error caught:', err);
      
      // Handle error response
      if (err.response) {
        // Server responded with error status
        const errorMessage = err.response?.data?.message || err.response?.data?.error || 'Invalid credentials';
        console.error('Server error:', errorMessage);
        setError(errorMessage);
      } else if (err.request) {
        // Request was made but no response
        console.error('No response from server');
        setError('Unable to connect to server. Please try again.');
      } else {
        // Something else happened
        console.error('Error:', err.message);
        setError('Something went wrong. Please try again.');
      }
      
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-yellow-50 pt-36 w-full relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/eagle.png')" }}>
      <div className="max-w-md w-full space-y-8 p-8 bg-white/80 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 uppercase text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Welcome back, <br /> You have no business here if you are not a mismanager of SH4.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#000000] focus:border-black focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#000000] focus:border-[#000000] focus:z-10 sm:text-sm"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm text-center">
              {success}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FFD700] hover:bg-[#FFD700] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-[#FFD700] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </div>
              ) : 'Sign In'}
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => router.push('/signup')}
                className="font-medium text-[#FFD700] hover:text-[#FFD700] cursor-pointer"
              >
                Sign Up
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}