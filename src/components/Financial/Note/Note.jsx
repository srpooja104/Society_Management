
import { useState } from 'react';
import { Plus, Edit } from 'lucide-react';

export default function Note() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Rent or Mortgage',
      description: 'A visual representation of your spending categories visual representation.',
    },
    {
      id: 2,
      title: 'Housing Costs',
      description: 'A visual representation of your spending categories visual representation.',
    },
    {
      id: 3,
      title: 'Property Taxes',
      description: 'A visual representation of your spending categories visual representation.',
    },
    {
      id: 4,
      title: 'Maintenance Fees',
      description: 'A visual representation of your spending categories visual representation.',
    },
    {
      id: 5,
      title: 'Rent or Transportation',
      description: 'A visual representation of your spending categories visual representation.',
    },
    {
      id: 6,
      title: 'Breakdown',
      description: 'A visual representation of your spending categories visual representation.',
    },
    {
      id: 7,
      title: 'Expense Tracker',
      description: 'A visual representation of your spending categories visual representation.',
    },
    {
      id: 8,
      title: 'Personal Expenses',
      description: 'A visual representation of your spending categories visual representation.',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNote, setNewNote] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleAdd = () => {
    setNewNote({});
    setIsEdit(false);
    setIsModalOpen(true);
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
    setNewNote(note);
    setIsEdit(true);
    setIsModalOpen(true);
  };

  const saveNote = () => {
    if (isEdit) {
      setNotes(
        notes.map((note) =>
          note.id === selectedNote.id ? { ...newNote, id: selectedNote.id } : note
        )
      );
    } else {
      setNotes([...notes, { ...newNote, id: notes.length + 1 }]);
    }
    setIsModalOpen(false);
  };
  const toggleDropdown = (id) => setDropdownOpen(dropdownOpen === id ? null : id);

  return (
    <div className="flex bg-[#FDF5FB]">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto">
          <div className=" bg-white p-5 rounded-lg shadow mt-4">
            <div className="flex justify-between items-center ">
              <h2 className="text-xl font-semibold">Note</h2>
              <button
                onClick={handleAdd}
                className=" text-white font-bold py-2 px-4 rounded flex items-center"
                style={{
                  background: "linear-gradient(to right, #FE512E, #F09619)",
                  transition: "background 0.3s ease",
                }}
              >
                Create Note
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 pt-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white rounded-lg p-0 border border-gray-200"
                >
                  <div className="flex justify-between items-center px-4 py-3 bg-blue-600 text-white rounded-t-lg ">
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                    <div className="relative inline-block text-left">
                      <button
                        className="text-black focus:outline-none bg-white px-2 rounded-lg"
                        onClick={() => toggleDropdown(note.id)}
                      >
                        ⋮
                      </button>
                      {dropdownOpen === note.id && (
                        <div className="absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-lg z-10 ">
                          <button
                            onClick={() => handleEdit(note)}
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-black text-left"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-400">Description</span>
                    </div>
                    <span>{note.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-96">
                  <h3 className="text-xl font-medium mb-4">
                    {isEdit ? 'Edit Note' : 'Add Note'}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Title<span className='text-red-500'>*</span></label>
                      <input
                        type="text"
                        value={newNote.title || ''}
                        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter Title"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Description<span className='text-red-500'>*</span></label>
                      <textarea
                        value={newNote.description || ''}
                        onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md"
                        rows={3}
                        placeholder="Enter Description"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Date<span className='text-red-500'>*</span></label>
                      <input
                        type="date"
                        value={newNote.date || ''}
                        onChange={(e) => setNewNote({ ...newNote, date: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>

                  <div className=" flex space-x-2 mt-8">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={saveNote}
                      className="w-1/2 inline-flex justify-center rounded-md text-gray-700 bg-[#F6F8FB] px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] hover:text-white"
                      style={{
                        transition: "background 0.3s ease",
                      }}
                    >
                      Save
                    </button>


                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>


  );
}
