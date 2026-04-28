import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await blogAPI.getAll();
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const allTags = ['all', ...new Set(blogs.flatMap(blog => blog.tags || []))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || (blog.tags && blog.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 font-light">
            Insights, stories, and updates from our team
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          
          {allTags.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedTag === tag
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag === 'all' ? 'All Posts' : tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog.slug}`}
                className="group block"
              >
                <article className="border-b border-gray-100 pb-8 hover:border-gray-300 transition-colors">
                  {blog.imageUrl && (
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                      {blog.readTime && (
                        <>
                          <span>•</span>
                          <span>{blog.readTime} min read</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {blog.content.replace(/<[^>]*>/g, '').substring(0, 160)}...
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-900 font-medium">By {blog.author}</span>
                    </div>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {blog.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedTag(tag);
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Individual Blog Post Component
const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await blogAPI.getBySlug(slug);
        setBlog(response.data);
        document.title = response.data.metaTitle || response.data.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', response.data.metaDescription || response.data.content.substring(0, 160));
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title;
    
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading article...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link to="/blogs" className="text-blue-600 hover:underline">Back to blogs</Link>
        </div>
      </div>
    );
  }

  // Process content with custom formatting
  const processContent = (content) => {
    // Add drop cap to first paragraph
    const paragraphs = content.split('\n\n');
    if (paragraphs.length > 0) {
      const firstPara = paragraphs[0];
      paragraphs[0] = `<div class="drop-cap">${firstPara}</div>`;
    }
    
    // Process blockquotes
    let processed = paragraphs.join('</p><p>');
    processed = processed.replace(/\[quote\](.*?)\[\/quote\]/g, '<blockquote>$1</blockquote>');
    processed = processed.replace(/\[highlight\](.*?)\[\/highlight\]/g, '<div class="highlight-box">$1</div>');
    
    return processed;
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gray-900 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative">
          {blog.imageUrl && (
            <div className="h-[50vh] md:h-[60vh] overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className={`max-w-3xl mx-auto px-6 ${blog.imageUrl ? '-mt-20 md:-mt-32' : 'pt-16'}`}>
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <div className="mb-6">
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map(tag => (
                      <span key={tag} className="text-sm text-gray-500">#{tag}</span>
                    ))}
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                  {blog.title}
                </h1>
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-medium text-gray-900">By {blog.author}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      {blog.readTime && ` · ${blog.readTime} min read`}
                    </div>
                  </div>
                  
                  {/* Share Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.52 3.48C18.33 1.29 15.3 0 12 0 5.37 0 0 5.37 0 12c0 2.11.55 4.19 1.6 6.01L0 24l6.07-1.6c1.76.95 3.74 1.45 5.76 1.45 6.63 0 12-5.37 12-12 0-3.3-1.29-6.33-3.48-8.52zM12 21.6c-1.79 0-3.55-.48-5.08-1.39l-.36-.21-3.6.96.96-3.55-.22-.38C2.55 15.37 2 13.74 2 12 2 6.48 6.48 2 12 2c2.66 0 5.16 1.04 7.04 2.92S22 9.34 22 12c0 5.52-4.48 10-10 10z"/>
                        <path d="M17.41 14.45c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.51.64-.63.77-.12.13-.24.14-.44.05-.2-.1-.85-.31-1.62-.99-.6-.54-1-1.2-1.12-1.4-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.21.2-.35.07-.14.03-.26-.02-.36-.05-.1-.45-1.09-.62-1.49-.16-.39-.32-.34-.45-.34-.12 0-.25-.01-.39-.01-.13 0-.35.05-.54.24-.19.19-.73.71-.73 1.74 0 1.03.75 2.03.85 2.17.1.14 1.47 2.24 3.56 3.14.5.21.89.34 1.19.44.5.16.95.13 1.31.08.4-.05 1.17-.48 1.34-.94.17-.46.17-.85.12-.93-.05-.08-.18-.13-.38-.23z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div 
            className="blog-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: `
                <style>
                  .blog-content {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    line-height: 1.7;
                    color: #222;
                  }
                  .blog-content .drop-cap:first-child:first-letter {
                    font-size: 4.5em;
                    font-weight: 700;
                    float: left;
                    line-height: 0.8;
                    margin-right: 12px;
                    margin-top: 8px;
                    margin-bottom: 4px;
                    font-family: 'Georgia', 'Playfair Display', serif;
                    color: #000;
                  }
                  .blog-content h1, .blog-content h2, .blog-content h3 {
                    font-family: 'Georgia', 'Playfair Display', serif;
                    font-weight: 600;
                    margin-top: 2em;
                    margin-bottom: 0.5em;
                  }
                  .blog-content h1 { font-size: 2.5em; }
                  .blog-content h2 { font-size: 1.8em; }
                  .blog-content h3 { font-size: 1.4em; }
                  .blog-content p {
                    margin-bottom: 1.5em;
                  }
                  .blog-content ul, .blog-content ol {
                    margin: 1.5em 0;
                    padding-left: 1.5em;
                  }
                  .blog-content li {
                    margin-bottom: 0.5em;
                  }
                  .blog-content blockquote {
                    border-left: 4px solid #000;
                    margin: 2em 0;
                    padding: 1em 0 1em 2em;
                    font-style: italic;
                    font-size: 1.2em;
                    font-family: 'Georgia', serif;
                    color: #444;
                  }
                  .blog-content .highlight-box {
                    background: #fef9e6;
                    border-left: 4px solid #f5a623;
                    padding: 1.5em;
                    margin: 2em 0;
                    border-radius: 8px;
                  }
                  .blog-content img {
                    width: 100%;
                    border-radius: 12px;
                    margin: 2em 0;
                  }
                  .blog-content hr {
                    margin: 3em 0;
                    border: none;
                    border-top: 1px solid #eaeaea;
                  }
                  @media (max-width: 768px) {
                    .blog-content {
                      font-size: 16px;
                    }
                    .blog-content h1 { font-size: 2em; }
                    .blog-content h2 { font-size: 1.5em; }
                  }
                </style>
                ${processContent(blog.content)}
              `
            }}
          />

          {/* Divider */}
          <hr className="my-12 border-gray-100" />

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a school visit or contact us for more information about our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Book a School Visit
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-600">
                  {blog.author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Written by {blog.author}</div>
                <p className="text-sm text-gray-500 mt-1">
                  Expert insights and analysis from our team of education professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export { BlogList as default, BlogPost };