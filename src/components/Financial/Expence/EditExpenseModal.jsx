import { useState } from 'react';
import AddImage from '../../assets/Add image.jpg'; // Assuming default image

export default function EditExpenseModal({ expense, onSave, onCancel }) {
  const [updatedExpense, setUpdatedExpense] = useState({ ...expense });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedExpense((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSave = () => {
    if (updatedExpense.title && updatedExpense.amount > 0 && updatedExpense.image) {
      onSave(updatedExpense);
    } else {
      alert('Please fill in all required fields and upload an image.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Edit Expense</h3>
        <hr className="border-[#F4F4F4] mb-4 mt-4" />

        {/* Title Input */}
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          value={updatedExpense.title}
          placeholder="Enter Title"
          className="mb-3 w-full p-2 border border-gray-300 rounded-lg"
          onChange={handleChange}
        />

        {/* Description Input */}
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={updatedExpense.description}
          placeholder="Enter Description"
          className="mb-3 w-full p-2 border border-gray-300 rounded-lg"
          onChange={handleChange}
        ></textarea>

        <div className="flex gap-4">

          {/* Date Input */}
          <div className="w-1/2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={updatedExpense.date}
              className="mb-3 w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleChange}
            />
          </div>

          {/* Amount Input */}
          <div className="w-1/2">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="amount"
              value={updatedExpense.amount}
              placeholder="₹ 000000"
              className="mb-3 w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Upload Bill <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <div className="flex justify-center items-center">
                <img
                  src={updatedExpense.image ? URL.createObjectURL(updatedExpense.image) : AddImage}
                  alt="Upload"
                  className="max-w-full max-h-32"
                />
              </div>
              
              <p className="mt-2 text-sm font-medium text-gray-900">
                <span className="text-blue-600">Upload a file</span> or drag and drop
              </p>
              <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-8">
          <button
            type="button"
            onClick={onCancel}
            className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50  sm:text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="w-1/2 inline-flex justify-center rounded-md text-gray-700 bg-[#F6F8FB] px-4 py-2 text-base font-medium shadow-sm   sm:text-sm hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] hover:text-white"
            style={{
              transition: "background 0.3s ease",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
