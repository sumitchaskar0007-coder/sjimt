import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.sjimt.in/api',
  timeout: 30000,
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const adminAPI = {
  login: (credentials) => api.post('/admin/login', credentials),
  getDashboard: () => api.get('/admin/dashboard'),
};

export const galleryAPI = {
  getAll: () => api.get('/gallery'),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return api.post('/gallery', formData);
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return api.put(`/gallery/${id}`, formData);
  },
  delete: (id) => api.delete(`/gallery/${id}`),
};

export const announcementAPI = {
  getAll: () => api.get('/announcements'),
  create: (data) => api.post('/announcements', data),
  update: (id, data) => api.put(`/announcements/${id}`, data),
  delete: (id) => api.delete(`/announcements/${id}`),
};

export const noticeAPI = {
  getAll: () => api.get('/notices'),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return api.post('/notices', formData);
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return api.put(`/notices/${id}`, formData);
  },
  delete: (id) => api.delete(`/notices/${id}`),
};

export const careerAPI = {
  getAll: () => api.get('/careers'),
  create: (data) => api.post('/careers', data),
  update: (id, data) => api.put(`/careers/${id}`, data),
  delete: (id) => api.delete(`/careers/${id}`),
};

export const blogAPI = {
  getAll: () => api.get('/blogs'),
  getAllAdmin: () => api.get('/blogs/admin/all'), // Fixed: changed from '/blogs/all' to '/blogs/admin/all'
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  create: (data) => {
    const formData = new FormData();
    
    // Append all form fields
    Object.keys(data).forEach(key => {
      if (key === 'tags' && typeof data[key] === 'string') {
        formData.append(key, data[key]);
      } else if (key === 'featuredImage' && data[key] instanceof File) {
        formData.append(key, data[key]);
      } else if (data[key] !== null && data[key] !== undefined && key !== '_id') {
        formData.append(key, data[key]);
      }
    });
    
    return api.post('/blogs/admin', formData, { // Fixed: changed from '/blogs' to '/blogs/admin'
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    
    Object.keys(data).forEach(key => {
      if (key === 'tags' && typeof data[key] === 'string') {
        formData.append(key, data[key]);
      } else if (key === 'featuredImage' && data[key] instanceof File) {
        formData.append(key, data[key]);
      } else if (data[key] !== null && data[key] !== undefined && key !== '_id') {
        formData.append(key, data[key]);
      }
    });
    
    return api.put(`/blogs/admin/${id}`, formData, { // Fixed: changed from `/blogs/${id}` to `/blogs/admin/${id}`
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  delete: (id) => api.delete(`/blogs/admin/${id}`), // Fixed: changed from `/blogs/${id}` to `/blogs/admin/${id}`
};

export const admissionAPI = {
  submit: (data) => api.post('/admissions/submit', data),
  getAll: () => api.get('/admissions/all'),
  downloadExcel: () => api.get('/admissions/download-excel', { responseType: 'blob' })
};

export default api;
