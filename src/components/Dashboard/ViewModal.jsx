import React from 'react';
import Avatar from '../assets/Avatar.jpg';
import { XIcon } from '@heroicons/react/solid'; 

const ViewModal = ({ isOpen, onClose, selectedComplaint }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#000000] opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
          <div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:align-middle">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={onClose}
            >
              <XIcon className="h-4 w-4 text-[#00000]" /> 
            </button>
            <div className="bg-white px-6 py-5">
              <h3 className="text-lg font-medium text-gray-900 mb-4">View Complaint</h3>
              <div className="flex items-center mb-4">
                <img
                  src={selectedComplaint.image || Avatar}
                  alt="User"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900">{selectedComplaint.name}</p>
                  <p className="text-sm text-gray-500">{selectedComplaint.date}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-md text-gray-400">Request Name</p>
                <span className="text-md text-gray-900">{selectedComplaint.requestName || 'Unethical Behaviour'}</span>
                <p className="text-md text-gray-400 mt-2">Description</p>
                <span className="text-md text-gray-900">{selectedComplaint.description || 'Offering, giving, receiving, and soliciting value to influence actions.'}</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Wing</span>
                  <span className="font-medium text-blue-900">A{selectedComplaint.wing}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Unit</span>
                  <span className="font-medium text-gray-900">1002{selectedComplaint.unit}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Priority</span>
                  <span className={`px-2 py-1 rounded-2xl text-white ${selectedComplaint.priority === 'High' ? 'bg-red-500' : selectedComplaint.priority === 'Medium' ? 'bg-blue-500' : 'bg-green-500'}`}>
                    {selectedComplaint.priority}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className="px-2 py-1 rounded-2xl bg-blue-100 text-blue-700">{selectedComplaint.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ViewModal;
