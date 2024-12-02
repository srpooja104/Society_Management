import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Notification from '../assets/notification.png'

const NotificationPopup = ({ notifications , isOpen, onClose }) => {
    
    if (!isOpen) return null;

    return (
        <div className="fixed top-16 right-20 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Notification</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <FaTimes />
                </button>
            </div>

            <div className="mt-4 space-y-4">
                {notifications && notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="p-3 border rounded-md shadow-sm bg-gray-50 flex flex-col"
                        >
                            <div className="flex items-center">
                                <img
                                    src={notification.userImage}
                                    alt="User"
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <h3 className="font-medium">{notification.userName} ({notification.unit})</h3>
                                    <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">{notification.message}</p>

                            <div className="mt-2 flex justify-between">
                                <button className="px-4 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
                                    Accept
                                </button>
                                <button className="px-4 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">
                                    Decline
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-4 px-4">
                        <img src={Notification} alt="No notifications" className="mx-auto w-full h-full" />
                    </div>
                )}
            </div>
        </div>
    );
};
export default NotificationPopup;
