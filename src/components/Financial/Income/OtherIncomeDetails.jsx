import React from 'react';

import { FaUser } from "react-icons/fa6";
import { BiSolidUserPin } from "react-icons/bi";
import { HiCash } from "react-icons/hi";
import { BiSolidCreditCardAlt } from "react-icons/bi";

interface Member {
  unitNumber: string;
  paymentDate: string;
  status: 'Owner' | 'Tenant';
  phoneNumber: string;
  amount: number;
  paymentMethod: 'Cash' | 'Online';
}

const members = [
  { unitletter:'A',unitNumber: '1001', paymentDate: '10/07/2024', status: 'Owner', phoneNumber: '92524 12365', amount: 1000, paymentMethod: 'Cash' },
  { unitletter:'B',unitNumber: '1002', paymentDate: '11/07/2024', status: 'Tenant', phoneNumber: '92469 12865', amount: 1000, paymentMethod: 'Online' },
  { unitletter:'C',unitNumber: '1003', paymentDate: '12/07/2024', status: 'Owner', phoneNumber: '92434 2365', amount: 1000, paymentMethod: 'Cash' },
  { unitletter:'D',unitNumber: '1004', paymentDate: '13/07/2024', status: 'Tenant', phoneNumber: '93536 13448', amount: 1000, paymentMethod: 'Online' },
  { unitletter:'E',unitNumber: '2001', paymentDate: '14/07/2024', status: 'Owner', phoneNumber: '92328 23565', amount: 1000, paymentMethod: 'Cash' },
  {unitletter:'F', unitNumber: '2002', paymentDate: '15/07/2024', status: 'Tenant', phoneNumber: '92524 12365', amount: 1000, paymentMethod: 'Online' },
  { unitletter:'G',unitNumber: '2003', paymentDate: '16/07/2024', status: 'Owner', phoneNumber: '92484 12025', amount: 1000, paymentMethod: 'Cash' },
  { unitletter:'H',unitNumber: '2004', paymentDate: '17/07/2024', status: 'Tenant', phoneNumber: '921021 12425', amount: 1000, paymentMethod: 'Online' },
  { unitletter:'I',unitNumber: '3001', paymentDate: '18/07/2024', status: 'Owner', phoneNumber: '92738 14235', amount: 1000, paymentMethod: 'Online' },
  { unitletter:'J',unitNumber: '3002', paymentDate: '19/07/2024', status: 'Tenant', phoneNumber: '92830 12329', amount: 1000, paymentMethod: 'Cash' },
  { unitletter:'K',unitNumber: '3003', paymentDate: '20/07/2024', status: 'Owner', phoneNumber: '92308 12389', amount: 1000, paymentMethod: 'Online' },
];

export default function OtherIncomeDetails() {
  return (
    <div className=" flex bg-[#FDF5FB]">
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 ">
              <h3 className="text-lg font-semibold text-gray-800">Ganesh Chaturthi Participator Member List</h3>
            </div>
            <div className="overflow-x-auto px-6 py-1">
              <table className="min-w-full rounded-t-lg divide-y divide-gray-200">
                <thead  className="bg-[#F1F0FF] ">
                  <tr >
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]  tracking-wider">Unit Number</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]  tracking-wider">Payment Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]  tracking-wider">Tenant/Owner Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]  tracking-wider">Phone Number</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]  tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]  tracking-wider">Payment</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {members.map((member, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <span className="w-6 h-6 mr-2 rounded-full bg-[#F6F8FB] text-[#5678E9] font-semibold flex items-center justify-center">
                          {member.unitletter}
                        </span>
                          <div className="text-sm font-medium text-gray-900">{member.unitNumber}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.paymentDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`w-32 py-2 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center ${
                          member.status === 'Tenant' ? 'bg-[#FFF1F8] text-[#EC4899]' : 'bg-[#F1F0FF] text-[#4F46E5]'
                        }`}>
                          {member.status === 'Tenant' ? (
                            <FaUser className="mr-2 text-sm" /> 
                          ) : (
                            <BiSolidUserPin className="mr-2 text-sm" /> 
                          )}
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.phoneNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#39973D]">₹ {member.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#000000]">
                        <span className={`w-32 py-2  inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center text-center ${
                          member.paymentMethod === 'Online' ? 'bg-blue-50 text-[#5678E9]' : 'bg-gray-100 text-[#000000]'
                        }`}>
                          {member.paymentMethod === 'Online' ? (
                            <>
                              < BiSolidCreditCardAlt className="mr-2 text-lg" /> 
                              {member.paymentMethod}
                            </>
                          ) : (
                            <>
                              <HiCash className="mr-2 text-lg" /> 
                              {member.paymentMethod}
                            </>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </main>

    </div>
  );
}