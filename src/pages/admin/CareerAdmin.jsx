import React, { useState, useEffect } from 'react';
import { careerAPI } from '../../api';

const CareerAdmin = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    description: '',
    requirements: [''],
    salary: '',
    type: 'Full-time',
    deadline: '',
    isActive: true
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await careerAPI.getAll();
      setCareers(response.data);
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...formData.requirements];
    updatedRequirements[index] = value;
    setFormData({ ...formData, requirements: updatedRequirements });
  };

  const addRequirement = () => {
    setFormData({ ...formData, requirements: [...formData.requirements, ''] });
  };

  const removeRequirement = (index) => {
    const updatedRequirements = formData.requirements.filter((_, i) => i !== index);
    setFormData({ ...formData, requirements: updatedRequirements });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Filter out empty requirements
      const dataToSubmit = {
        ...formData,
        requirements: formData.requirements.filter(req => req.trim() !== '')
      };

      if (editingItem) {
        await careerAPI.update(editingItem._id, dataToSubmit);
      } else {
        await careerAPI.create(dataToSubmit);
      }
      fetchCareers();
      resetForm();
    } catch (error) {
      console.error('Error saving career:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      department: item.department,
      location: item.location || '',
      description: item.description,
      requirements: item.requirements.length > 0 ? item.requirements : [''],
      salary: item.salary || '',
      type: item.type,
      deadline: item.deadline ? item.deadline.split('T')[0] : '',
      isActive: item.isActive
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this career posting?')) {
      try {
        await careerAPI.delete(id);
        fetchCareers();
      } catch (error) {
        console.error('Error deleting career:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      department: '',
      location: '',
      description: '',
      requirements: [''],
      salary: '',
      type: 'Full-time',
      deadline: '',
      isActive: true
    });
    setEditingItem(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Career Management</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {showForm ? 'Cancel' : 'Add New Position'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingItem ? 'Edit Position' : 'Add New Position'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Department *</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Salary</label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Job Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Application Deadline</label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Requirements</label>
                {formData.requirements.map((req, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => handleRequirementChange(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l"
                      placeholder={`Requirement ${index + 1}`}
                    />
                    {index === formData.requirements.length - 1 ? (
                      <button
                        type="button"
                        onClick={addRequirement}
                        className="px-3 py-2 bg-green-500 text-white rounded-r hover:bg-green-600"
                      >
                        +
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => removeRequirement(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-r hover:bg-red-600"
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Active</span>
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  {editingItem ? 'Update' : 'Save'}
                </button>
                {editingItem && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {careers.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className={`ml-4 px-2 py-1 rounded text-xs ${
                      item.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{item.department} • {item.location || 'Remote'}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {item.requirements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside">
                        {item.requirements.map((req, index) => (
                          <li key={index} className="text-gray-600 text-sm">{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Type: {item.type}</span>
                    {item.salary && <span>Salary: {item.salary}</span>}
                    {item.deadline && (
                      <span>Deadline: {new Date(item.deadline).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAdmin;