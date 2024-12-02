// import React from "react";
// import Avatar from '../assets/Avatar.jpg';
// import { ChevronDown, Bell } from 'lucide-react';
// import { FaCalendarAlt } from 'react-icons/fa';

// const ResidentManagement = () => {
//     return (
//         <div className="flex-1 p-8 bg-white">
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-semibold">Resident Tenant and Owner Details</h2>
//                 <button className="bg-orange-500 text-white px-4 py-2 rounded">+ Add New Resident Details</button>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-lg shadow">
//                 <table className="w-full text-left">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4">Full Name</th>
//                             <th className="py-2 px-4">Unit Number</th>
//                             <th className="py-2 px-4">Unit Status</th>
//                             <th className="py-2 px-4">Resident Status</th>
//                             <th className="py-2 px-4">Phone Number</th>
//                             <th className="py-2 px-4">Member</th>
//                             <th className="py-2 px-4">Vehicle</th>
//                             <th className="py-2 px-4">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[
//                             { name: "Evelyn Harper",unitletter:'A', unit: "1001", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 1, vehicle: 4 },
//                             { name: "-",unitletter:'B', unit: "1002", unitStatus: "Vacate", residentStatus: "--", phone: "--", member: "-", vehicle: "-" },
//                             { name: "Evelyn Harper",unitletter:'C', unit: "1003", unitStatus: "Occupied", residentStatus: "Owner", phone: "97587 85828", member: 1, vehicle: 4 },
//                             { name: "Evelyn Harper",unitletter:'D', unit: "1004", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 4, vehicle: 2 },
//                             { name: "-",unitletter:'E', unit: "2001", unitStatus: "Vacate", residentStatus: "--", phone: "--", member: "-", vehicle: "-" },
//                             { name: "Robert Fax",unitletter:'F', unit: "2002", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 3, vehicle: 2 },
//                             { name: "Evelyn Harper",unitletter:'G', unit: "2003", unitStatus: "Occupied", residentStatus: "Owner", phone: "97587 85828", member: 5, vehicle: 6 },
//                             { name: "Evelyn Harper", unitletter:'H',unit: "2004", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 6, vehicle: 3 },
//                             { name: "-",unitletter:'I', unit: "3001", unitStatus: "Vacate", residentStatus: "--", phone: "--", member: "-", vehicle: "-" },
//                             { name: "Evelyn Harper",unitletter:'A',unit: "3002", unitStatus: "Occupied", residentStatus: "Owner", phone: "97587 85828", member: 3, vehicle: 3 },
//                             { name: "Evelyn Harper",unitletter:'I', unit: "3002", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 3, vehicle: 2 }
//                         ].map((resident, index) => (
//                             <tr key={index} className="hover:bg-gray-100">
//                                 <td className="py-2 px-4 flex items-center">
//                                     <img
//                                         src={Avatar}
//                                         alt="User Profile"
//                                         className="w-8 h-8 rounded-full mr-2"
//                                     />
//                                     {resident.name}
//                                 </td>
//                                 <td className="py-2 px-4">{resident.unit}</td>
//                                 <td className="py-2 px-4">
//                                     <span className={`px-2 py-1 rounded text-white ${resident.unitStatus === "Occupied" ? "bg-teal-400" : "bg-pink-200"}`}>
//                                         {resident.unitStatus}
//                                     </span>
//                                 </td>
//                                 <td className="py-2 px-4">
//                                     <span className={`px-2 py-1 rounded ${resident.residentStatus === "Tenant" ? "bg-pink-100 text-pink-600" : "bg-purple-100 text-purple-600"}`}>
//                                         {resident.residentStatus}
//                                     </span>
//                                 </td>
//                                 <td className="py-2 px-4">{resident.phone}</td>
//                                 <td className="py-2 px-4">{resident.member}</td>
//                                 <td className="py-2 px-4">{resident.vehicle}</td>
//                                 <td className="py-2 px-4">
//                                     <button className="text-green-500 px-2">✓</button>
//                                     <button className="text-blue-500 px-2">👁️</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ResidentManagement;












import React from "react";
import Avatar from '../assets/Avatar.jpg';
import { MdOutlineSensorOccupied } from "react-icons/md";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";

const ResidentManagement = () => {
    return (
        <div className="flex-1 p-8 bg-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Resident Tenant and Owner Details</h2>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">+ Add New Resident Details</button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="py-2 px-4">Full Name</th>
                            <th className="py-2 px-4">Unit Number</th>
                            <th className="py-2 px-4">Unit Status</th>
                            <th className="py-2 px-4">Resident Status</th>
                            <th className="py-2 px-4">Phone Number</th>
                            <th className="py-2 px-4">Member</th>
                            <th className="py-2 px-4">Vehicle</th>
                            <th className="py-2 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: "Evelyn Harper", unitletter: 'A', unit: "1001", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 1, vehicle: 4 },
                            { name: "-", unitletter: 'B', unit: "1002", unitStatus: "Vacate", residentStatus: "--", phone: "--", member: "-", vehicle: "-" },
                            { name: "Evelyn Harper", unitletter: 'C', unit: "1003", unitStatus: "Occupied", residentStatus: "Owner", phone: "97587 85828", member: 1, vehicle: 4 },
                            { name: "Evelyn Harper", unitletter: 'D', unit: "1004", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 4, vehicle: 2 },
                            { name: "-", unitletter: 'E', unit: "2001", unitStatus: "Vacate", residentStatus: "--", phone: "--", member: "-", vehicle: "-" },
                            { name: "Robert Fax", unitletter: 'F', unit: "2002", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 3, vehicle: 2 },
                            { name: "Evelyn Harper", unitletter: 'G', unit: "2003", unitStatus: "Occupied", residentStatus: "Owner", phone: "97587 85828", member: 5, vehicle: 6 },
                            { name: "Evelyn Harper", unitletter: 'H', unit: "2004", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 6, vehicle: 3 },
                            { name: "-", unitletter: 'I', unit: "3001", unitStatus: "Vacate", residentStatus: "--", phone: "--", member: "-", vehicle: "-" },
                            { name: "Evelyn Harper", unitletter: 'A', unit: "3002", unitStatus: "Occupied", residentStatus: "Owner", phone: "97587 85828", member: 3, vehicle: 3 },
                            { name: "Evelyn Harper", unitletter: 'I', unit: "3002", unitStatus: "Occupied", residentStatus: "Tenant", phone: "97587 85828", member: 3, vehicle: 2 }
                        ].map((resident, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 flex items-center">
                                    <img
                                        src={Avatar}
                                        alt="User Profile"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    {resident.name || '-'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="flex items-center justify-center gap-4 text-center">
                                        <span className="w-8 h-4 rounded-full bg-[#F6F8FB] text-[#5678E9] font-semibold flex items-center justify-center">
                                            {resident.unitletter}
                                        </span>
                                        {resident.unit}
                                    </span>
                                </td>
                                <td className="py-2 px-4 flex items-center gap-2">
                                    {resident.unitStatus === "Occupied" ? <MdOutlineSensorOccupied className="text-teal-500" /> : <BiSolidDoughnutChart className="text-purple-500" />}
                                    <span className={`px-2 py-1 rounded-2xl text-white ${resident.unitStatus === "Occupied" ? "bg-teal-400" : "bg-purple-200"}`}>
                                        {resident.unitStatus}
                                    </span>
                                </td>
                                <td className="py-2 px-4"><CgProfile />
                                    <span className={`px-2 py-1 rounded-2xl ${resident.residentStatus === "Tenant" ? "bg-purple-100 text-purple-600" : "bg-purple-100 text-purple-600"}`}>
                                        {resident.residentStatus || '--'}
                                    </span>
                                </td>
                                <td className="py-2 px-4">{resident.phone || '--'}</td>
                                <td className="py-2 px-4">{resident.member || '-'}</td>
                                <td className="py-2 px-4">{resident.vehicle || '-'}</td>
                                <td className="py-2 px-4">
                                    <button className="text-green-500 px-2">✓</button>
                                    <button className="text-blue-500 px-2">👁️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResidentManagement;





















