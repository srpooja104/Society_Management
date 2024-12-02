import React from 'react';
import Avatar from '../assets/Avatar.jpg';
import { XIcon } from '@heroicons/react/solid';
import { FaUser } from "react-icons/fa6";
import { BiSolidUserPin } from "react-icons/bi";
import { HiClock } from "react-icons/hi";
import { HiCash } from "react-icons/hi";
import { HiBadgeCheck } from "react-icons/hi";
import { BiSolidCreditCardAlt } from "react-icons/bi";

const ViewMaintenanceDetailsModal = ({ isOpen, onClose }) => {
  const maintenanceData = [
    { id: 1, name: "Cody Fisher", unitletter: 'A', unitNumber: "1001", date: "10/02/2024", status: "Tenant", phoneNumber: "92524 34522", amount: 1000, penalty: 0, paymentStatus: "Pending", paymentMethod: "Online" },
    { id: 2, name: "Esther Howard", unitletter: 'B', unitNumber: "1002", date: "11/02/2024", status: "Owner", phoneNumber: "92524 12369", amount: 1000, penalty: 250, paymentStatus: "Done", paymentMethod: "Cash" },
    { id: 3, name: "Jenny Wilson", unitletter: 'C', unitNumber: "1003", date: "12/02/2024", status: "Tenant", phoneNumber: "92569 34522", amount: 1000, penalty: 0, paymentStatus: "Pending", paymentMethod: "Online" },
  ];

  const data = maintenanceData[0];

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#000000] opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-5 relative">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-left">View Maintenance Details</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={onClose}
              >
                <XIcon className="h-4 w-4 text-black" />
              </button>
            </div>
            <hr className="border-[#F4F4F4] mb-5" />

            <div className="flex items-center space-x-4 mb-4">
              <img
                src={Avatar}
                alt="User"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold text-[#202224]">{data.name}</h3>
                <p className="text-gray-500 text-sm">{data.date}</p>
              </div>
            </div>

            <div className="grid grid-cols-9 gap-4 text-sm items-center">

              <div className="col-span-2 flex flex-col items-center">
                <p className="text-gray-500">Wing</p>
                <p className="font-medium flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[#F6F8FB] text-[#5678E9] font-semibold flex items-center justify-center">
                    {data.unitletter}
                  </span> 
                </p>
              </div>

              <div className="col-span-2 border-l border-gray-200 pl-4 flex flex-col items-center">
                <p className="text-gray-500">Unit</p>
                <p className="font-medium">{data.unitNumber}</p>
              </div>

              <div className="col-span-3 border-l border-gray-200 pl-4 flex flex-col items-center">
                <p className="text-gray-500">Status</p>
                <span className={`w-20 py-1 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center ${
                  data.status === 'Tenant' ? 'bg-[#FFF1F8] text-[#EC4899]' : 'bg-[#F1F0FF] text-[#4F46E5]'
                }`}>
                  {data.status === 'Tenant' ? <FaUser className="mr-2 text-sm" /> : <BiSolidUserPin className="mr-2 text-sm" />}
                  {data.status}
                </span>
              </div>

              <div className="col-span-2 border-l border-gray-200 pl-4 flex flex-col items-center">
                <p className="text-gray-500">Amount</p>
                <p className="font-medium text-green-600">₹ {data.amount}</p>
              </div>


              <div className="col-span-2 flex flex-col items-center">
                <p className="text-gray-500">Penalty</p>
                <span className={`w-16 py-1 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center ${
                  data.penalty === 0 ? 'bg-gray-100 text-gray-500' : data.penalty === 250 ? 'bg-red-600 text-white' : 'bg-green-50 text-green-600'
                }`}>
                  {data.penalty === 0 ? '--' : data.penalty}
                </span>
              </div>

              <div className="col-span-3 border-l border-gray-200 pl-4 flex flex-col items-center">
                <p className="text-gray-500">Status</p>
                <span className={`px-3 py-1 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center ${
                  data.paymentStatus === 'Pending' ? 'bg-yellow-50 text-[#FFC313]' : 'bg-green-50 text-[#39973D]'
                }`}>
                  {data.paymentStatus === 'Pending' ? <HiClock className="mr-2 text-lg" /> : <HiBadgeCheck className="mr-2 text-lg" />}
                  {data.paymentStatus}
                </span>
              </div>

              <div className="col-span-3 border-l border-gray-200 pl-4 flex flex-col items-center">
                <p className="text-gray-500">Payment</p>
                <span className={`px-3 py-1 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center ${
                  data.paymentMethod === 'Online' ? 'bg-blue-50 text-[#5678E9]' : 'bg-gray-100 text-[#000000]'
                }`}>
                  {data.paymentMethod === 'Online' ? <BiSolidCreditCardAlt className="mr-2 text-lg" /> : <HiCash className="mr-2 text-lg" />}
                  {data.paymentMethod}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMaintenanceDetailsModal;
