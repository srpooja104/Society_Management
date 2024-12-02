import React, { useState, FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Background from '../assets/background.jpg';
import login from '../assets/login.jpg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await fetch(`http://localhost:8080/admin/auth/login`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
console.log("\n\n\nresponse===>>>>",response)

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        navigate('/dashboard');
        // Handle successful login, e.g., navigate to dashboard or save token
      } else {  
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col bg-[#F6F8FB] flex-1 relative">
        <h1 className="text-5xl font-bold mb-8 text-gray-800 absolute top-8 left-8">
          <span className="text-orange-500">Dash</span>Stack
        </h1>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={login}
            alt="Society Management Illustration"
            className="w-full max-w-xl h-auto"
          />
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-xl px-6">
          <div
            className="bg-white shadow-md rounded-lg p-8 relative"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-white opacity-90 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 font-bold">Login</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email or Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter Your Phone number or Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2" required />
                    <label htmlFor="terms" className="text-sm">Remember me</label>
                  </div>
                  <a href="/forgot-password" className="text-sm text-red-500 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <button
                  type="submit"
                  className="text-white mt-6 p-2 rounded-lg w-full"
                  style={{
                    background: "linear-gradient(to right, #FE512E, #F09619)",
                    transition: "background 0.3s ease",
                  }}
                >
                  Sign In
                </button>
              </form>
              <div className="mt-4 text-center">
                <a href="/register" className="text-sm">
                  Don't have an account? <span className="text-red-500 hover:underline">Registration</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
