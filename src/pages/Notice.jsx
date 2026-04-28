import React, { useState, useEffect } from 'react';
import { noticeAPI } from '../api';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await noticeAPI.getAll();
      // Filter out expired notices
      const currentDate = new Date();
      const activeNotices = response.data.filter(notice => {
        if (!notice.expiryDate) return true;
        return new Date(notice.expiryDate) > currentDate;
      });
      setNotices(activeNotices);
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading notices...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notices</h1>
          <p className="text-xl text-gray-600">Important notices and updates</p>
        </div>

        {notices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No notices available at this time.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                    <p className="text-gray-700 mb-4 whitespace-pre-line">{item.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Posted: {new Date(item.date).toLocaleDateString()}
                      </div>
                      {item.fileUrl && (
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                        >
                          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download Attachment
                        </a>
                      )}
                    </div>
                    {item.expiryDate && (
                      <p className="mt-2 text-sm text-red-500">
                        Expires on: {new Date(item.expiryDate).toLocaleDateString()}
                      </p>
                    )}
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

export default Notice;