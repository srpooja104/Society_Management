import { useState } from 'react';

export default function EditFacility({ facility, onSave, onClose }) {
  const [updatedFacility, setUpdatedFacility] = useState(facility);

  const handleSave = () => {
    if (updatedFacility.title && updatedFacility.description) {
      onSave(updatedFacility);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-medium mb-4">Edit Facility</h3>
        <hr className="border-[#F4F4F4] mb-4 mt-4" />
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Facility Name<span className='text-red-500'>*</span></label>
            <input
              type="text"
              value={updatedFacility.title}
              onChange={(e) =>
                setUpdatedFacility({ ...updatedFacility, title: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Description<span className='text-red-500'>*</span></label>
            <textarea
              value={updatedFacility.description}
              onChange={(e) =>
                setUpdatedFacility({ ...updatedFacility, description: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Schedule Date</label>
            <input
              type="date"
              value={updatedFacility.scheduleDate}
              onChange={(e) =>
                setUpdatedFacility({ ...updatedFacility, scheduleDate: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mt-4">
                    <label className="block mb-1 text-sm font-medium text-[#202224]">Remind Before</label>
                    <select
                        value={updatedFacility.remindBefore || ''}
                        onChange={(e) =>
                            setUpdatedFacility({ ...updatedFacility, remindBefore: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded-md bg-white"
                    >
                        <option value="" className='text-gray-500' disabled>Select Day</option>
                        <option value="1">1 Day </option>
                        <option value="2">2 Days </option>
                        <option value="3">3 Days </option>
                        <option value="7">1 Week </option>
                    </select>
                </div>
        </div>
        <div className=" flex space-x-2 mt-8">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm sm:text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="w-1/2 inline-flex justify-center rounded-md  px-4 py-2 text-base font-medium shadow-sm  sm:text-sm bg-gradient-to-r from-[#FE512E] to-[#F09619] text-white"
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
