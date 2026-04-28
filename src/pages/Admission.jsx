import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Calendar,
  Download,
  FileText,
  Award,
  Clock,
  CheckCircle,
  Users,
  BookOpen,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Percent,
  Bookmark,
  X,
  Loader2,
  GraduationCap,
  BarChart,
  Briefcase
} from 'lucide-react'

const EnquiryModal = ({ isOpen, onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: 'MBA',
    specialization: '',
    year: '2026',
    message: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    graduationBoard: '',
    graduationPercentage: '',
    graduationYear: '',
    tenthBoard: '',
    tenthPercentage: '',
    twelfthBoard: '',
    twelfthPercentage: '',
    category: 'General',
    dateOfBirth: '',
    gender: 'Male',
    guardianName: '',
    guardianPhone: '',
    workExperience: '',
    entranceExam: '',
    entranceScore: '',
    howDidYouHear: 'Website'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formType, setFormType] = useState(type || 'enquiry')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    onSubmit(formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: 'MBA',
      specialization: '',
      year: '2026',
      message: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      graduationBoard: '',
      graduationPercentage: '',
      graduationYear: '',
      tenthBoard: '',
      tenthPercentage: '',
      twelfthBoard: '',
      twelfthPercentage: '',
      category: 'General',
      dateOfBirth: '',
      gender: 'Male',
      guardianName: '',
      guardianPhone: '',
      workExperience: '',
      entranceExam: '',
      entranceScore: '',
      howDidYouHear: 'Website'
    })
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  const handleSwitchForm = (newType) => {
    setFormType(newType)
    setIsSubmitted(false)
  }

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full mx-auto animate-fadeIn">
          <div className="p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You for Your {formType === 'admission' ? 'Application' : 'Enquiry'}!
            </h3>
            <p className="text-gray-600 mb-6">
              {formType === 'admission'
                ? 'Your application for MBA/MCA program has been submitted. Our admission team will review your details and contact you within 2-3 working days.'
                : 'Your enquiry has been received. Our team will get back to you within 24 hours with detailed information about our MBA/MCA programs.'
              }
            </p>
            <div className="space-y-4">
              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  handleSwitchForm(formType === 'admission' ? 'enquiry' : 'admission')
                }}
                className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Submit {formType === 'admission' ? 'Another Enquiry' : 'Admission Application'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-auto my-8 animate-fadeIn">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {formType === 'admission' ? 'Apply Now - MBA/MCA Programs' : 'Admission Enquiry'}
            </h3>
            <p className="text-gray-600 mt-1">
              {formType === 'admission'
                ? 'Fill out the application form for 2026 admissions (Graduates)'
                : 'Get detailed information about our MBA / MCA programs'
              }
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Type Switcher */}
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => handleSwitchForm('enquiry')}
              className={`flex-1 py-4 text-center font-medium transition-colors ${formType === 'enquiry'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Quick Enquiry
            </button>
            <button
              onClick={() => handleSwitchForm('admission')}
              className={`flex-1 py-4 text-center font-medium transition-colors ${formType === 'admission'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Full Application
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Personal Information</h4>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="+91 92707 98590"
                />
              </div>

              {formType === 'admission' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Academic & Program Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Program Information</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program Interested *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="MBA">Master of Business Administration (MBA)</option>
                  <option value="MCA">Master of Computer Applications (MCA)</option>
                </select>
              </div>

              {formData.course === 'MBA' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Specialization *
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Select Specialization</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Operations">Operations</option>
                    <option value="Business Analytics">Business Analytics</option>
                  </select>
                </div>
              )}

              {formData.course === 'MCA' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Specialization *
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Select Specialization</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Year *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="2026">2026-27 (2-Year Program)</option>
                  <option value="2025">2025-26 (2-Year Program)</option>
                </select>
              </div>

              {formType === 'admission' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Entrance Exam Taken *
                    </label>
                    <select
                      name="entranceExam"
                      value={formData.entranceExam}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="">Select Entrance Exam</option>
                      <option value="CAT">CAT</option>
                      <option value="MAT">MAT</option>
                      <option value="XAT">XAT</option>
                      <option value="CMAT">CMAT</option>
                      <option value="MAH-MBA-CET">MAH-MBA-CET</option>
                      <option value="MAH-MCA-CET">MAH-MCA-CET</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Entrance Score / Percentile *
                    </label>
                    <input
                      type="text"
                      name="entranceScore"
                      value={formData.entranceScore}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="e.g., 85 percentile or 650 score"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Educational Qualifications for Admission Form */}
            {formType === 'admission' && (
              <>
                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-gray-900">Educational Qualifications</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        10th Board *
                      </label>
                      <input
                        type="text"
                        name="tenthBoard"
                        value={formData.tenthBoard}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="10th Board Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        10th Percentage *
                      </label>
                      <input
                        type="text"
                        name="tenthPercentage"
                        value={formData.tenthPercentage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 85% or 8.5 CGPA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        12th Board *
                      </label>
                      <input
                        type="text"
                        name="twelfthBoard"
                        value={formData.twelfthBoard}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="12th Board Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        12th Percentage *
                      </label>
                      <input
                        type="text"
                        name="twelfthPercentage"
                        value={formData.twelfthPercentage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 78% or 7.8 CGPA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Board/University *
                      </label>
                      <input
                        type="text"
                        name="graduationBoard"
                        value={formData.graduationBoard}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="University Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Percentage *
                      </label>
                      <input
                        type="text"
                        name="graduationPercentage"
                        value={formData.graduationPercentage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 65% or 6.5 CGPA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Year *
                      </label>
                      <input
                        type="text"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 2024"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Experience (if any)
                      </label>
                      <input
                        type="text"
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 2 years in IT"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-gray-900">Address Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter complete address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>

                {/* Guardian Information */}
                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-gray-900">Guardian Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Guardian's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Phone *
                      </label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Guardian's phone number"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="General">General</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                    <option value="EWS">EWS</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </>
            )}

            {/* Message/Enquiry */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formType === 'admission' ? 'Additional Information' : 'Your Enquiry *'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required={formType === 'enquiry'}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={
                  formType === 'admission'
                    ? 'Any additional information or questions about MBA/MCA programs...'
                    : 'Please describe your enquiry about MBA/MCA programs...'
                }
              />
            </div>

            {/* How did you hear about us */}
            {formType === 'admission' && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us? *
                </label>
                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="Website">College Website</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Newspaper">Newspaper Advertisement</option>
                  <option value="Friend">Friend/Relative</option>
                  <option value="Seminar">Educational Seminar</option>
                  <option value="College">College Placement Cell</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                `Submit ${formType === 'admission' ? 'Application' : 'Enquiry'}`
              )}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our Privacy Policy and consent to being contacted by our admission team.
          </p>
        </form>
      </div>
    </div>
  )
}

export default function Admissions() {
  const [openSections, setOpenSections] = useState({
    admissionProcess: true,
    documentsRequired: false,
    feeStructure: false,
    scholarships: false,
    rules: false
  })

  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [modalType, setModalType] = useState('') // 'admission' or 'enquiry'

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleEnquiryClick = (type = 'enquiry') => {
    setModalType(type)
    setShowEnquiryModal(true)
  }

  const handleApplyNowClick = () => {
    setModalType('admission')
    setShowEnquiryModal(true)
  }

  const handleCloseModal = () => {
    setShowEnquiryModal(false)
    setModalType('')
  }

  const handleSubmitEnquiry = (formData) => {
    // Handle form submission logic here
    // You can make API calls here
    // Example: axios.post('/api/admissions', formData)
    handleCloseModal()
  }

  const admissionCards = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "2026 Admissions Open",
      description: "Apply for MBA (Master of Business Administration) and MCA (Master of Computer Applications) programs for the academic year 2026-27.",
      cta: "Apply Now",
      onClick: handleApplyNowClick,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download Prospectus",
      description: "Complete admission guide with fee structure, eligibility criteria, and program details for MBA/MCA.",
      cta: "Download PDF",
      onClick: () => window.open('/assets/prospectus.pdf', '_blank'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Admission Enquiry",
      description: "Mon-Sat: 10:00 AM - 5:00 PM | Get personalized counseling for MBA/MCA programs.",
      cta: "Enquire Now",
      onClick: () => handleEnquiryClick('enquiry'),
      color: "from-purple-500 to-purple-600"
    }
  ]

  const feeStructure = [
    { category: "Maharashtra State Students", tuition: "₹95,000 per year", development: "₹25,000", total: "₹1,20,000" },
    { category: "Outside Maharashtra Students", tuition: "₹1,30,000 per year", development: "₹30,000", total: "₹1,60,000" },
    { category: "NRI/Foreign Students", tuition: "$2,500 per year", development: "$500", total: "$3,000" }
  ]

  const scholarshipCategories = [
    {
      name: "Merit-Based Scholarships",
      details: [
        "75% and above in Graduation: 25% tuition fee waiver for first year",
        "70-74% in Graduation: 15% fee concession",
        "65-69% in Graduation: 10% fee concession",
        "Top 10 percentile in entrance exam: Up to 50% scholarship"
      ]
    },
    {
      name: "Social Welfare Scholarships",
      details: [
        "SC/ST students: Full fee reimbursement as per Govt. norms",
        "OBC/EBC students: Fee concession as per state policy",
        "Economically weaker sections: Special financial aid",
        "Women candidates: Additional 10% scholarship"
      ]
    },
    {
      name: "Special Category Scholarships",
      details: [
        "Children of armed forces personnel: 20% concession",
        "Sports achievers (National/State level): Up to 40% fee waiver",
        "Outstanding work experience (3+ years): 15% scholarship",
        "Physically challenged candidates: 25% scholarship"
      ]
    }
  ]

  const rulesRegulations = [
    {
      title: "Academic Regulations",
      points: [
        "Minimum 75% attendance mandatory for all subjects",
        "Internal assessment carries 40% weightage",
        "End-semester examination carries 60% weightage",
        "Minimum 45% marks required to pass each subject",
        "2-year program follows semester pattern with 4 semesters"
      ]
    },
    {
      title: "Conduct & Discipline",
      points: [
        "Strict anti-ragging policy as per Supreme Court guidelines",
        "Professional dress code for corporate events and seminars",
        "Mobile phone usage restricted in classrooms",
        "Zero tolerance for substance abuse on campus",
        "Regular attendance in all co-curricular activities"
      ]
    },
    {
      title: "Examination Rules",
      points: [
        "Valid college ID card mandatory for all examinations",
        "No revaluation for internal assessment marks",
        "Medical certificate required for absentees",
        "University pattern followed for all evaluations",
        "Continuous assessment throughout the program"
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>MBA & MCA Admissions 2026 | Institute of Management & Computer Studies Pune | MBA/MCA Admissions</title>
        <meta
          name="description"
          content="Apply for MBA and MCA programs at Institute of Management & Computer Studies Pune. Check admission process, documents required, fee structure, scholarships, and eligibility for 2026 batch."
        />
        <meta name="keywords" content="MBA admission 2026, MCA admission 2026, MBA colleges Pune, MCA colleges Pune, MBA fees, MCA fees, management admission, computer applications admission" />
        <link rel="canonical" href="https://www.imcs-pune.edu.in/admissions" />
      </Helmet>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={showEnquiryModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitEnquiry}
        type={modalType}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">AICTE Approved</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MBA & MCA <span className="text-yellow-300">Admissions 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Elevate Your Career with Industry-Focused Management and Computer Applications Programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleApplyNowClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply Now for 2026
              </button>
              <a
                href="/assets/prospectus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 inline-block text-center"
              >
                Download Prospectus
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Quick Action Cards - Equal Height */}
      <section className="py-16 bg-gray-50 -mt-2">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {admissionCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:transform hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{card.description}</p>
                  {card.title === "Download Prospectus" ? (
                    <a
                      href="/assets/prospectus.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group/btn mt-auto text-center"
                    >
                      {card.cta}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={card.onClick}
                      className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group/btn mt-auto"
                    >
                      {card.cta}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('admissionProcess')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Admission Process</h3>
                </div>
                {openSections.admissionProcess ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>

              {openSections.admissionProcess && (
                <div className="px-6 pb-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria (Graduates)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 h-full">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-blue-800">MBA Program Eligibility</h5>
                            <p className="text-blue-700 mt-1">
                              Bachelor's degree in any discipline with minimum 50% aggregate marks (45% for reserved categories) from a recognized university. Valid score in MAH-MBA-CET/CAT/MAT/XAT/CMAT is mandatory.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 h-full">
                        <div className="flex items-start gap-3">
                          <BarChart className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-green-800">MCA Program Eligibility</h5>
                            <p className="text-green-700 mt-1">
                              Bachelor's degree in any discipline with Mathematics at 10+2 or graduation level with minimum 50% aggregate marks (45% for reserved categories). Valid score in MAH-MCA-CET is mandatory.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Application Submission",
                        description: "Fill online application form on college website with academic details and entrance exam scores."
                      },
                      {
                        step: "2",
                        title: "Merit List & Selection",
                        description: "Based on entrance exam scores, graduation marks, and work experience (if any)."
                      },
                      {
                        step: "3",
                        title: "Group Discussion & Personal Interview",
                        description: "Shortlisted candidates will be called for GD & PI rounds conducted at the campus."
                      },
                      {
                        step: "4",
                        title: "Document Verification",
                        description: "Submit original documents for verification including graduation marksheets, entrance scorecard, and other certificates."
                      },
                      {
                        step: "5",
                        title: "Fee Payment & Admission Confirmation",
                        description: "Pay the admission fee to confirm your seat and complete enrollment."
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="font-semibold text-orange-800 mb-3">Program Highlights</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-orange-700 mb-2 flex items-center gap-2"><Briefcase className="h-4 w-4" /> MBA (Master of Business Administration)</h5>
                        <ul className="space-y-1 text-orange-600">
                          <li>• Specializations: Marketing, Finance, HR, Operations, Business Analytics</li>
                          <li>• Dual specialization option available</li>
                          <li>• Industry-integrated curriculum with live projects</li>
                          <li>• Corporate mentorship program</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-700 mb-2 flex items-center gap-2"><BarChart className="h-4 w-4" /> MCA (Master of Computer Applications)</h5>
                        <ul className="space-y-1 text-orange-600">
                          <li>• Specializations: Full Stack, Data Science, Cloud Computing, Cyber Security, AI/ML</li>
                          <li>• State-of-the-art computing labs</li>
                          <li>• Industry certification programs integrated</li>
                          <li>• Capstone project with corporate partners</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('documentsRequired')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Documents Required</h3>
                </div>
                {openSections.documentsRequired ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>

              {openSections.documentsRequired && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4 h-full">
                      <h4 className="font-semibold text-gray-900 text-lg">Academic Documents</h4>
                      <div className="space-y-3">
                        {[
                          "10th Standard Mark sheet & Passing Certificate",
                          "12th Standard Mark sheet & Passing Certificate",
                          "Graduation all years mark sheets & Degree Certificate",
                          "Entrance Exam Score Card (CAT/MAT/XAT/CMAT/MAH-CET)",
                          "Transfer Certificate from last attended institution",
                          "Migration Certificate (if from other university)",
                          "Gap Certificate (if applicable)"
                        ].map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 h-full">
                      <h4 className="font-semibold text-gray-900 text-lg">Personal & Other Documents</h4>
                      <div className="space-y-3">
                        {[
                          "Aadhaar Card (Student & Parents)",
                          "Domicile Certificate (for Maharashtra students)",
                          "Caste Certificate & Validity (for reserved category)",
                          "Non-Creamy Layer Certificate (if applicable)",
                          "Income Certificate (for EWS category)",
                          "Work Experience Certificate (if applicable)",
                          "Passport size photographs (8 copies)",
                          "PAN Card (for scholarship purposes)"
                        ].map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <p className="text-yellow-800 text-center">
                      <strong>Important:</strong> All documents must be submitted in original for verification along with two attested photocopies. Self-attested copies will not be accepted. Students in final year of graduation can apply with last available mark sheets.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <DollarSign className="h-6 w-6 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-900">
            Fee Structure (FRA Approved)
          </h3>
        </div>

        <a
          href="/assets/pdf/fee.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
        >
          View Fee Structure PDF
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Scholarships & Freeships - Equal Height Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('scholarships')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Percent className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Scholarships for Graduate Students</h3>
                </div>
                {openSections.scholarships ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>

              {openSections.scholarships && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {scholarshipCategories.map((scholarship, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="h-6 w-6 text-blue-600" />
                          <h4 className="font-bold text-gray-900">{scholarship.name}</h4>
                        </div>
                        <ul className="space-y-2 flex-grow">
                          {scholarship.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">Important Information</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>Scholarship applications must be submitted within 30 days of admission</li>
                      <li>Scholarships are renewable annually based on academic performance</li>
                      <li>Students must maintain minimum 75% attendance and 6.5 CGPA to continue scholarships</li>
                      <li>Multiple scholarship benefits cannot be combined</li>
                      <li>Scholarship disbursement is done at beginning of each academic year</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Regulations - Equal Height Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('rules')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Program Rules & Regulations</h3>
                </div>
                {openSections.rules ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>

              {openSections.rules && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {rulesRegulations.map((rule, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <Bookmark className="h-5 w-5 text-blue-600" />
                          <h4 className="font-bold text-gray-900">{rule.title}</h4>
                        </div>
                        <ul className="space-y-3 flex-grow">
                          {rule.points.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                                {idx + 1}
                              </div>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-semibold text-red-800 mb-3">Important Regulations</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Academic Integrity</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Plagiarism in assignments leads to suspension</li>
                          <li>• Use of unfair means in exams results in cancellation</li>
                          <li>• Fabrication of documents leads to rustication</li>
                          <li>• Minimum attendance mandatory for all semesters</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Code of Conduct</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Smoking and alcohol strictly prohibited</li>
                          <li>• Mobile phones prohibited in examination halls</li>
                          <li>• Damage to college property must be compensated</li>
                          <li>• Regular participation in co-curricular activities mandatory</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}