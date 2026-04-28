import React, { useState, useEffect } from 'react';
import { announcementAPI } from '../api';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await announcementAPI.getAll();
      setAnnouncements(response.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading announcements...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Announcements</h1>
          <p className="text-xl text-gray-600">Stay updated with our latest news and announcements</p>
        </div>

        {announcements.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No announcements at this time.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {announcements.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                    <p className="text-gray-700 mb-4 whitespace-pre-line">{item.content}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcement;