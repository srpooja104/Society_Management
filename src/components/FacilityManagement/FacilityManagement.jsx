import { useState } from 'react';
import AddFacility from './AddFacility';
import EditFacility from './EditFacility';

export default function FacilityManagement() {
    const [facilities, setFacilities] = useState([
        {
          id: 1,
          title: 'Swimming Pool',
          description:
            'A well-maintained swimming pool equipped with a temperature control system. The pool area includes comfortable seating, sun loungers. ',
          date: '2024-12-01',
        },
        {
          id: 2,
          title: 'Gym',
          description:
            'Our state-of-the-art gym is open 24/7 and features the latest fitness equipment, including treadmills, weight machines, and free weights. ',
          date: '2024-11-20',
        },
        {
          id: 3,
          title: 'Community Hall',
          description:
            'The community hall is a spacious venue suitable for hosting parties, meetings, and events. It comes equipped with a sound system. ',
          date: '2024-12-15',
        },
        {
          id: 4,
          title: 'Garden Area',
          description:
            'Our beautifully landscaped garden area offers a tranquil environment with walking paths, benches, and a variety of seasonal flowers.',
          date: '2024-11-25',
        },
      ]);
      

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);

  const handleAdd = () => {
    setIsEdit(false);
    setSelectedFacility(null);
    setIsModalOpen(true);
  };

  const handleEdit = (facility) => {
    setIsEdit(true);
    setSelectedFacility(facility);
    setIsModalOpen(true);
    setDropdownOpenId(null); // Close the dropdown after selecting Edit
  };

  const saveFacility = (newFacility) => {
    if (isEdit) {
      setFacilities(
        facilities.map((facility) =>
          facility.id === selectedFacility.id ? { ...newFacility, id: selectedFacility.id } : facility
        )
      );
    } else {
      setFacilities([...facilities, { ...newFacility, id: facilities.length + 1 }]);
    }
    setIsModalOpen(false);
  };

  const toggleDropdown = (id) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id); // Toggle the specific dropdown
  };

  return (
    <div className="flex bg-[#FDF5FB]">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-white p-5 rounded-lg shadow mt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Facility Management</h2>
              <button
                onClick={handleAdd}
                className="text-white font-bold py-2 px-4 rounded"
                style={{
                  background: 'linear-gradient(to right, #FE512E, #F09619)',
                  transition: 'background 0.3s ease',
                }}
              >
                Add Facility
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {facilities.map((facility) => (
                <div key={facility.id} className="bg-white rounded-lg p-0 border border-blue-100 relative">
                  <div className="flex justify-between items-center px-4 py-3 bg-[#5678E9] text-white rounded-t-lg">
                    <h3 className="text-lg font-semibold">{facility.title}</h3>
                    <button
                      className="text-[#5678E9] focus:outline-none bg-white px-2 rounded-lg"
                      onClick={() => toggleDropdown(facility.id)}
                    >
                      ⋮
                    </button>
                  </div>

                  <div className="px-4 py-3 bg-white">
                  <div className="mb-2 flex justify-between items-center">
                        <span className="text-sm text-[#4F4F4F]">Upcoming Schedule Service Date</span>
                        <span className="text-black text-sm">{facility.date}</span>
                        </div>

                    <div className="mb-2">
                    <span className="text-sm text-[#4F4F4F]">Description</span>
                 
                      <div>
                      <span className="text-black text-md">{facility.description}</span></div>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {dropdownOpenId === facility.id && (
                    <div className="absolute right-4 top-10 w-24 bg-white border rounded-md shadow-lg z-10">
                      <button
                        onClick={() => handleEdit(facility)}
                        className="block w-full px-4 py-2 text-sm text-gray-900  text-left"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        isEdit ? (
          <EditFacility
            facility={selectedFacility}
            onSave={saveFacility}
            onClose={() => setIsModalOpen(false)}
          />
        ) : (
          <AddFacility onSave={saveFacility} onClose={() => setIsModalOpen(false)} />
        )
      )}
    </div>
  );
}
