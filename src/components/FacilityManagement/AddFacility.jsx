import { useState } from 'react';

export default function AddFacility({ onSave, onClose }) {
    const [newFacility, setNewFacility] = useState({
        title: '',
        description: '',
        scheduleDate: '',
    });

    const handleSave = () => {
        if (newFacility.title && newFacility.description) {
            onSave(newFacility);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96">
                <h3 className="text-xl font-medium mb-4">Create Facility</h3>
                <hr className="border-[#F4F4F4] mb-4 mt-4" />
                <div className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#202224]">Facility Name<span className='text-red-500'>*</span></label>
                        <input
                            type="text"
                            value={newFacility.title}
                            onChange={(e) =>
                                setNewFacility({ ...newFacility, title: e.target.value })
                            }
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#202224]">Description<span className='text-red-500'>*</span></label>
                        <textarea
                            value={newFacility.description}
                            onChange={(e) =>
                                setNewFacility({ ...newFacility, description: e.target.value })
                            }
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter Description"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#202224]">Schedule Service Date</label>
                        <input
                            type="date"
                            value={newFacility.scheduleDate}
                            onChange={(e) =>
                                setNewFacility({ ...newFacility, scheduleDate: e.target.value })
                            }
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block mb-1 text-sm font-medium text-[#202224]">Remind Before</label>
                    <select
                        value={newFacility.remindBefore || ''}
                        onChange={(e) =>
                            setNewFacility({ ...newFacility, remindBefore: e.target.value })
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
                        className="w-1/2 inline-flex justify-center rounded-md text-gray-700 bg-[#F6F8FB] px-4 py-2 text-base font-medium shadow-sm  sm:text-sm hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] hover:text-white"
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
