import React, { useState } from 'react';

// Popup Component
function Popup({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
        <div className="text-right mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function OtherIncome() {
  const [incomeItems, setIncomeItems] = useState([
    { id: 1, title: 'Ganesh Chaturthi', amountPerMember: 1500, dueDate: '2024-07-15' },
    // Add more sample data here if needed
  ]);

  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleAddIncome = () => setIsAddPopupOpen(true);
  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditPopupOpen(true);
  };
  const handleDelete = (item) => {
    setCurrentItem(item);
    setIsDeletePopupOpen(true);
  };

  const handleSaveIncome = (newIncome) => {
    setIncomeItems([...incomeItems, { ...newIncome, id: Date.now() }]);
    setIsAddPopupOpen(false);
  };

  const handleUpdateIncome = (updatedItem) => {
    setIncomeItems(incomeItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setIsEditPopupOpen(false);
  };

  const handleConfirmDelete = () => {
    setIncomeItems(incomeItems.filter((item) => item.id !== currentItem.id));
    setIsDeletePopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Other Income</h1>

        {/* Add Income Button */}
        <button onClick={handleAddIncome} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add Income
        </button>

        {/* Income Items List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incomeItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <div className="relative inline-block text-left">
                  <button className="text-gray-600 focus:outline-none">⋮</button>
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
                    <button
                      onClick={() => handleEdit(item)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-1">Amount: ₹{item.amountPerMember}</p>
              <p className="text-sm text-gray-600">Due: {new Date(item.dueDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>

        {/* Add Income Popup */}
        <Popup isOpen={isAddPopupOpen} onClose={() => setIsAddPopupOpen(false)} title="Add Income">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveIncome({
                title: e.target.title.value,
                amountPerMember: e.target.amount.value,
                dueDate: e.target.dueDate.value,
              });
            }}
          >
            <input name="title" placeholder="Title" className="border p-2 mb-2 w-full" required />
            <input name="amount" placeholder="Amount" type="number" className="border p-2 mb-2 w-full" required />
            <input name="dueDate" placeholder="Due Date" type="date" className="border p-2 mb-4 w-full" required />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
          </form>
        </Popup>

        {/* Edit Income Popup */}
        <Popup isOpen={isEditPopupOpen} onClose={() => setIsEditPopupOpen(false)} title="Edit Income">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateIncome({
                ...currentItem,
                title: e.target.title.value,
                amountPerMember: e.target.amount.value,
                dueDate: e.target.dueDate.value,
              });
            }}
          >
            <input name="title" defaultValue={currentItem?.title} className="border p-2 mb-2 w-full" required />
            <input name="amount" defaultValue={currentItem?.amountPerMember} type="number" className="border p-2 mb-2 w-full" required />
            <input name="dueDate" defaultValue={currentItem?.dueDate} type="date" className="border p-2 mb-4 w-full" required />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
          </form>
        </Popup>

        {/* Delete Confirmation Popup */}
        <Popup isOpen={isDeletePopupOpen} onClose={() => setIsDeletePopupOpen(false)} title="Confirm Delete">
          <p>Are you sure you want to delete "{currentItem?.title}"?</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleConfirmDelete}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Delete
            </button>
          </div>
        </Popup>
      </div>
    </div>
  );
}
