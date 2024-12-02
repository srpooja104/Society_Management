import React, { useState } from "react";

const AddModal = ({ isOpen, onClose }) => {
  // State for form inputs
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [work, setWork] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSave = async () => {
    if (!fullName || !phoneNumber || !work) {
      alert("All fields are required!");
      return;
    }

    const data = {
      fullName,
      phoneNumber,
      work,
    };

    setIsSubmitting(true);

    fetch("http://localhost:8080/admin/important/number/create", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: "include", // Sends cookies
      body: JSON.stringify({ /* your payload */ }),
  })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-[#000000] opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:align-middle">
            <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add Important Number</h3>
              <hr className="border-[#F4F4F4] mb-4 mt-4" />
              <div className="mt-2">
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="91+"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="work" className="block text-sm font-medium text-gray-700 mb-1">
                    Work <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="work"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter work"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 flex space-x-2 sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="w-1/2 inline-flex justify-center rounded-md text-gray-700 bg-[#F6F8FB] px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] hover:text-white"
                style={{
                  transition: "background 0.3s ease",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AddModal;
