import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddMaintenanceModal = ({ isOpen, onClose }) => {
  const [dueDate, setDueDate] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#000000] opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-96 sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-xl leading-6 font-medium text-black mb-4">Edit Maintenance Detail</h3>
                <hr className="border-[#F4F4F4] mb-5" />
                <div className="mt-2 space-y-4">
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label htmlFor="maintenance-amount" className="block text-sm font-medium text-[#000000]">Maintenance Amount</label>
                      <input
                        type="text"
                        name="maintenance-amount"
                        id="maintenance-amount"
                        className="mt-1 block w-full text-[#000000] border border-gray-300 rounded-md shadow-sm py-2 px-3  sm:text-sm "
                        
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="penalty-amount" className="block text-sm font-medium  text-[#000000]">Penalty Amount</label>
                      <input
                        type="text"
                        name="penalty-amount"
                        id="penalty-amount"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                        
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Due Date</label>
                    <input type="date"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm" />
                  </div>
                  <div>
                        <label htmlFor="penalty-days" className="block text-sm font-medium text-[#000000]">
                            Penalty Applied After Day Selection
                        </label>
                        <select
                            id="penalty-days"
                            name="penalty-days"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 sm:text-sm rounded-md"
                            defaultValue=""
                        >
                            <option value="" disabled className='text-gray-600'>
                            select Penalty Applied After Day Selection
                            </option>
                            <option value="3">3 Days</option>
                            <option value="5">5 Days</option>
                            <option value="7">7 Days</option>
                        </select>
                        </div>

                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 flex sm:px-6 space-x-2">
          <button
                type="button"
                onClick={onClose}
                className="w-1/2 flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-[#202224] font-medium text-gray-700 hover:bg-gray-50 sm:text-sm"
                >
                Cancel
                </button>

                    <button
                    type="button"
                    className="w-1/2 flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium sm:text-sm transition-all"
                    style={{
                        background: "#F6F8FB", 
                        color:'#202224'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = "linear-gradient(to right, #FE512E, #F09619)";
                        e.target.style.color ='white';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = "#F6F8FB"; 
                        e.target.style.color ='#202224';
                    }}
                    >
                    Save 
                    </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMaintenanceModal;
