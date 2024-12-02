
import React, { useState } from 'react';
import { Search, Edit2, Eye, Trash2, X } from 'lucide-react';

const ComplaintManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [complaints, setComplaints] = useState([
    {
      id: '1001',
      wing: 'A',
      complainerName: 'Evelyn Harper',
      complaintName: 'Unethical Behavior',
      description: 'Providing false information or deliberately.',
      priority: 'Medium',
      status: 'Pending'
    },
    {
      id: '1002',
      wing: 'B',
      complainerName: 'Esther Howard',
      complaintName: 'Preventive Measures',
      description: 'Regular waste collection services.',
      priority: 'Low',
      status: 'Open'
    },
  ]);

  const [formData, setFormData] = useState({
    complainerName: '',
    complaintName: '',
    description: '',
    wing: '',
    unit: '',
    priority: '',
    status: 'Open'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (complaint) => {
    setSelectedComplaint(complaint);
    setFormData(complaint);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleView = (complaint) => {
    setSelectedComplaint(complaint);
    setShowViewModal(true);
  };

  const handleDelete = (complaint) => {
    setSelectedComplaint(complaint);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setComplaints(prev => prev.filter(c => c.id !== selectedComplaint.id));
    setShowDeleteModal(false);
    setSelectedComplaint(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.complainerName && formData.complaintName) {
      if (isEditing) {
        setComplaints(prev => 
          prev.map(complaint => 
            complaint.id === selectedComplaint.id ? { ...formData, id: complaint.id } : complaint
          )
        );
        setIsEditing(false);
      } else {
        setComplaints(prev => [...prev, { ...formData, id: String(Date.now()) }]);
      }
      setShowModal(false);
      setFormData({
        complainerName: '',
        complaintName: '',
        description: '',
        wing: '',
        unit: '',
        priority: '',
        status: 'Open'
      });
      setSelectedComplaint(null);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-blue-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'solve': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      case 'open': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  // View Modal Component
  const ViewModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A39uWD7F2E~HM5M7hxglW91hOeOOgjPOzK0VY56Z6Ax9zJs4F0nG3Gh4vvWAH~38VJMlFOD01sm49mOabvRx0hiA9XM67Peb0N9HB0t-2M2~bYkoSXRjhC70Jn7m3~HzhpFZrpTmvmoT4Eq2iEKsCHgABggiSBtu--RcL-Dr6~5EdcawaLlyqTcIX9Rvs2R0yrdht2nUHNwhoUzoZSHPyP2U6F9ruNvh3aGtixTG0i4jOr65j-oCE0C7RO~eWJPZU6pYjWKD~3Ip-2KXKvtrxSo8zk5V8znEFYz-fOCMQxgBR9Am-fnD~QvFsTNQX9P2ZQCTxhrRCVokJ1-tkVLR0g__" alt="" className="h-12 w-12 rounded-full" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">{selectedComplaint?.complainerName}</h2>
              <p className="text-sm text-gray-500">Aug 5, 2024</p>
            </div>
          </div>
          <button onClick={() => setShowViewModal(false)} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Request Name</h3>
            <p className="mt-1">{selectedComplaint?.complaintName}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Description</h3>
            <p className="mt-1">{selectedComplaint?.description}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Wing</h3>
              <p className="mt-1">{selectedComplaint?.wing}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Unit</h3>
              <p className="mt-1">{selectedComplaint?.id}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Priority</h3>
              <p className="mt-1">{selectedComplaint?.priority}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <p className="mt-1">{selectedComplaint?.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Delete Modal Component
  const DeleteModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Delete Complaint?</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to delete this Complaint?</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowDeleteModal(false)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Create Complaint</h1>
          <button
            onClick={() => {
              setIsEditing(false);
              setFormData({
                complainerName: '',
                complaintName: '',
                description: '',
                wing: '',
                unit: '',
                priority: '',
                status: 'Open'
              });
              setShowModal(true);
            }}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Create Complaint
          </button>
        </div>

        {/* Complaints Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Complainer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Complaint Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unit Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A39uWD7F2E~HM5M7hxglW91hOeOOgjPOzK0VY56Z6Ax9zJs4F0nG3Gh4vvWAH~38VJMlFOD01sm49mOabvRx0hiA9XM67Peb0N9HB0t-2M2~bYkoSXRjhC70Jn7m3~HzhpFZrpTmvmoT4Eq2iEKsCHgABggiSBtu--RcL-Dr6~5EdcawaLlyqTcIX9Rvs2R0yrdht2nUHNwhoUzoZSHPyP2U6F9ruNvh3aGtixTG0i4jOr65j-oCE0C7RO~eWJPZU6pYjWKD~3Ip-2KXKvtrxSo8zk5V8znEFYz-fOCMQxgBR9Am-fnD~QvFsTNQX9P2ZQCTxhrRCVokJ1-tkVLR0g__" alt="" className="h-8 w-8 rounded-full" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{complaint.complainerName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {complaint.complaintName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {complaint.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {complaint.wing} {complaint.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(complaint.priority)}`}>
                        {complaint.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getStatusColor(complaint.status)}`}>
                        {complaint.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button onClick={() => handleEdit(complaint)} className="text-green-600 hover:text-green-900">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleView(complaint)} className="text-blue-600 hover:text-blue-900">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleDelete(complaint)} className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create/Edit Complaint Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{isEditing ? 'Edit' : 'Create'} Complaint</h2>
                <button onClick={() => {
                  setShowModal(false);
                  setIsEditing(false);
                }} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Complainer Name*</label>
                    <input
                      type="text"
                      name="complainerName"
                      value={formData.complainerName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Complaint Name*</label>
                    <input
                      type="text"
                      name="complaintName"
                      value={formData.complaintName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description*</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Wing*</label>
                      <input
                        type="text"
                        name="wing"
                        value={formData.wing}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Unit*</label>
                      <input
                        type="text"
                        name="unit"
                        value={formData.unit}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority*</label>
                    <div className="flex space-x-4">
                      {['High', 'Medium', 'Low'].map((p) => (
                        <label key={p} className="flex items-center">
                          <input
                            type="radio"
                            name="priority"
                            value={p}
                            checked={formData.priority === p}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{p}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status*</label>
                    <div className="flex space-x-4">
                      {['Open', 'Pending', 'Solve'].map((s) => (
                        <label key={s} className="flex items-center">
                          <input
                            type="radio"
                            name="status"
                            value={s}
                            checked={formData.status === s}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setIsEditing(false);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                  >
                    {isEditing ? 'Save' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Complaint Modal */}
        {showViewModal && <ViewModal />}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && <DeleteModal />}
      </div>
    </div>
  );
};

export default ComplaintManagement;