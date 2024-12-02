import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Avatar from  '../assets/Avatar.jpg';
import { TbArticleFilled } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BiSolidBuildings } from "react-icons/bi";
import { FaSquarePlus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { HiMiniEye } from "react-icons/hi2";
import AddModal from './AddModal';
import EditModal from './EditModal';
import ViewModal from './ViewModal';
import DeleteModal from './DeleteModal';
import EditComplaintModal from './EditComplaintModal';
import CustomDropdown from './CustomDropdown';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditComplaintOpen, setIsEditComplainOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Balance',
        data: [10000, 15000, 20000, 18000, 25000, 30000, 28000, 35000, 40000, 45000, 50000, 55000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  };


  const complaints = [
    { id: 1, name: 'Evelyn Harper', complaint: 'Unethical Behavior', date: '01/02/2024', priority: 'Medium', status: 'Open' },
    { id: 2, name: 'Evelyn Harper', complaint: 'Unethical Behavior', date: '01/02/2024', priority: 'Low', status: 'Pending' },
    { id: 3, name: 'Evelyn Harper', complaint: 'Unethical Behavior', date: '01/02/2024', priority: 'High', status: 'Solve' },
    { id: 3, name: 'Evelyn Harper', complaint: 'Unethical Behavior', date: '01/02/2024', priority: 'High', status: 'Solve' },
    { id: 3, name: 'Evelyn Harper', complaint: 'Unethical Behavior', date: '01/02/2024', priority: 'High', status: 'Solve' },
  ];

  const importantNumbers = [
    { id: 1, name: 'Joanna Smith', phone: '+91 98765 43210', work: 'Plumber' },
    { id: 2, name: 'Michael Johnson', phone: '+91 98765 43211', work: 'Electrician' },
    { id: 3, name: 'Sarah Williams', phone: '+91 98765 43212', work: 'Security' },
    { id: 3, name: 'Sarah Williams', phone: '+91 98765 43212', work: 'Security' },
  ];

  const pendingMaintenances = Array(6).fill({
    id: 1,
    name: 'Roger Lubin',
    amount: 5000,
  });

  const activities = [
    { id: 1, name: "Society Meeting", date: "24-09-2024", time: "10:00 AM To 11:00 AM", color: "blue" },
    { id: 2, name: "Holi Festival", date: "24-09-2024", time: "2:00 PM To 4:00 PM", color: "green" },
    { id: 3, name: "Ganesh Chaturthi", date: "24-09-2024", time: "5:00 PM To 6:00 PM", color: "purple" },
    { id: 4, name: "Navratri Festival", date: "24-09-2024", time: "7:00 PM To 9:00 PM", color: "red" },
    { id: 5, name: "Annual Gathering", date: "24-09-2024", time: "6:00 PM To 8:00 PM", color: "yellow" },
  ];

  return (
    <div className=" bg-[#F6F8FB] p-4 md:p-6">
      <div className="mx-auto max-w-8xl space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Total Balance', amount: '₹ 2,22,520', color: 'bg-orange-100',icon_color:'text-[#ff6a00]',icon:<TbArticleFilled /> },
              { title: 'Total Income', amount: '₹ 55,000', color: 'bg-green-100',icon_color:'text-[#39973d]', icon:<HiCurrencyDollar /> },
              { title: 'Total Expense', amount: '₹ 20,550', color: 'bg-sky-100', icon_color:'text-[#869ff3]', icon:<HiCurrencyDollar/>},
              { title: 'Total Unit', amount: '₹ 20,550', color: 'bg-pink-100', icon_color:'text-[#eb37c3]', icon:<BiSolidBuildings /> },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.amount}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-md`}>
                    <div className={`${stat.icon_color} text-2xl` }>{stat.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Graph and Important Numbers */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow lg:col-span-2">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-lg font-semibold">Total Balance</h2>
              <CustomDropdown />
            </div>
            <div className="h-[300px]">
              <Line data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-lg font-semibold">Important Numbers</h2>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 rounded-md  px-2 py-2 text-sm text-white hover:from-orange-600 hover:to-orange-700"
                style={{
                  background: "linear-gradient(to right, #FE512E, #F09619)",
                  transition: "background 0.3s ease",
                }}
              >
                <FaSquarePlus className="text-base" />
                <span className='font-bold'>Add</span>
              </button>

            </div>
            <div className="max-h-[300px] overflow-y-auto space-y-4" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#000000 #fffff', /* thumb color and track color for Firefox */
        }}>
            <div className="grid gap-4">
              {importantNumbers.map((number) => (
                <div 
                  key={number.id} 
                  className="flex items-center justify-between rounded-lg border border-gray-100 p-4 "
                >
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Name:</span> 
                      <span className="text-dark"> {number.name}</span>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Ph Number:</span> 
                      <span className="text-dark"> {number.phone}</span>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Work:</span> 
                      <span className="text-dark"> {number.work}</span>
                    </p>
                  </div>
 
                  {/* Divider */}
                  <div className="h-16 w-px bg-gray-100 mx-4"></div>
                  
                  {/* Icons */}
                  <div className="flex gap-2">
                  <button 
                      onClick={() => setIsDeleteModalOpen(true)}
                      className=" text-red-600"
                    >
                      <RiDeleteBin5Fill  className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => setIsEditModalOpen(true)}
                      className="text-[#39973d]"
                    >
                      <MdEditSquare  className="h-5 w-5" />
                    </button>
                    
                  </div>
                </div>
              ))}
              
            </div>
            

            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow ">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-lg font-semibold">Pending Maintenances</h2>
              <button className="text-sm text-blue-600 hover:underline">View all</button>
            </div>
            <div className="max-h-[300px] space-y-4 overflow-y-auto" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#000000 #fffff', /* thumb color and track color for Firefox */
        }}>
              {pendingMaintenances.map((maintenance, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                      <img src={Avatar} alt={maintenance.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">{maintenance.name}</p>
                      <p className="text-sm text-gray-500">Maintenance Pending</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">₹{maintenance.amount}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Complaint List and Upcoming Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="rounded-lg bg-white shadow lg:col-span-3">
            <div className="flex items-center justify-between py-4 px-6">
              <h2 className="text-lg font-semibold">Complaint List</h2>
              <CustomDropdown/>
            </div>
            <div className="p-3 max-h-[300px] overflow-y-auto space-y-4" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#000000 #fffff',}}>
              <table className="w-full text-center ">
                <thead className="bg-[#F1F0FF] rounded-md" >
                  <tr>
                    <th className="px-6 py-3 text-lg font-semibold text-dark ">Complainer Name</th>
                    <th className="px-6 py-3 text-lg font-semibold text-dark ">Complaint Name</th>
                    <th className="px-6 py-3 text-lg font-semibold text-dark ">Date</th>
                    <th className="px-6 py-3 text-lg font-semibold text-dark ">Priority</th>
                    <th className="px-6 py-3 text-lg font-semibold text-dark ">Status</th>
                    <th className="px-6 py-3 text-lg font-semibold text-dark ">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {complaints.map((complaint) => (
                    <tr key={complaint.id}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={Avatar} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{complaint.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{complaint.complaint}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{complaint.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`w-24 h-8 inline-flex items-center justify-center text-sm leading-5 font-semibold rounded-full text-white
                          ${complaint.priority === 'High' ? 'bg-red-600 ' : 
                            complaint.priority === 'Medium' ? 'bg-blue-600 ' : 
                            'bg-green-600 '}`}>
                          {complaint.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <span className={`w-24 h-8 px-2 inline-flex items-center justify-center text-sm leading-5 font-semibold rounded-full 
                          ${complaint.status === 'Open' ? 'bg-blue-100 text-blue-500' : 
                            complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-500' : 
                            'bg-green-100 text-green-500'}`}>
                          {complaint.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2 justify-center">
                        <button
                            onClick={() => {
                              setSelectedComplaint(complaint);
                              setIsEditComplainOpen(true);
                            }}
                            className="text-[#39973d]  bg-blue-50 p-1.5 rounded-md"
                          >
                            <MdEditSquare className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedComplaint(complaint);
                              setIsViewModalOpen(true);
                            }}
                            className="text-blue-600 hover:text-blue-900 bg-blue-50 p-1.5 rounded-md"
                          >
                            <HiMiniEye className="h-5 w-5" />
                          </button>
                         
                          <button
                            onClick={() => {
                              setSelectedComplaint(complaint);
                              setIsDeleteModalOpen(true);
                            }}
                            className="text-red-600 hover:text-red-900 bg-blue-50 p-1.5 rounded-md"
                          >
                            <RiDeleteBin5Fill className="h-5 w-5"/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-lg font-semibold">Upcoming Activity</h2>
        <CustomDropdown/>
      </div>
      <div className="max-h-[300px] overflow-y-auto"   style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#000000 #fffff', /* thumb color and track color for Firefox */
        }}>
        {activities.map((activity, index) => (
          <div key={activity.id} className={`flex justify-between items-center gap-4 p-2 ${index < activities.length - 1 ? 'border-b' : ''} border-gray-200`}>
            {/* Left Section: Initial Icon and Activity Info */}
            <div className="flex items-start gap-4">
              <div className={`rounded-full bg-${activity.color}-100 px-4 py-2 flex items-center justify-center`}>
                <span className={`text-lg font-bold text-${activity.color}-500`}>{activity.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium text-gray-700">{activity.name}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
            {/* Right Section: Date */}
            <p className="text-sm text-gray-500">{activity.date}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>


        <AddModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
        <ViewModal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} selectedComplaint={selectedComplaint} />
        <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
        <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
        <EditComplaintModal isOpen={isEditComplaintOpen} onClose={() => setIsEditComplainOpen(false)} />

     
    </div>
  );
};

export default DashboardPage;