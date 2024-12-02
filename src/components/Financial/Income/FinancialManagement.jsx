import React, { useState } from 'react';
import Maintenance from './Maintenance';
import OtherIncome from './OtherIncome';

export default function FinancialManagement() {
  const [activeTab, setActiveTab] = useState('maintenance');

  const maintenanceRecords = [
    {
      id: "1",
      name: "Cody Fisher",
      unitNumber: "A 1001",
      date: "10/02/2024",
      status: "tenant",
      phoneNumber: "92524 34522",
      amount: 1000,
      paymentStatus: "pending",
      paymentMethod: "online",
    },
    {
      id: "2",
      name: "Esther Howard",
      unitNumber: "B 1002",
      date: "11/02/2024",
      status: "owner",
      phoneNumber: "92524 12365",
      amount: 1000,
      paymentStatus: "done",
      paymentMethod: "cash",
    },
  ];

  const otherIncomeRecords = [
    {
      id: "1",
      title: "Ganesh Chaturthi",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "15/07/2024",
      description: "Celebration of Ganesh Chaturthi.",
    },
    {
      id: "2",
      title: "Navratri",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "15/07/2024",
      description: "Celebration of Navratri.",
    },
    {
      id: "3",
      title: "Diwali",
      amountPerMember: 1800,
      totalMembers: 10,
      date: "10/10/2024",
      dueDate: "25/10/2024",
      description: "Celebration of Diwali.",
    },
    {
      id: "4",
      title: "Christmas",
      amountPerMember: 2000,
      totalMembers: 8,
      date: "15/12/2024",
      dueDate: "30/12/2024",
      description: "Celebration of Christmas.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 p-4">
    <div className="flex flex-col space-y-4 w-full">
        {/* Tab Buttons */}
        <div className="flex ml-10">
            <button
                className={`px-4 py-3 font-bold rounded-t-lg transition-colors duration-300 ${
                    activeTab === 'maintenance'
                        ? 'bg-gradient-to-r from-[#FE512E] to-[#F09619] text-white'
                        : 'bg-white text-gray-700 border-b-2 border-orange-500'
                }`}
                onClick={() => setActiveTab('maintenance')}
            >
                Maintenance
            </button>
            <button
                className={`px-6 py-3 font-bold rounded-t-lg transition-colors duration-300 ${
                    activeTab === 'otherIncome'
                        ? 'bg-gradient-to-r from-[#FE512E] to-[#F09619] text-white'
                        : 'bg-white text-gray-700 border-b-2 border-orange-500'
                }`}
                onClick={() => setActiveTab('otherIncome')}
            >
                Other Income
            </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'maintenance' && (
            <Maintenance maintenanceRecords={maintenanceRecords} />
        )}
        {activeTab === 'otherIncome' && (
            <OtherIncome otherIncomeRecords={otherIncomeRecords} />
        )}
    </div>
</div>

  );
}
