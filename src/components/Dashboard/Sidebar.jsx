// Sidebar.js
import { Link } from 'lucide-react';
import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaDollarSign, FaBuilding, FaExclamationTriangle, FaShieldAlt, FaUserShield, FaBullhorn, FaSignOutAlt, FaFileInvoiceDollar, FaMoneyBillWave, FaStickyNote } from 'react-icons/fa';

export default function Sidebar() {
  const [activePage, setActivePage] = useState('Dashboard');

  const handleItemClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-700 w-64 p-4">
      {/* Logo or Header */}
      <h1 className="text-3xl font-bold mb-8 text-[#00000] text-center">
        <span
          className="bg-clip-text text-transparent text-3xl font-bold"
          style={{
            backgroundImage: "linear-gradient(to right, #FE512E, #F09619)"
          }}
        >
          Dash
        </span>
        Stack
      </h1>

      {/* Divider Line */}
      <hr className="border-[#F4F4F4] mb-7" />

      {/* Menu items */}
      <nav className="flex-1 space-y-4">
        <MenuItem icon={<FaHome className="h-6 w-6" />} label="Dashboard" active={activePage === 'Dashboard'} onClick={() => handleItemClick('Dashboard')} />
        <MenuItem icon={<FaUserFriends className="h-6 w-6" />} label="Resident Management" active={activePage === 'Resident Management'} onClick={() => handleItemClick('Resident Management')} />
        
        {/* Financial Management Section */}
        <div>
          <MenuItem icon={<FaDollarSign className="h-6 w-6" />} label="Financial Management" active={activePage === 'Financial Management'} onClick={() => handleItemClick('Financial Management')} />
          {activePage === 'Financial Management' && (
            <div className="pl-6 space-y-2 text-gray-700">
              <Link to="/financial-management/income" onClick={() => handleItemClick('Income')}>
                <MenuItem icon={<FaFileInvoiceDollar className="h-5 w-5" />} label="Income" active={activePage === 'Income'} />
              </Link>
              <Link to="/financial-management/expense" onClick={() => handleItemClick('Expense')}>
                <MenuItem icon={<FaMoneyBillWave className="h-5 w-5" />} label="Expense" active={activePage === 'Expense'} />
              </Link>
              <Link to="/financial-management/note" onClick={() => handleItemClick('Note')}>
                <MenuItem icon={<FaStickyNote className="h-5 w-5" />} label="Note" active={activePage === 'Note'} />
              </Link>
            </div>
          )}
        </div>

        <MenuItem icon={<FaBuilding className="h-6 w-6" />} label="Facility Management" active={activePage === 'Facility Management'} onClick={() => handleItemClick('Facility Management')} />
        <MenuItem icon={<FaExclamationTriangle className="h-6 w-6" />} label="Complaint Tracking" active={activePage === 'Complaint Tracking'} onClick={() => handleItemClick('Complaint Tracking')} />
        <MenuItem icon={<FaShieldAlt className="h-6 w-6" />} label="Security Management" active={activePage === 'Security Management'} onClick={() => handleItemClick('Security Management')} />
        <MenuItem icon={<FaUserShield className="h-6 w-6" />} label="Security Guard" active={activePage === 'Security Guard'} onClick={() => handleItemClick('Security Guard')} />
        <MenuItem icon={<FaBullhorn className="h-6 w-6" />} label="Announcement" active={activePage === 'Announcement'} onClick={() => handleItemClick('Announcement')} />
      </nav>

      {/* Logout */}
      <div className="mt-4">
        <MenuItem icon={<FaSignOutAlt className="h-6 w-6 text-red-500" />} label="Logout" textColor="text-red-500" onClick={() => handleItemClick('Logout')} />
      </div>
    </div>
  );
}

function MenuItem({ icon, label, active, onClick, textColor }) {
  return (
    <div
      className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer
        ${active ? 'bg-gradient-to-r text-white' : 'hover:bg-transparent'}
        ${textColor || 'text-gray-700'}
      `}
      style={{
        backgroundImage: active ? 'linear-gradient(to right, #FE512E, #F09619)' : 'none',
      }}
      onClick={onClick}
    >
      {icon}
      <span className={`ml-2 ${active ? 'font-semibold' : 'font-normal'}`}>{label}</span>
    </div>
  );
}
