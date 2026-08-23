'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '../../components/Home/animations';
import { useAuth } from '../context/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
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

          // Store token in cookie for middleware authentication
          document.cookie = `token=${response.data.token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days

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
    <div className="pt-28">
      <section className="bg-sh4-ink px-6 py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-md w-full mx-auto bg-sh4-cream rounded-xl p-8 md:p-10"
        >
          <div className="text-center">
            <Image
              src="/logo.jpg"
              alt="Sierra H4 logo"
              width={64}
              height={64}
              className="mx-auto rounded-full object-cover border-[3px] border-sh4-gold"
            />
            <h1 className="mt-[18px] font-display text-3xl uppercase text-sh4-ink">
              Misma Sign In
            </h1>
            <p className="mt-2 text-sm text-sh4-muted">
              Mismanagement access only. Hashers, go run a trail instead.
            </p>
          </div>

          <form className="flex flex-col gap-4 mt-7" onSubmit={handleSubmit}>
            <label htmlFor="email" className="flex flex-col gap-1.5 text-[13px] font-bold text-sh4-ink">
              Email
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border border-[#D8CFBB] rounded-lg px-3 py-2.5 text-[15px] font-normal bg-white focus:outline-none focus:border-sh4-amber"
                placeholder="you@sierrah4.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="password" className="flex flex-col gap-1.5 text-[13px] font-bold text-sh4-ink">
              Password
              <span className="flex gap-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="flex-1 min-w-0 border border-[#D8CFBB] rounded-lg px-3 py-2.5 text-[15px] font-normal bg-white focus:outline-none focus:border-sh4-amber"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="border border-[#D8CFBB] rounded-lg px-3 text-sh4-muted hover:text-sh4-ink transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </span>
            </label>

            {error && (
              <div className="bg-[#FBE7E4] border border-[#E8A79B] text-[#8A2E1D] px-4 py-3 rounded-xl text-sm text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-[#E4F1E1] border border-[#A9CFA0] text-[#2E5C25] px-4 py-3 rounded-xl text-sm text-center">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-[15px] py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 mt-1.5"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-sh4-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </div>
              ) : 'Sign In'}
            </button>

            <p className="text-center text-[13px] text-sh4-muted">
              Locked out? Ask the Web Master, Pucci Engineer.
            </p>

            {/* <div className="text-center">
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
            </div>  */}
          </form>
        </motion.div>
      </section>
    </div>
  );
}
