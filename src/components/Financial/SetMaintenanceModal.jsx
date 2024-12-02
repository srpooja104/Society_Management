import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SetMaintenanceModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-[#000000] opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xs sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-center">
              <div className="text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Set Maintenance</h3>
                <hr className="border-[#F4F4F4] mb-4" />
                <div className="mt-2 space-y-4">
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-[#00000]">
                      Password<span className='text-red-500'>*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="Password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-[#000000] rounded-md shadow-sm placeholder-[#000000] focus:outline-none focus:ring-primary focus:border-orange sm:text-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5 text-[#000000]" /> : <Eye className="h-5 w-5 text-[#000000]" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 flex sm:px-6 space-x-2">
            <button
              type="button"
              className="w-1/2 flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:text-sm"
              style={{
                background: "linear-gradient(to right, #FE512E, #F09619)",
                transition: "background 0.3s ease",
              }}
            >
              Continue
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-[#000000] font-medium text-gray-700 hover:bg-gray-50 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetMaintenanceModal;
