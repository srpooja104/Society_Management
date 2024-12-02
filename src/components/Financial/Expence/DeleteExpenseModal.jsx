export default function DeleteExpenseModal({ onDelete, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-3 rounded-md w-full max-w-md text-center">
        <h3 className="text-xl font-semibold mb-4">Delete Expense</h3>
        <hr className="border-[#F4F4F4] mb-4 mt-4" />
        <p>Are you sure you want to delete this expense?</p>
        <div className="px-4 py-3 flex space-x-2 sm:px-6">
              <button
                type="button"
                onClick={onCancel}
                className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none  sm:text-sm"
              >
                Cancel
              </button>
              <button
              onClick={onDelete}
                type="button"
                className="w-1/2 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none sm:text-sm"
              >
                Delete
              </button>
            </div>
      </div>
    </div>
  );
}
