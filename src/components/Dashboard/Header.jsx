
import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import Avatar from '../assets/Avatar.jpg';
import NotificationPopup from "./NotificationPopup";

const Header = () => {

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white py-4 px-6 space-y-4 md:space-y-0">
      {/* Search Bar with Background */}
      <div className="flex items-center bg-[#F6F8FB] rounded-lg px-4 py-2 w-full md:w-1/2 lg:w-1/6">
        <FaSearch className="text-dark mr-2" />
        <input
          type="text"
          placeholder="Search Here"
          className="bg-transparent outline-none text-gray-600 w-full"
        />
      </div>

      {/* User Profile and Notification */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon with Border */}
        <button className="bg-white border border-gray-300 p-2 rounded-lg" onClick={() => setIsNotificationOpen(true)} >
          <FaBell className="text-dark" />
        </button>

        {/* Vertical Divider */}
        <div className="h-6 border-l border-gray-300"></div>
        {/* User Profile */}
        <div className="flex items-center">
          <img
            src={Avatar}
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-2">
            <p className="text-base font-semibold">Moni Roy</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
      <NotificationPopup isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
    </div>
    
  );
};

export default Header;
