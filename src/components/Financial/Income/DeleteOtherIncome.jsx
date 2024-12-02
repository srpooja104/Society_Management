import React from 'react';

const DeleteOtherIncome = ({ onClose }) => {
  return (
   
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#000000] opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
          <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:align-middle">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Delete Gnesh Chaturthi?</h3>
              <hr className="border-[#F4F4F4] mb-4 mt-4" />
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you sure you want to delete this ?</p>
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
                className="w-1/2 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default DeleteOtherIncome;
