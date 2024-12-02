import React, { useState } from 'react';
import SetMaintenanceModal from './SetMaintenanceModal';
import ViewMaintenanceDetailsModal from './ViewMaintenanceDetailsModal';
import AddMaintenanceModal from './AddMaintenanceModal';
import EditMaintenanceModal from './EditMaintenanceModal';
import { Plus } from 'lucide-react';
import { MdEditSquare } from "react-icons/md";
import { TbArticleFilled } from "react-icons/tb";
import { BiSolidUserPin } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import Avatar from '../../assets/Avatar.jpg';
import { HiClock } from "react-icons/hi";
import { HiCash } from "react-icons/hi";
import { HiBadgeCheck } from "react-icons/hi";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { HiMiniEye } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";

const Maintenance = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isSetMaintenanceModalOpen, setIsSetMaintenanceModalOpen] = useState(false);
    const [selectedMaintenance, setSelectedMaintenance] = useState(null);

  const maintenanceData = [
    { id: 1, name: "Cody Fisher", unitletter:'A', unitNumber: "1001", date: "10/02/2024", status: "Tenant", phoneNumber: "92524 34522", amount: 1000, penalty: 0, paymentStatus: "Pending", paymentMethod: "Online" },
    { id: 2, name: "Esther Howard", unitletter:'B', unitNumber: "1002", date: "11/02/2024", status: "Owner", phoneNumber: "92524 12369", amount: 1000, penalty: 250, paymentStatus: "Done", paymentMethod: "Cash" },
    { id: 3, name: "Jenny Wilson", unitletter:'C', unitNumber: "1003", date: "12/02/2024", status: "Tenant", phoneNumber: "92569 34522", amount: 1000, penalty: 0, paymentStatus: "Pending", paymentMethod: "Online" },
  ];

  return (
    <div className="flex bg-[#FDF5FB]">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { title: 'Maintenance Amount', amount: '₹ 0', color: 'text-[#39973d]', icon: <TbArticleFilled /> },
                    { title: 'Penalty Amount', amount: '₹ 0', color: 'text-[#e74c3c]', icon: <HiCurrencyDollar /> },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md px-8 p-2 border-l-4 border-orange-600">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[#000000] text-md">{stat.title}</p>
                          <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              <button
                onClick={() => setIsSetMaintenanceModalOpen(true)}
                className=" text-white font-bold py-2 px-4 rounded-lg"
                style={{
                  background: "linear-gradient(to right, #FE512E, #F09619)",
                  transition: "background 0.3s ease",
              }}
              >
                Set Maintenance
              </button>
             
            </div>
          </div>

          <div className="bg-white rounded-b-lg shadow-md overflow-hidden">
            <div className="px-6 py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Maintenance Details</h3>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className=" text-white font-bold py-2 px-4 rounded flex items-center"
                  style={{
                    background: "linear-gradient(to right, #FE512E, #F09619)",
                    transition: "background 0.3s ease",
                  }}
                >
                  <Plus className="mr-2" size={16} />
                  Add Maintenance
                </button>
              </div>
            </div>
            <div className="overflow-x-auto px-6 py-1">
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-[#F1F0FF] rounded-t-md" >
                  <tr>
                    <th className="px-6 py-2 text-left text-sm font-medium text-[#000000]  tracking-wider">Name</th>
                    <th className="px-6 py-2  text-sm font-medium text-[#000000]  tracking-wider">Unit Number</th>
                    <th className="px-6 py-2  text-sm font-medium text-[#000000]  tracking-wider">Date</th>
                    <th className="px-6 py-2 text-sm font-medium text-[#000000]  tracking-wider">Status</th>
                    <th className="px-6 py-2 text-sm font-medium text-[#000000]  tracking-wider">Phone Number</th>
                    <th className="px-6 py-2 text-sm font-medium text-[#000000]  tracking-wider">Amount</th>
                    <th className="px-6 py-2  text-sm font-medium text-[#000000]  tracking-wider">Penalty</th>
                    <th className="px-6 py-2 text-sm font-medium text-[#000000]  tracking-wider">Payment Status</th>
                    <th className="px-6 py-2 text-sm font-medium text-[#000000]  tracking-wider">Payment</th>
                    <th className="px-6 py-2 text-sm font-medium text-[#000000]  tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {maintenanceData.map((item) => (
                    <tr key={item.id} >
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={Avatar} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap ">
                        <div className='flex items-center justify-center gap-2 text-center'>
                        <span className="w-6 h-6 rounded-full bg-[#F6F8FB] text-[#5678E9] font-semibold flex items-center justify-center">
                          {item.unitletter}
                        </span>  
                        <span>{item.unitNumber}</span>
                        </div>
                      </td>

                      <td className="px-6 py-2 whitespace-nowrap text-sm text-[#000000]">{item.date}</td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <span className={`w-32 py-2 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center ${
                          item.status === 'Tenant' ? 'bg-[#FFF1F8] text-[#EC4899]' : 'bg-[#F1F0FF] text-[#4F46E5]'
                        }`}>
                          {item.status === 'Tenant' ? (
                            <FaUser className="mr-2 text-sm" /> 
                          ) : (
                            <BiSolidUserPin className="mr-2 text-sm" /> 
                          )}
                          {item.status}
                        </span>
                      </td>

                      <td className="px-6 py-2 whitespace-nowrap text-sm text-[#000000]">{item.phoneNumber}</td>
                      <td className="px-6 py-2 whitespace-nowrap text-sm text-[#39973D] font-bold">₹ {item.amount}</td>
                      <td className="px-6 py-2 whitespace-nowrap w-32"> 
                          <span
                            className={`py-2 px-4 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center  ${
                              item.penalty === 0
                                ? 'bg-gray-100 text-gray-500 '
                                : item.penalty === 250
                                ? 'bg-red-600 text-white '
                                : 'bg-green-50 text-green-600 '
                            }`}
                           
                          >
                            {item.penalty === 0 ? (
                              <>
                                -- 
                              </>
                            ) : item.penalty === 250 ? (
                              <>
                                <div className="text-lg" /> 
                                 {item.penalty}
                              </>
                            ) : (
                              <> {item.penalty}</> 
                            )}
                          </span>
                        </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                          <span className={`w-32 py-2 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center ${
                            item.paymentStatus === 'Pending' ? 'bg-yellow-50 text-[#FFC313] ' : 'bg-green-50 text-[#39973D]'
                          }`}>
                            {item.paymentStatus === 'Pending' ? (
                              <>
                                <HiClock className="mr-2 text-lg" /> 
                                {item.paymentStatus}
                              </>
                            ) : (
                              <>
                                <HiBadgeCheck className="mr-2 text-lg" /> 
                                {item.paymentStatus}
                              </>
                            )}
                          </span>
                        </td>


                        <td className="px-6 py-2 whitespace-nowrap text-sm text-[#000000]">
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-[#000000]">
                        <span className={`w-32 py-2  inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center text-center ${
                          item.paymentMethod === 'Online' ? 'bg-blue-50 text-[#5678E9]' : 'bg-gray-100 text-[#000000]'
                        }`}>
                          {item.paymentMethod === 'Online' ? (
                            <>
                              < BiSolidCreditCardAlt className="mr-2 text-lg" /> 
                              {item.paymentMethod}
                            </>
                          ) : (
                            <>
                              <HiCash className="mr-2 text-lg" /> 
                              {item.paymentMethod}
                            </>
                          )}
                        </span>
                      </td>

                      </td>

                      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => {
                            setSelectedMaintenance(item);
                            setIsViewModalOpen(true);
                          }}
                          className="text-blue-600 bg-blue-50 px-2 py-2 rounded-md mr-2"
                        >
                          <HiMiniEye 
                          size={16} />
                        </button>
                        <SetMaintenanceModal
                onClose={() => setIsViewModalOpen(false)} 
              />
                        <button
                          onClick={() => {
                            setSelectedMaintenance(item);
                            setIsEditModalOpen(true);
                          }}
                          className="text-[#39973d] bg-blue-50 px-2 py-2 rounded-md  mr-2"
                        >
                          <MdEditSquare size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <SetMaintenanceModal isOpen={isSetMaintenanceModalOpen} onClose={() => setIsSetMaintenanceModalOpen(false)} />
      <ViewMaintenanceDetailsModal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} />
      <AddMaintenanceModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditMaintenanceModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
    </div>
  );
};

export default Maintenance;
