import { useState } from 'react';
import { MdEditSquare } from "react-icons/md";
import { HiMiniEye } from "react-icons/hi2";
import AddExpenseModal from './AddExpenseModal';
import EditExpenseModal from './EditExpenseModal';
import ViewExpenseModal from './ViewExpenseModal';
import DeleteExpenseModal from './DeleteExpenseModal';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaSquarePlus } from "react-icons/fa6";
import Gallery from '../../assets/gallery.jpg'
import Document from '../../assets/Document.jpg'


export default function Expense() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'Rent',
      description: 'Monthly rent payment for the 2BHK apartment located in the city center. Includes maintenance charges and building security fees.',
      date: '2024-02-15',
      amount: 1000,
      bill: 'JPG', 
    },
    {
      id: 2,
      title: 'Utilities',
      description: 'Electricity, water, and gas bill payments for the month, including additional charges for waste management services.',
      date: '2024-02-20',
      amount: 1000,
      bill: 'PDF',
    },
    {
      id: 3,
      title: 'Groceries',
      description: 'Weekly grocery shopping from the local supermarket, including fresh vegetables, fruits, dairy products, and household items.',
      date: '2024-02-22',
      amount: 1000,
      bill: 'JPG', 
    },
    {
      id: 4,
      title: 'Internet Subscription',
      description: 'Monthly high-speed internet subscription for home use with unlimited data package for streaming and work-from-home setup.',
      date: '2024-02-25',
      amount: 600,
      bill: 'PDF', 
    },
    {
      id: 5,
      title: 'Car Fuel',
      description: 'Refueling of personal car for daily commute and long drives, including petrol costs and minor maintenance expenses.',
      date: '2024-02-28',
      amount: 1500,
      bill: 'JPG', 
    },
    
  ]
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedExpense, setSelectedExpense] = useState(null);

  // Handlers
  const handleAdd = () => setIsAddModalOpen(true);
  const handleEdit = (expense) => {
    setSelectedExpense(expense);
    setIsEditModalOpen(true);
  };
  const handleView = (expense) => {
    setSelectedExpense(expense);
    setIsViewModalOpen(true);
  };
  const handleDelete = (expense) => {
    setSelectedExpense(expense);
    setIsDeleteModalOpen(true);
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
    setIsAddModalOpen(false);
  };

  const handleEditExpense = (updatedExpense) => {
    setExpenses(expenses.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp)));
    setIsEditModalOpen(false);
  };

  const confirmDelete = () => {
    setExpenses(expenses.filter((exp) => exp.id !== selectedExpense.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="flex bg-[#FDF5FB]">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md mt-6">
            <div className="px-6 py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Add Expense Details</h3>
                <button
                  onClick={handleAdd} 
                  className="text-white font-bold py-2 px-4 rounded flex items-center"
                  style={{
                    background: "linear-gradient(to right, #FE512E, #F09619)",
                    transition: "background 0.3s ease",
                  }}
                >
                  <FaSquarePlus className="mr-2" size={16} />
                  Add New Expense Details
                </button>
              </div>
            </div>
            <div className="overflow-x-auto px-6 py-1">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F1F0FF] rounded-t-md">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000] tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-[#000000] tracking-wider">Description</th>
                    <th className="px-6 py-3 text-sm font-medium text-[#000000] tracking-wider">Date</th>
                    <th className="px-6 py-3 text-sm font-medium text-[#000000] tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-sm font-medium text-[#000000] tracking-wider">Bill Format</th>
                    <th className="px-6 py-3 text-sm font-medium text-[#000000] tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="border-b">
                      <td className="py-3 px-4 whitespace-nowrap">{expense.title}</td>
                        <td className="py-2 px-4 whitespace-nowrap">
                          {expense.description.length > 80
                            ? `${expense.description.substring(0, 80)}...`
                            : expense.description}
                        </td>

                      <td className="py-3 px-4 whitespace-nowrap">{expense.date}</td>
                      <td className="py-3 px-4 whitespace-nowrap text-[#39973D] font-bold text-center">₹ {expense.amount}</td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                          <span
                            className={`w-32 py-2 inline-flex text-md leading-5 font-semibold rounded-full items-center justify-center`}
                          >
                            {expense.bill === 'JPG' ? (
                              <span className="flex items-center">
                                <img src={Gallery}
                                  className="mr-2 w-7 h-7  text-blue-600 bg-blue-50 p-1.5 rounded-md"

                                />
                                <span className="text-[#202224]">JPG</span>
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <img src={Document}
                                  className="mr-2 w-7 h-7 text-red-600 bg-blue-50 p-1.5 rounded-md"
                                />
                                <span className="text-[#202224]">PDF</span>
                              </span>
                            )}
                          </span>
                        </td>

                      <td className="py-3 px-4 text-center">
                        <button onClick={() => handleEdit(expense)} className="p-1 text-[#39973d] bg-blue-50 p-1.5 rounded-md mr-2">
                          <MdEditSquare className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleView(expense)} className="p-1 text-blue-600 bg-blue-50 p-1.5 rounded-md mr-2">
                          <HiMiniEye className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleDelete(expense)} className="p-1 text-red-600 bg-blue-50 p-1.5 rounded-md mr-2">
                          <RiDeleteBin5Fill className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {isAddModalOpen && <AddExpenseModal onSave={handleAddExpense} onCancel={() => setIsAddModalOpen(false)} />}
      {isEditModalOpen && <EditExpenseModal expense={selectedExpense} onSave={handleEditExpense} onCancel={() => setIsEditModalOpen(false)} />}
      {isViewModalOpen && <ViewExpenseModal expense={selectedExpense} onCancel={() => setIsViewModalOpen(false)} />}
      {isDeleteModalOpen && <DeleteExpenseModal onDelete={confirmDelete} onCancel={() => setIsDeleteModalOpen(false)} />}
    </div>
  );
}
