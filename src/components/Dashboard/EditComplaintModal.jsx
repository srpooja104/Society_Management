import React, { useState } from 'react';
import { BsRecordCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const EditComplaintModal = ({ isOpen, onClose }) => {
  const [complainerName, setComplainerName] = useState('');
  const [complaintName, setComplaintName] = useState('');
  const [description, setDescription] = useState('');
  const [wing, setWing] = useState('');
  const [unit, setUnit] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Open');
  const navigate = useNavigate();

  const handleSave = async () => {
    const complaintData = {
      complainerName,
      complaintName,
      description,
      wing,
      unit,
      priority,
      status,
    };

    try {
      const response = await fetch('http://localhost:8080/admin/complaints/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(complaintData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Complaint created successfully:', result);
      navigate('/E');
      onClose(); // Close the modal on success
    } catch (error) {
      console.error('Failed to create complaint:', error);
    }
  };

  const renderSelectableButton = (options, selectedValue, setSelectedValue) =>
    options.map((label) => (
      <button
        key={label}
        type="button"
        onClick={() => setSelectedValue(label)}
        className={`flex-1 flex items-center justify-center px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 ${selectedValue === label
            ? 'border-orange-500 text-orange-500'
            : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
          }`}
      >
        <BsRecordCircle className="mr-2" />
        {label}
      </button>
    ));

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-[#000000] opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:align-middle">
            <div className="bg-white px-6 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Edit Complaint</h3>
              <hr className="border-[#F4F4F4] my-4" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complainer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={complainerName}
                  onChange={(e) => setComplainerName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Evelyn Harper"
                />

                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
                  Complaint Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={complaintName}
                  onChange={(e) => setComplaintName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Unethical Behavior"
                />

                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter description"
                  rows="3"
                ></textarea>

                <div className="flex space-x-2 mt-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Wing</label>
                    <input
                      type="text"
                      value={wing}
                      onChange={(e) => setWing(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="A"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                    <input
                      type="text"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="101"
                    />
                  </div>
                </div>

                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Priority</label>
                <div className="flex space-x-2">
                  {renderSelectableButton(['High', 'Medium', 'Low'], priority, setPriority)}
                </div>

                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Status</label>
                <div className="flex space-x-2">
                  {renderSelectableButton(['Open', 'Pending', 'Solved'], status, setStatus)}
                </div>
              </div>
            </div>
            <div className="px-6 py-3 flex space-x-2 bg-gray-50">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="w-1/2 inline-flex justify-center rounded-md bg-gradient-to-r from-[#FE512E] to-[#F09619] text-white px-4 py-2 shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditComplaintModal;
