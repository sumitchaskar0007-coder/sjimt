import React, { useState, useEffect } from 'react';
import { careerAPI } from '../api';

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await careerAPI.getAll();
      // Filter out expired positions
      const currentDate = new Date();
      const activeCareers = response.data.filter(job => {
        if (!job.deadline) return true;
        return new Date(job.deadline) > currentDate;
      });
      setCareers(activeCareers);
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading career opportunities...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-600">Join our team and grow with us</p>
        </div>

        {careers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No job openings at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careers.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-gray-900">{job.title}</h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <p className="text-gray-600 flex items-center">
                      <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {job.department}
                    </p>
                    {job.location && (
                      <p className="text-gray-600 flex items-center">
                        <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </p>
                    )}
                    {job.salary && (
                      <p className="text-gray-600 flex items-center">
                        <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.salary}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>

                  <button
                    onClick={() => setSelectedJob(selectedJob?._id === job._id ? null : job)}
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    {selectedJob?._id === job._id ? 'Show Less' : 'Read More'}
                  </button>

                  {selectedJob?._id === job._id && (
                    <div className="mt-4 pt-4 border-t">
                      <h3 className="font-semibold text-gray-900 mb-2">Requirements:</h3>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="text-gray-600">{req}</li>
                        ))}
                      </ul>
                      
                      {job.deadline && (
                        <p className="text-sm text-red-500 mb-4">
                          Application deadline: {new Date(job.deadline).toLocaleDateString()}
                        </p>
                      )}

                      <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200">
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;