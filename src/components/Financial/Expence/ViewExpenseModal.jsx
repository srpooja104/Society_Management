import { FaTimes } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import Gallery from '../../assets/gallery.jpg'

export default function ViewExpenseModal({ expense, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          {/* Title Styling */}
          <h3 className="text-2xl font-semibold text-gray-900">View Expense Details</h3>
          <FaTimes 
            onClick={onCancel} 
            className="text-gray-500 cursor-pointer" 
            size={18} 
          />
        </div>
        <hr className="border-[#F4F4F4] mb-4" />

        {/* Expense Data */}
        <div className="text-gray-500 ">
                   <div className="flex justify-between items-center ">
                      <span className="font-medium text-[#A7A7A7]">Title</span>
                    </div>
                    <span className='text-black mb-4'>{expense.title}</span>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-medium text-[#A7A7A7] ">Description</span>
                    </div>
                    <span className='text-black mb-4'>{expense.description}</span>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <span className="font-medium text-[#A7A7A7]">Date</span>
                          <div className="text-black">{expense.date}</div>
                        </div>
                        <div>
                          <span className="font-medium text-[#A7A7A7]">Amount</span>
                          <div className="text-black bg-gray-100 rounded-lg w-16 text-center py-1 font-semibold ">₹ {expense.amount}</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                      <span className="font-medium text-[#A7A7A7] ">Bill</span>
                    </div>
                    <div className="border-2 rounded-lg flex items-center justify-between p-4 space-x-4">
      {/* Image */}
      <div className=" bg-gray-200 rounded-lg flex items-center justify-center">
        <img src={Gallery} alt="Gallery" className="text-lg object-cover rounded-lg" />
      </div>
      
      {/* File Name and Size */}
      <div className="flex flex-col space-y-1">
        <span className="font-medium text-black">Adharcard Front Side.JPG</span>
        <span className="text-[#A7A7A7]">35 MB</span>
      </div>

      {/* Eye Icon */}
      <FaEye className="text-gray-600 cursor-pointer" size={24} />
    </div>
        </div>
      </div>
    </div>
  );
}
