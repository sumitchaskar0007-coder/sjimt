import React, { useState, useEffect } from 'react';
import { blogAPI } from '../../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    author: '',
    image: null,
    tags: [],
    readTime: '',
    metaTitle: '',
    metaDescription: '',
    isPublished: true
  });

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await blogAPI.getAllAdmin();
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
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

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleTagsChange = (e) => {
    const tagsString = e.target.value;
    const tagsArray = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags: tagsArray });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    setFormData({ ...formData, slug });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }
    if (!formData.content.trim()) {
      alert('Content is required');
      return;
    }
    if (!formData.author.trim()) {
      alert('Author is required');
      return;
    }

    try {
      const dataToSubmit = {
        ...formData,
        tags: formData.tags.filter(tag => tag.trim() !== '')
      };

      let response;
      if (editingItem) {
        response = await blogAPI.update(editingItem._id, dataToSubmit);
        alert('Blog updated successfully!');
      } else {
        response = await blogAPI.create(dataToSubmit);
        alert('Blog created successfully!');
      }
      
      console.log('Blog saved successfully:', response.data);
      await fetchBlogs();
      resetForm();
    } catch (error) {
      console.error('Error saving blog:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to save blog';
      alert(`Error: ${errorMessage}`);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      slug: item.slug,
      content: item.content,
      author: item.author,
      image: null,
      tags: item.tags || [],
      readTime: item.readTime || '',
      metaTitle: item.metaTitle || '',
      metaDescription: item.metaDescription || '',
      isPublished: item.isPublished
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await blogAPI.delete(id);
        alert('Blog deleted successfully!');
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      author: '',
      image: null,
      tags: [],
      readTime: '',
      metaTitle: '',
      metaDescription: '',
      isPublished: true
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
          <h1 className="text-2xl font-bold">Blog Management</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {showForm ? 'Cancel' : 'Create New Blog'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingItem ? 'Edit Blog' : 'Create New Blog'}
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
                    onBlur={generateSlug}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Slug (URL)</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="auto-generated-from-title"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty to auto-generate from title</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Author *</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.tags.join(', ')}
                    onChange={handleTagsChange}
                    placeholder="e.g., Education, Technology, News"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Content *</label>
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
                  className="h-96 mb-12"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Featured Image</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full"
                />
                {editingItem && editingItem.imageUrl && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                    <img
                      src={editingItem.imageUrl}
                      alt={editingItem.title}
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Meta Title (SEO)</label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Leave empty to use title"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center mt-6">
                    <input
                      type="checkbox"
                      name="isPublished"
                      checked={formData.isPublished}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Published</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Meta Description (SEO)</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description for search engines (150-160 characters)"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  {editingItem ? 'Update' : 'Publish'}
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

        <div className="space-y-6">
          {blogs.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-lg">
              <p className="text-gray-500">No blogs found. Create your first blog post!</p>
            </div>
          ) : (
            blogs.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="md:flex">
                  {item.imageUrl && (
                    <div className="md:w-48 h-48">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <div 
                          className="text-gray-600 mb-4 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: item.content.substring(0, 150) + '...' }}
                        />
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {item.author}</span>
                          <span>•</span>
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                          {item.readTime > 0 && (
                            <>
                              <span>•</span>
                              <span>{item.readTime} min read</span>
                            </>
                          )}
                          <span className={`px-2 py-1 rounded text-xs ${
                            item.isPublished ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {item.isPublished ? 'Published' : 'Draft'}
                          </span>
                        </div>
                        {item.tags && item.tags.length > 0 && (
                          <div className="mt-2">
                            {item.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-block bg-gray-200 rounded px-2 py-1 text-xs mr-2"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
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
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;