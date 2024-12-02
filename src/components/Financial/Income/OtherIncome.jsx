import React, { useState } from "react";
import OtherIncomeDetails from './OtherIncomeDetails'
import AddOtherIncome from "./CreateIncomeModal";
import DeleteOtherIncome from "./DeleteOtherIncome";
import EditOtherIncome from "./EditOtherIncome";
import { useNavigate } from 'react-router-dom';

function Popup({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        {children}
        <div className="text-right mt-4">
          {/* <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Close
          </button> */}
        </div>
    </div>
  );
}



export default function OtherIncome() {

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const [incomeItems, setIncomeItems] = useState([
    {
      id: 1,
      title: "Ganesh Chaturthi",
      amountPerMember: 1500,
      totalMembers: 50,
      date: "2024-07-01",
      dueDate: "2024-07-15",
      description: "Celebration fund for Ganesh Chaturthi",
      status: "Pending",
    },
    {
      id: 2,
      title: "Diwali Celebration",
      amountPerMember: 2000,
      totalMembers: 80,
      date: "2024-10-10",
      dueDate: "2024-11-01",
      description: "Contributions for Diwali event decorations and snacks",
      status: "Paid",
    },
    {
      id: 3,
      title: "New Year Party",
      amountPerMember: 2500,
      totalMembers: 100,
      date: "2024-12-01",
      dueDate: "2024-12-25",
      description: "Funds for organizing New Year celebration party",
      status: "Pending",
    },
    {
      id: 4,
      title: "Annual Maintenance",
      amountPerMember: 3000,
      totalMembers: 150,
      date: "2024-06-01",
      dueDate: "2024-08-10",
      description: "Annual maintenance charges for the society",
      status: "Paid",
    },
  ]);
  
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/other-income-details'); 
};
  const togglePopup = (action, item = null) => {
    setCurrentItem(item);
    switch (action) {
      case 'add':
        setIsAddOpen(true);
        break;
      case 'edit':
        setIsEditOpen(true);
        break;
      case 'view':
        setIsViewOpen(true);
        break;
      case 'delete':
        setIsDeleteOpen(true);
        break;
      default:
        break;
    }
  };

  const toggleDropdown = (id) => setDropdownOpen(dropdownOpen === id ? null : id);

  return (
    <div className="flex bg-[#FDF5FB]">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto">
      <div className=" bg-white p-5 rounded-lg shadow">
      
      <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Other Income</h3>
                <button
                  onClick={() => togglePopup('add')}
                  className=" text-white font-bold py-2 px-4 rounded flex items-center"
                  style={{
                    background: "linear-gradient(to right, #FE512E, #F09619)",
                    transition: "background 0.3s ease",
                  }}
                >
                 
                  Create Other Income
                </button>
              </div>
          
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 pt-4">
  {incomeItems.map((item) => (
    <div key={item.id} className="bg-white rounded-lg p-0 border border-gray-200">
      {/* Title Section with Blue Background */}
      <div className="flex justify-between items-center px-4 py-3 bg-blue-600 text-white rounded-t-lg ">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <div className="relative inline-block text-left">
          <button
            className="text-black focus:outline-none bg-white px-2 rounded-lg"
            onClick={() => toggleDropdown(item.id)}
          >
            ⋮
          </button>
          {dropdownOpen === item.id && (
            <div className="absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-lg z-10 ">
              <button
               onClick={() => togglePopup('edit')}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-black text-left"
              >
                Edit
              </button>
              <button
                onClick={handleViewClick}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-black text-left"
            >
                View
            </button>
              
              <button
                onClick={() => togglePopup('delete')}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-black text-left"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="px-4 py-3 bg-white">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-400">Amount per Member</span>
          <span>₹{item.amountPerMember}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-400">Total Members</span>
          <span>{item.totalMembers}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-400">Date</span>
          <span>{new Date(item.date).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-400">Due Date</span>
          <span>{new Date(item.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-400">Description</span>
          
        </div>
        <span>{item.description}</span>
      </div>
    </div>
  ))}
</div>

      </div>

   {/* Add Income Popup */}
          <Popup isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add Income">
            <AddOtherIncome onClose={() => setIsAddOpen(false)} setIncomeItems={setIncomeItems} />
          </Popup>

          {/* Edit Income Popup */}
          <Popup isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Income">
            <EditOtherIncome item={currentItem} onClose={() => setIsEditOpen(false)} setIncomeItems={setIncomeItems} />
          </Popup>


          {/* Delete Confirmation Popup */}
          <Popup isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Confirm Delete">
            <DeleteOtherIncome item={currentItem} onClose={() => setIsDeleteOpen(false)} />
          </Popup>
    </div>
    </main>
    </div>
    
  );
}
