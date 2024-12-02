import React from 'react';

const CreateIncomeModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Create Other Income</h2>
                <hr className="border-[#F4F4F4] mb-4 mt-4" />
                <form>
                    <div className="mb-4">
                        <label className="block mb-1">Title<span className='text-red-500'>*</span></label>
                        <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter Title" />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="w-1/2">
                            <label className="block mb-1">Date<span className='text-red-500'>*</span></label>
                            <input type="date" className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="w-1/2">
                            <label className="block mb-1">Due Date<span className='text-red-500'>*</span></label>
                            <input type="date" className="w-full border rounded px-3 py-2" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Description<span className='text-red-500'>*</span></label>
                        <textarea className="w-full border rounded px-3 py-2" placeholder="Enter Description"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Amount<span className='text-red-500'>*</span></label>
                        <input type="number" className="w-full border rounded px-3 py-2" placeholder="Enter Amount" />
                    </div>
                    <div className="mt-4 flex space-x-2 ">
            <button
                type="button"
                onClick={onClose}
                className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
              >
                Cancel
              </button>
              <button
              type="button"
              className="w-1/2 inline-flex justify-center rounded-md text-gray-700 bg-[#F6F8FB] px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] hover:text-white"
              style={{
                transition: "background 0.3s ease",
              }}
            >
              Save
            </button>

              
            </div>
                </form>
            </div>
        </div>
    );
};

export default CreateIncomeModal;
