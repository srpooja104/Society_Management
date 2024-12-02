import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown } from 'lucide-react'
import Register from '../assets/register.jpg'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    society: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCreateSocietyModal, setShowCreateSocietyModal] = useState(false);
  const [newSociety, setNewSociety] = useState({
    name: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: ''
  });

  const societies = [
    'Shantigram residency',
    'Russell House Park',
    'Saurya residency',
    'Sharnukh Avenue',
    'Utsav Society',
    'Murldhar',
    'Shree Sharnam',
    'vasantnagar township',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNewSocietyChange = (e) => {
    const { name, value } = e.target;
    setNewSociety({ ...newSociety, [name]: value });
  };

  const handleNewSocietySubmit = (e) => {
    e.preventDefault();
    console.log('New society submitted:', newSociety);
    setShowCreateSocietyModal(false);
    // Reset the form
    setNewSociety({
      name: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zipCode: ''
    });
    // Here you would typically add the new society to your list of societies
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col bg-[#F6F8FB] flex-1 relative">
        <h1 className="text-5xl font-bold mb-8 text-gray-800 absolute top-8 left-8">
          <span className="text-orange-500"  >Dash</span>Stack
        </h1>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={Register}
            alt="Society Management Illustration"
            className="w-full max-w-xl h-auto"
          />
        </div>
      </div>


      <div className="flex-1 flex justify-center items-center p-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-6">Registration</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name<span className='text-red-500'>*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name<span className='text-red-500'>*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address<span className='text-red-500'>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number<span className='text-red-500'>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="91+"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country<span className='text-red-500'>*</span>
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Name"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State<span className='text-red-500'>*</span>
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Name"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City<span className='text-red-500'>*</span>
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Name"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="society" className="block text-sm font-medium text-gray-700 mb-1">
                Select Society<span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <select
                  id="society"
                  name="society"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                  value={formData.society}
                  onChange={(e) => {
                    if (e.target.value === 'create_society') {
                      setShowCreateSocietyModal(true);
                    } else {
                      handleInputChange(e);
                    }
                  }}
                >
                  <option value="">Select Society</option>
                  {societies.map((society, index) => (
                    <option key={index} value={society}>
                      {society}
                    </option>
                  ))}
                  <option value="create_society" className="text-white text-center  rounded-lg w-full bg-orange-600 ">Create Society</option>
             
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password<span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
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
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password<span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to all the Terms and <span className="text-orange-500">Privacy Policies</span>.
              </label>
            </div>
            <button
            type="submit"
                className="text-white mt-6 p-2 rounded-lg w-full"
                style={{
                    background: "linear-gradient(to right, #FE512E, #F09619)",
                    transition: "background 0.3s ease",
                }}
                >
                  Register
                </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <a href="#" className="text-orange-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Create Society Modal */}
      {showCreateSocietyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Create New Society</h2>
            <form onSubmit={handleNewSocietySubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="societyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Society Name<span className='text-red-500'>*</span>
                  </label>
                  <input
                    id="societyName"
                    name="name"
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder='Enter Name'
                    value={newSociety.name}
                    onChange={handleNewSocietyChange}
                  />
                </div>
                <div>
                  <label htmlFor="societyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Society Address<span className='text-red-500'>*</span>
                  </label>
                  <input
                    id="societyAddress"
                    name="address"
                    type="text"
                    required
                    placeholder='Enter Address'
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={newSociety.address}
                    onChange={handleNewSocietyChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="societyCountry" className="block text-sm font-medium text-gray-700 mb-1">
                      Country<span className='text-red-500'>*</span>
                    </label>
                    <input
                      id="societyCountry"
                      name="country"
                      type="text"
                      placeholder='Enter Name'
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newSociety.country}
                      onChange={handleNewSocietyChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="societyState" className="block text-sm font-medium text-gray-700 mb-1">
                      State<span className='text-red-500'>*</span>
                    </label>
                    
                    <input
                      id="societyState"
                      name="state"
                      type="text"
                      placeholder='Enter Name'
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newSociety.state}
                      onChange={handleNewSocietyChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="societyCity" className="block text-sm font-medium text-gray-700 mb-1">
                      City<span className='text-red-500'>*</span>
                    </label>
                    <input
                      id="societyCity"
                      name="city"
                      placeholder='Enter Name'
                      type="text"
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newSociety.city}
                      onChange={handleNewSocietyChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="societyZipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code<span className='text-red-500'>*</span>
                    </label>
                    <input
                      id="societyZipCode"
                      name="zipCode"
                      type="text"
                      placeholder='Enter Zip Code'
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newSociety.zipCode}
                      onChange={handleNewSocietyChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3">
              <button
                type="button"
                onClick={() => setShowCreateSocietyModal(false)}
                className="w-full px-5 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full px-5 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                style={{
                  background: "linear-gradient(to right, #FE512E, #F09619)",
                  transition: "background 0.3s ease",
                }}
              >
                Save
              </button>
            </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;