// Application.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Application.css';

const API_URL = import.meta.env.VITE_API_URL;

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    academicYear: { start: '', end: '' },
    courseApplied: '',
    medium: '',
    surname: '',
    firstName: '',
    fatherName: '',
    nameInDevnagari: '',
    motherName: '',
    sex: '',
    nameChange: '',
    dateOfBirth: '',
    maritalStatus: '',
    bloodGroup: '',
    motherTongue: '',
    nationality: '',
    religion: '',
    maharashtrian: '',
    aadharCardNo: '',
    cast: '',
    category: '',
    creamyLayer: '',
    otherLanguages: '',
    presentAddress: '',
    presentAddressPin: '',
    permanentAddress: '',
    permanentAddressPin: '',
    studentContact: '',
    phone1: '',
    phone2: '',
    emailId: '',
    subjectsOffered: '',
    lastCollegeName: '',
    lastCollegeAddress: '',
    academicRecords: [
      { examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' }
    ],
    applicantSignature: '',
    parentSignature: '',
    applicationDate: ''
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { number: 1, title: 'Course Details', icon: '📚' },
    { number: 2, title: 'Personal Info', icon: '👤' },
    { number: 3, title: 'Address & Contact', icon: '📍' },
    { number: 4, title: 'Academic Records', icon: '🎓' },
    { number: 5, title: 'Declaration', icon: '📝' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAcademicRecordChange = (index, field, value) => {
    const updatedRecords = [...formData.academicRecords];
    updatedRecords[index] = { ...updatedRecords[index], [field]: value };
    setFormData(prev => ({
      ...prev,
      academicRecords: updatedRecords
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch(step) {
      case 1:
        if (!formData.courseApplied) newErrors.courseApplied = 'Course is required';
        if (!formData.medium) newErrors.medium = 'Medium is required';
        if (!formData.academicYear.start || !formData.academicYear.end) {
          newErrors.academicYear = 'Academic year is required';
        }
        break;

      case 2:
        if (!formData.surname) newErrors.surname = 'Surname is required';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.fatherName) newErrors.fatherName = 'Father\'s name is required';
        if (!formData.sex) newErrors.sex = 'Sex is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        break;

      case 3:
        if (!formData.presentAddress) newErrors.presentAddress = 'Present address is required';
        if (!formData.presentAddressPin) newErrors.presentAddressPin = 'PIN code is required';
        if (!formData.permanentAddress) newErrors.permanentAddress = 'Permanent address is required';
        if (!formData.permanentAddressPin) newErrors.permanentAddressPin = 'PIN code is required';
        if (!formData.studentContact) newErrors.studentContact = 'Contact number is required';
        if (!formData.emailId) newErrors.emailId = 'Email is required';
        break;

      case 4:
        formData.academicRecords.forEach((record, index) => {
          if (index === 0 && !record.examination) {
            newErrors[`academic_${index}`] = 'At least first record is required';
          }
        });
        break;

      case 5:
        if (!formData.applicantSignature) newErrors.applicantSignature = 'Applicant signature is required';
        if (!formData.parentSignature) newErrors.parentSignature = 'Parent signature is required';
        if (!formData.applicationDate) newErrors.applicationDate = 'Date is required';
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API_URL}/admission/submit`, formData);
      
      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: '✓ Application submitted successfully!'
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: '✗ ' + (error.response?.data?.message || 'Error submitting application. Please try again.')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="form-progress">
      <div className="progress-steps">
        {steps.map((step) => (
          <div 
            key={step.number} 
            className={`step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
          >
            <div className="step-icon">
              {currentStep > step.number ? '✓' : step.icon}
            </div>
            <span className="step-label">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="form-section">
      <h3>
        <span>📚</span>
        Course Details
      </h3>
      
      <div className="form-group required">
        <label>Academic Year</label>
        <div className="academic-year">
          <input 
            type="text" 
            placeholder="YY" 
            value={formData.academicYear.start}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              academicYear: { ...prev.academicYear, start: e.target.value }
            }))}
            maxLength="2"
            className={`form-control year-input ${errors.academicYear ? 'error' : ''}`}
          />
          <span>–</span>
          <input 
            type="text" 
            placeholder="YY" 
            value={formData.academicYear.end}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              academicYear: { ...prev.academicYear, end: e.target.value }
            }))}
            maxLength="2"
            className={`form-control year-input ${errors.academicYear ? 'error' : ''}`}
          />
        </div>
        {errors.academicYear && <div className="helper-text error">{errors.academicYear}</div>}
      </div>

      <div className="form-group required">
        <label>Course Applied For</label>
        <input 
          type="text" 
          name="courseApplied" 
          value={formData.courseApplied}
          onChange={handleChange}
          className={`form-control capital-input ${errors.courseApplied ? 'error' : ''}`}
          placeholder="Enter course name in capital letters"
          required
        />
        {errors.courseApplied && <div className="helper-text error">{errors.courseApplied}</div>}
      </div>

      <div className="form-group required">
        <label>Medium</label>
        <div className="radio-group">
          <label className="radio-label">
            <input 
              type="radio" 
              name="medium" 
              value="English"
              checked={formData.medium === 'English'}
              onChange={handleChange}
            />
            <span>English</span>
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="medium" 
              value="Marathi"
              checked={formData.medium === 'Marathi'}
              onChange={handleChange}
            />
            <span>Marathi</span>
          </label>
        </div>
        {errors.medium && <div className="helper-text error">{errors.medium}</div>}
      </div>

      <div className="instructions">
        <h4>
          <span>📋</span>
          Instructions for filling form
        </h4>
        <ul>
          <li>TO BE FILLED BY THE APPLICANT IN HIS/HER OWN HANDWRITING</li>
          <li>PLEASE FILL THE FORM IN CAPITAL LETTERS</li>
          <li>INCOMPLETE FORM WILL BE REJECTED</li>
          <li>WRITE NAME AS PER 12th MARK SHEET</li>
        </ul>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-section">
      <h3>
        <span>👤</span>
        Personal Details
      </h3>
      
      <div className="form-row">
        <div className="form-group required">
          <label>Surname</label>
          <input 
            type="text" 
            name="surname" 
            value={formData.surname}
            onChange={handleChange}
            className={`form-control capital-input ${errors.surname ? 'error' : ''}`}
            required
          />
          {errors.surname && <div className="helper-text error">{errors.surname}</div>}
        </div>
        
        <div className="form-group required">
          <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            className={`form-control capital-input ${errors.firstName ? 'error' : ''}`}
            required
          />
          {errors.firstName && <div className="helper-text error">{errors.firstName}</div>}
        </div>
        
        <div className="form-group required">
          <label>Father's/Husband's Name</label>
          <input 
            type="text" 
            name="fatherName" 
            value={formData.fatherName}
            onChange={handleChange}
            className={`form-control capital-input ${errors.fatherName ? 'error' : ''}`}
            required
          />
          {errors.fatherName && <div className="helper-text error">{errors.fatherName}</div>}
        </div>
      </div>

      <div className="form-group">
        <label>Name in Devnagari</label>
        <input 
          type="text" 
          name="nameInDevnagari" 
          value={formData.nameInDevnagari}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Mother's Name</label>
        <input 
          type="text" 
          name="motherName" 
          value={formData.motherName}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-row">
        <div className="form-group required">
          <label>Sex</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="sex" 
                value="Male"
                checked={formData.sex === 'Male'}
                onChange={handleChange}
              />
              <span>Male</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="sex" 
                value="Female"
                checked={formData.sex === 'Female'}
                onChange={handleChange}
              />
              <span>Female</span>
            </label>
          </div>
          {errors.sex && <div className="helper-text error">{errors.sex}</div>}
        </div>
        
        <div className="form-group">
          <label>If Name Changed</label>
          <input 
            type="text" 
            name="nameChange" 
            value={formData.nameChange}
            onChange={handleChange}
            className="form-control"
            placeholder="Previous name if changed"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group required">
          <label>Date of Birth</label>
          <input 
            type="date" 
            name="dateOfBirth" 
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`form-control ${errors.dateOfBirth ? 'error' : ''}`}
            required
          />
          {errors.dateOfBirth && <div className="helper-text error">{errors.dateOfBirth}</div>}
        </div>
        
        <div className="form-group required">
          <label>Marital Status</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="maritalStatus" 
                value="Married"
                checked={formData.maritalStatus === 'Married'}
                onChange={handleChange}
              />
              <span>Married</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="maritalStatus" 
                value="Unmarried"
                checked={formData.maritalStatus === 'Unmarried'}
                onChange={handleChange}
              />
              <span>Unmarried</span>
            </label>
          </div>
          {errors.maritalStatus && <div className="helper-text error">{errors.maritalStatus}</div>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Blood Group</label>
          <input 
            type="text" 
            name="bloodGroup" 
            value={formData.bloodGroup}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g., O+, A+"
          />
        </div>
        
        <div className="form-group">
          <label>Mother Tongue</label>
          <input 
            type="text" 
            name="motherTongue" 
            value={formData.motherTongue}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Nationality</label>
          <input 
            type="text" 
            name="nationality" 
            value={formData.nationality}
            onChange={handleChange}
            className="form-control"
            placeholder="Indian"
          />
        </div>
        
        <div className="form-group">
          <label>Religion</label>
          <input 
            type="text" 
            name="religion" 
            value={formData.religion}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Maharashtrian</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="maharashtrian" 
                value="Maharashtrian"
                checked={formData.maharashtrian === 'Maharashtrian'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="maharashtrian" 
                value="Non-Maharashtrian"
                checked={formData.maharashtrian === 'Non-Maharashtrian'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label>Aadhar Card No.</label>
          <input 
            type="text" 
            name="aadharCardNo" 
            value={formData.aadharCardNo}
            onChange={handleChange}
            className="form-control"
            pattern="[0-9]{12}"
            maxLength="12"
            title="Please enter 12 digit Aadhar number"
            placeholder="12-digit Aadhar number"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cast</label>
          <input 
            type="text" 
            name="cast" 
            value={formData.cast}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label>Category</label>
          <select 
            name="category" 
            value={formData.category}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Category</option>
            <option value="Open">Open</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="NT">NT</option>
            <option value="NT(B)">NT(B)</option>
            <option value="NT(C)">NT(C)</option>
            <option value="NT(D)">NT(D)</option>
            <option value="OBC">OBC</option>
            <option value="SBC">SBC</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Belongs to Creamy Layer</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="creamyLayer" 
                value="Yes"
                checked={formData.creamyLayer === 'Yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="creamyLayer" 
                value="No"
                checked={formData.creamyLayer === 'No'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label>Other Languages Known</label>
          <input 
            type="text" 
            name="otherLanguages" 
            value={formData.otherLanguages}
            onChange={handleChange}
            className="form-control"
            placeholder="Comma separated"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-section">
      <h3>
        <span>📍</span>
        Address & Contact Details
      </h3>
      
      <div className="form-group required">
        <label>Present Address</label>
        <textarea 
          name="presentAddress" 
          value={formData.presentAddress}
          onChange={handleChange}
          className={`form-control ${errors.presentAddress ? 'error' : ''}`}
          rows="3"
          placeholder="Enter your current address"
        />
        {errors.presentAddress && <div className="helper-text error">{errors.presentAddress}</div>}
      </div>
      
      <div className="form-group required">
        <label>PIN Code</label>
        <input 
          type="text" 
          name="presentAddressPin" 
          value={formData.presentAddressPin}
          onChange={handleChange}
          className={`form-control ${errors.presentAddressPin ? 'error' : ''}`}
          maxLength="6"
          pattern="[0-9]{6}"
          placeholder="6-digit PIN code"
        />
        {errors.presentAddressPin && <div className="helper-text error">{errors.presentAddressPin}</div>}
      </div>
      
      <div className="form-group required">
        <label>Permanent Address</label>
        <textarea 
          name="permanentAddress" 
          value={formData.permanentAddress}
          onChange={handleChange}
          className={`form-control ${errors.permanentAddress ? 'error' : ''}`}
          rows="3"
          placeholder="Enter your permanent address"
        />
        {errors.permanentAddress && <div className="helper-text error">{errors.permanentAddress}</div>}
      </div>
      
      <div className="form-group required">
        <label>PIN Code</label>
        <input 
          type="text" 
          name="permanentAddressPin" 
          value={formData.permanentAddressPin}
          onChange={handleChange}
          className={`form-control ${errors.permanentAddressPin ? 'error' : ''}`}
          maxLength="6"
          pattern="[0-9]{6}"
          placeholder="6-digit PIN code"
        />
        {errors.permanentAddressPin && <div className="helper-text error">{errors.permanentAddressPin}</div>}
      </div>

      <div className="form-row">
        <div className="form-group required">
          <label>Student Contact</label>
          <input 
            type="tel" 
            name="studentContact" 
            value={formData.studentContact}
            onChange={handleChange}
            className={`form-control ${errors.studentContact ? 'error' : ''}`}
            pattern="[0-9]{10}"
            maxLength="10"
            placeholder="10-digit mobile number"
          />
          {errors.studentContact && <div className="helper-text error">{errors.studentContact}</div>}
        </div>
        
        <div className="form-group">
          <label>Alternate Phone 1</label>
          <input 
            type="tel" 
            name="phone1" 
            value={formData.phone1}
            onChange={handleChange}
            className="form-control"
            pattern="[0-9]{10}"
            maxLength="10"
            placeholder="10-digit number"
          />
        </div>
        
        <div className="form-group">
          <label>Alternate Phone 2</label>
          <input 
            type="tel" 
            name="phone2" 
            value={formData.phone2}
            onChange={handleChange}
            className="form-control"
            pattern="[0-9]{10}"
            maxLength="10"
            placeholder="10-digit number"
          />
        </div>
      </div>
      
      <div className="form-group required">
        <label>Email ID</label>
        <input 
          type="email" 
          name="emailId" 
          value={formData.emailId}
          onChange={handleChange}
          className={`form-control ${errors.emailId ? 'error' : ''}`}
          placeholder="your.email@example.com"
          required
        />
        {errors.emailId && <div className="helper-text error">{errors.emailId}</div>}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="form-section">
      <h3>
        <span>🎓</span>
        Academic Details
      </h3>
      
      <div className="form-group">
        <label>Subjects Offered</label>
        <input 
          type="text" 
          name="subjectsOffered" 
          value={formData.subjectsOffered}
          onChange={handleChange}
          className="form-control"
          placeholder="e.g., Physics, Chemistry, Mathematics"
        />
      </div>
      
      <div className="form-group">
        <label>Last College Name</label>
        <input 
          type="text" 
          name="lastCollegeName" 
          value={formData.lastCollegeName}
          onChange={handleChange}
          className="form-control"
          placeholder="Name of previously attended college"
        />
      </div>
      
      <div className="form-group">
        <label>Last College Address</label>
        <textarea 
          name="lastCollegeAddress" 
          value={formData.lastCollegeAddress}
          onChange={handleChange}
          className="form-control"
          rows="2"
          placeholder="Address of previously attended college"
        />
      </div>
      
      <h4>Academic Record</h4>
      <div className="table-responsive">
        <table className="academic-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Examination</th>
              <th>Board / University</th>
              <th>Year of Passing</th>
              <th>Percentage (%)</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num, index) => (
              <tr key={num}>
                <td>{num}</td>
                <td>
                  <input 
                    type="text" 
                    value={formData.academicRecords[index].examination}
                    onChange={(e) => handleAcademicRecordChange(index, 'examination', e.target.value)}
                    placeholder={index === 0 ? "SSC/10th" : "e.g., HSC/12th"}
                    className="form-control"
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    value={formData.academicRecords[index].boardUniversity}
                    onChange={(e) => handleAcademicRecordChange(index, 'boardUniversity', e.target.value)}
                    placeholder="Board/University name"
                    className="form-control"
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    value={formData.academicRecords[index].yearOfPassing}
                    onChange={(e) => handleAcademicRecordChange(index, 'yearOfPassing', e.target.value)}
                    placeholder="YYYY"
                    maxLength="4"
                    className="form-control"
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    value={formData.academicRecords[index].percentage}
                    onChange={(e) => handleAcademicRecordChange(index, 'percentage', e.target.value)}
                    placeholder="XX.XX"
                    className="form-control"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {errors.academic_0 && <div className="helper-text error">{errors.academic_0}</div>}
    </div>
  );

  const renderStep5 = () => (
    <>
      <div className="form-section declaration">
        <h3>
          <span>📝</span>
          Declaration
        </h3>
        
        <div className="declaration-text">
          <p>✓ I declare that the information provided in this form is true and complete to the best of my knowledge and belief. I understand that the college reserves the right to verify the information provided and to cancel admission if found incorrect.</p>
          <p>✓ I acknowledge that Dr. Sudhakar Jadhavar Arts, Commerce & Science College reserves the right at any stage to cancel admission if any information given by me is found incorrect.</p>
          <p>✓ I understand that my application will only be assessed when it is complete in every detail and includes all supporting documentation.</p>
          <p>✓ I am aware of the condition relating to my application and admission. And agree to pay all fees for which I am liable.</p>
          <p>✓ I have understood & accept the rules and regulations of the college standards and instructions issued from time to time by the management and the Principal of the college. I shall abide by the rules laid by the Principal/Director of the college/institute and shall observe and follow the rules and regulations and discipline.</p>
          <p>✓ I have read and understood the discipline and code of conduct of the college.</p>
          <p>✓ I shall abide to the rules and regulations and instructions issued by the institute.</p>
          <p>✓ I shall abide by the hygiene and safety standards while in the institute/college premises or outside.</p>
          <p>✓ I am aware that I cannot change the course I am enrolled in and hence I shall select the course carefully.</p>
          <p>✓ I shall attend classes regularly.</p>
          <p>✓ I am aware that fees once paid will not be refunded.</p>
          <p>✓ I am aware that the institute reserves the right to cancel admission if student fails to comply with rules.</p>
          <p>✓ All disputes are subject to Pune jurisdiction only.</p>
          <p>✓ I am aware that the institute shall not be responsible for loss of any belongings.</p>
          <p>✓ I am aware of the fee payment schedule mentioned below.</p>
          <p>✓ I agree to follow the rules and regulations and discipline of the college.</p>
        </div>
        
        <div className="signature-section">
          <div className="signature-row">
            <div className="form-group required">
              <label>Signature of Applicant</label>
              <input 
                type="text" 
                name="applicantSignature" 
                value={formData.applicantSignature}
                onChange={handleChange}
                className={`form-control ${errors.applicantSignature ? 'error' : ''}`}
                placeholder="Type your full name as signature"
              />
              {errors.applicantSignature && <div className="helper-text error">{errors.applicantSignature}</div>}
            </div>
            <div className="form-group required">
              <label>Signature of Parent/Guardian</label>
              <input 
                type="text" 
                name="parentSignature" 
                value={formData.parentSignature}
                onChange={handleChange}
                className={`form-control ${errors.parentSignature ? 'error' : ''}`}
                placeholder="Type parent's full name as signature"
              />
              {errors.parentSignature && <div className="helper-text error">{errors.parentSignature}</div>}
            </div>
          </div>
          
          <div className="form-group required">
            <label>Application Date</label>
            <input 
              type="date" 
              name="applicationDate" 
              value={formData.applicationDate}
              onChange={handleChange}
              className={`form-control ${errors.applicationDate ? 'error' : ''}`}
            />
            {errors.applicationDate && <div className="helper-text error">{errors.applicationDate}</div>}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h4>Fee Payment Schedule</h4>
        <div className="fee-schedule">
          <p><span>Total Fees:</span> <span>Rs _______</span></p>
          <p><span>At the time of registration:</span> <span>Rs _______</span></p>
          <p><span>Before ___/___/___ :</span> <span>Rs _______</span></p>
          <p><span>Before ___/___/___ :</span> <span>Rs _______</span></p>
          <p><span>Before ___/___/___ :</span> <span>Rs _______</span></p>
          <p><span>Before ___/___/___ :</span> <span>Rs _______</span></p>
          <p><span>Before ___/___/___ :</span> <span>Rs _______</span></p>
          <p className="note">⚠️ Late Fees will be charged if the fees are not paid as per the given schedule.</p>
        </div>
      </div>

      <div className="form-section">
        <h4>Important Note</h4>
        <p>📌 Please keep minimum 8-10 attested Copies of L.C. and other original document before submitting it to the admin office.</p>
        <p>📌 I have received list of documents to be submitted & fees schedule. I am aware that the documents are to be submitted before.</p>
      </div>
    </>
  );

  return (
    <div className="application-container">
      <div className="application-header">
        <h1>Jadhavar Group of Institutes</h1>
        <h2>Dr. Sudhakarrao Jadhavar Institute of Management and Technology</h2>
        <p className="college-address">
          Adv. Shardul Sudhakarrao Jadhavar Educational Campus,<br />
          2, Jadhavar College Road, Narhe-Dhayari, Pune – 411 041.<br />
          📞 Ph.: +91 92707 98590 | ✉️ Email: jadhavarmca@gmail.com
        </p>
        <div className="website-links">
          🌐 www.jadhavargroupofinstitute.in
        </div>
      </div>

      {submitStatus.message && (
        <div className={`alert alert-${submitStatus.type}`}>
          <span className="alert-icon">{submitStatus.type === 'success' ? '✓' : '✗'}</span>
          {submitStatus.message}
        </div>
      )}

      {renderStepIndicator()}

      <form onSubmit={handleSubmit} className="application-form">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        {currentStep === 5 && renderStep5()}

        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button 
              type="button" 
              onClick={handlePrevious} 
              className="btn btn-secondary"
            >
              ← Previous
            </button>
          )}
          
          {currentStep < steps.length ? (
            <button 
              type="button" 
              onClick={handleNext} 
              className="btn btn-primary"
              style={{ marginLeft: 'auto' }}
            >
              Next →
            </button>
          ) : (
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="btn btn-primary"
              style={{ marginLeft: 'auto' }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner">⏳</span>
                  Submitting...
                </>
              ) : (
                '✓ Submit Application'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Application;