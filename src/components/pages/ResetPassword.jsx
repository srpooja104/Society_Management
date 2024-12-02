import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Forgotimg from '../assets/forget.jpg';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Input validation
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // API call
    try {
      const response = await fetch('http://localhost:8080/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      if (response.ok) {
        setSuccessMessage('Password reset successfully!');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to reset password.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
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
            src={Forgotimg}
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
              backgroundImage: "url('../assets/background.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-white opacity-90 rounded-lg"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 font-bold">Reset Password</h2>

              {errorMessage && (
                <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-500 text-sm mb-4">{successMessage}</div>
              )}

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Password<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="new-password"
                        name="newPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="text-white mt-6 p-2 rounded-lg w-full"
                    style={{
                      background: 'linear-gradient(to right, #FE512E, #F09619)',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
