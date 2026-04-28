import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { adminAPI } from '../../api';
import './Admindashboard.css';

const API_URL = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
  // State for existing dashboard stats
  const [stats, setStats] = useState({
    galleryCount: 0,
    announcementCount: 0,
    noticeCount: 0,
    careerCount: 0,
    blogCount: 0
  });
  
  // State for admission applications
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  
  // Active tab state
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' or 'admissions'

  useEffect(() => {
    fetchDashboardData();
    checkAuth();
  }, []);

  useEffect(() => {
    if (activeTab === 'admissions') {
      fetchAdmissions();
    }
  }, [activeTab]);

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin/login';
    }
  };

  const fetchDashboardData = async () => {
    try {
      const response = await adminAPI.getDashboard();
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const fetchAdmissions = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API_URL}/admission/all`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setAdmissions(response.data.data);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/admin/login';
      } else {
        setError('Error fetching admissions');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadExcel = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API_URL}/admission/download-excel`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob'
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'admissions.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Error downloading Excel file');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    window.location.href = '/admin/login';
  };

  // Filter admissions
  const filteredAdmissions = admissions.filter(admission => {
    const matchesSearch = 
      admission.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admission.surname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admission.emailId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admission.courseApplied?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admission.fatherName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterDate && admission.submittedAt) {
      const admissionDate = new Date(admission.submittedAt).toISOString().split('T')[0];
      return matchesSearch && admissionDate === filterDate;
    }
    
    return matchesSearch;
  });

  const adminEmail = localStorage.getItem('adminEmail');

  const cards = [
    { title: 'Gallery Items', count: stats.galleryCount, link: '/admin/gallery', color: 'bg-purple-500', icon: '🖼️' },
    { title: 'Announcements', count: stats.announcementCount, link: '/admin/announcements', color: 'bg-blue-500', icon: '📢' },
    { title: 'Notices', count: stats.noticeCount, link: '/admin/notices', color: 'bg-green-500', icon: '📋' },
    { title: 'Careers', count: stats.careerCount, link: '/admin/careers', color: 'bg-yellow-500', icon: '💼' },
    { title: 'Blogs', count: stats.blogCount, link: '/admin/blogs', color: 'bg-red-500', icon: '📝' },
  ];

  if (loading && activeTab === 'admissions') {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading admissions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {adminEmail}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setActiveTab('admissions')}
              className={`${
                activeTab === 'admissions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              📝 Admissions ({admissions.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && (
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, index) => (
                <Link
                  key={index}
                  to={card.link}
                  className="block hover:shadow-lg transition-shadow duration-200 transform hover:-translate-y-1"
                >
                  <div className={`${card.color} rounded-lg shadow-lg p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{card.icon}</span>
                      <span className="text-2xl font-bold">{card.count}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                    <p className="mt-4 text-sm opacity-80">Click to manage →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'admissions' && (
          <div className="dashboard-container">
            <div className="dashboard-header">
              <h2>Admission Applications</h2>
              <div className="header-actions">
                <button onClick={handleDownloadExcel} className="download-btn">
                  📥 Download Excel
                </button>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="filters-section">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search by name, email, course, father's name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="date-filter flex items-center space-x-2">
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {filterDate && (
                  <button 
                    onClick={() => setFilterDate('')} 
                    className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="stats-section">
              <div className="stat-card">
                <h3>Total Applications</h3>
                <p>{admissions.length}</p>
              </div>
              <div className="stat-card">
                <h3>Filtered</h3>
                <p>{filteredAdmissions.length}</p>
              </div>
            </div>

            <div className="table-container">
              <table className="admissions-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Submission Date</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmissions.length > 0 ? (
                    filteredAdmissions.map((admission, index) => (
                      <tr key={admission._id} className="hover:bg-gray-50">
                        <td>{index + 1}</td>
                        <td>{new Date(admission.submittedAt).toLocaleDateString()}</td>
                        <td>
                          <div className="font-medium">{admission.firstName} {admission.surname}</div>
                          <div className="text-sm text-gray-600">s/o {admission.fatherName}</div>
                        </td>
                        <td>{admission.courseApplied}</td>
                        <td>{admission.emailId}</td>
                        <td>{admission.studentContact}</td>
                        <td>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {admission.category || 'N/A'}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="view-btn"
                            onClick={() => {
                              // You can implement a modal to show full details
                              alert(`Full details for ${admission.firstName} ${admission.surname}\n\n` +
                                `Date of Birth: ${new Date(admission.dateOfBirth).toLocaleDateString()}\n` +
                                `Address: ${admission.presentAddress}\n` +
                                `Aadhar: ${admission.aadharCardNo}\n` +
                                `Blood Group: ${admission.bloodGroup}`);
                            }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center py-8 text-gray-500">
                        No admissions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;