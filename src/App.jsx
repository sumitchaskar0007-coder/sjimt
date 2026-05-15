import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
import Application from './pages/Application.jsx';
// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingEnquiryButton from './components/FloatingEnquiryButton.jsx';
import EnquiryModal from './components/EnquiryModal.jsx';
import ProtectedRoute from './components/ProtectedRoute';

// Public pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Admission from './pages/Admission.jsx';
import Academics from './pages/Academics.jsx';
import Gallery from './pages/Gallery.jsx';
import Announcement from './pages/Announcement.jsx';
import Career from './pages/Career.jsx';
import LegalAid from './pages/LegalAid.jsx';
import Library from './pages/Library.jsx';
import MootCourt from './pages/MootCourt.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Facilities from './pages/Facilities.jsx';
import UdanBook from "./pages/UdanBook";
import Grievance from './pages/Grievance.jsx';
import Feedback from './pages/Feedback.jsx';
import Notice from './pages/Notice.jsx'; // Added missing import
import BlogList from './pages/Blog';
import { BlogPost } from './pages/Blog';
// Admin pages
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import GalleryAdmin from './pages/admin/GalleryAdmin.jsx';
import AnnouncementAdmin from './pages/admin/AnnouncementAdmin.jsx';
import CareerAdmin from './pages/admin/CareerAdmin.jsx';
import NoticeAdmin from './pages/admin/NoticeAdmin.jsx'; // Added missing import
import BlogAdmin from './pages/admin/BlogAdmin.jsx'; // Added missing import

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = React.useState(false);

  return (
    // <AuthProvider>
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <Header onEnquiryClick={() => setEnquiryOpen(true)} />

        {/* Main Routes */}
        <main className="flex-1">
          <Routes>
            {/* ---------------- PUBLIC ROUTES ---------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/announcements" element={<Announcement />} /> {/* Added alias for consistency */}
            <Route path="/careers" element={<Career />} />
            <Route path="/notices" element={<Notice />} /> {/* Added Notice route */}
           
<Route path="/blogs" element={<BlogList />} />
<Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/legalaid" element={<LegalAid />} />
            <Route path="/library" element={<Library />} />
            <Route path="/moot" element={<MootCourt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/udan/:id" element={<UdanBook />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/application" element={<Application />} />

            {/* ---------------- ADMIN ROUTES ---------------- */}
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/gallery"
              element={
                <ProtectedRoute>
                  <GalleryAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/announcements"
              element={
                <ProtectedRoute>
                  <AnnouncementAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/careers"
              element={
                <ProtectedRoute>
                  <CareerAdmin />
                </ProtectedRoute>
              }
            />

            {/* New Admin Routes */}
            <Route
              path="/admin/notices"
              element={
                <ProtectedRoute>
                  <NoticeAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              }
            />

            {/* ---------------- REDIRECTS ---------------- */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Enquiry Button */}
        <FloatingEnquiryButton onClick={() => setEnquiryOpen(true)} />

        {/* Enquiry Modal */}
        <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      </div>
    // </AuthProvider>
  );
}