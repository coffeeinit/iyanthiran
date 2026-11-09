import { useState, useEffect } from 'react';
import { 
  FileText, 
  User, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Send,
  Download,
  Search,
  CheckCircle,
  XCircle,
  Eye,
  X,
  BookOpen,
  FileImage
} from 'lucide-react';

const Application = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    photo: null,
    
    // Address Information
    address: '',
    pincode: '',
    state: '',
    district: '',
    
    // Education Information
    tenthSchool: '',
    tenthYear: '',
    tenthPercentage: '',
    eleventhSchool: '',
    eleventhYear: '',
    eleventhPercentage: '',
    twelfthSchool: '',
    twelfthYear: '',
    twelfthPercentage: '',
    graduationCollege: '',
    graduationYear: '',
    graduationPercentage: '',
    graduationCourse: '',
    
    // Course applying for
    course: '',
    
    // Skills and Languages
    skills: '',
    languages: '',
    
    // Documents
    resume: null,
    documents: [] as any[]
  });
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Load applications from JSON file or localStorage
  const loadApplications = async () => {
    try {
      // First try to load from JSON file
      const response = await fetch('/applications.json');
      if (response.ok) {
        const data = await response.json();
        setApplications(data.applications || []);
        // Also save to localStorage for offline access
        localStorage.setItem('applications', JSON.stringify(data.applications || []));
      } else {
        // Fallback to localStorage if JSON file doesn't exist
        const localData = localStorage.getItem('applications');
        if (localData) {
          setApplications(JSON.parse(localData));
        }
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading applications:', error);
      // Fallback to localStorage
      const localData = localStorage.getItem('applications');
      if (localData) {
        setApplications(JSON.parse(localData));
      }
      setLoading(false);
    }
  };

  // Generate random filename with phone number
  const generateFileName = (originalName: any, phoneNumber: any, folder: any) => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const extension = originalName.split('.').pop();
    const cleanPhone = phoneNumber.replace(/\D/g, ''); // Remove non-digits
    return `${folder}/${random}_${cleanPhone}_${timestamp}.${extension}`;
  };

  // Save applications to JSON file and localStorage
  const saveApplications = async (newApplications: any) => {
    try {
      setApplications(newApplications);
      
      // Save to localStorage for immediate access
      localStorage.setItem('applications', JSON.stringify(newApplications));
      
      // For static hosting, we'll use localStorage and provide download option
      // The JSON file will need to be manually updated via the Export JSON button
      console.log('Applications updated successfully! Data saved to localStorage.');
      console.log('Use the "Export JSON" button to download updated data for manual file replacement.');
    } catch (error) {
      console.error('Error saving applications:', error);
    }
  };

  // Load applications on component mount
  useEffect(() => {
    loadApplications();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handlePhotoChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      photo: e.target.files[0]
    }));
  };

  const handleDocumentAdd = (e: any) => {
    const files = Array.from(e.target.files);
    const newDocuments = files.map((file: any) => ({
      id: Date.now() + Math.random(),
      file: file,
      name: file.name,
      type: file.type
    }));
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...newDocuments]
    }));
  };

  const handleDocumentRemove = (id: any) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(doc => doc.id !== id)
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Generate filenames for uploaded files
    const photoFileName = formData.photo ? 
      generateFileName((formData.photo as any).name, formData.phone, 'photos') : null;
    
    const resumeFileName = formData.resume ? 
      generateFileName((formData.resume as any).name, formData.phone, 'resumes') : null;
    
    const documentFileNames = formData.documents.map(doc => ({
      id: doc.id,
      name: generateFileName(doc.name, formData.phone, 'certificates'),
      originalName: doc.name,
      type: doc.type
    }));
    
    // Create new application object
    const newApplication = {
      id: applications.length > 0 ? Math.max(...applications.map(app => app.id)) + 1 : 1,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      photo: photoFileName,
      address: formData.address,
      pincode: formData.pincode,
      state: formData.state,
      district: formData.district,
      tenthSchool: formData.tenthSchool,
      tenthYear: formData.tenthYear,
      tenthPercentage: formData.tenthPercentage,
      eleventhSchool: formData.eleventhSchool,
      eleventhYear: formData.eleventhYear,
      eleventhPercentage: formData.eleventhPercentage,
      twelfthSchool: formData.twelfthSchool,
      twelfthYear: formData.twelfthYear,
      twelfthPercentage: formData.twelfthPercentage,
      graduationCollege: formData.graduationCollege,
      graduationYear: formData.graduationYear,
      graduationPercentage: formData.graduationPercentage,
      graduationCourse: formData.graduationCourse,
      course: formData.course,
      skills: formData.skills,
      languages: formData.languages,
      resume: resumeFileName,
      documents: documentFileNames,
      status: 'pending',
      appliedDate: new Date().toISOString().split('T')[0]
    };

    // Add new application to the list
    const updatedApplications = [...applications, newApplication];
    
    // Save to JSON file and localStorage
    await saveApplications(updatedApplications);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      photo: null,
      address: '',
      pincode: '',
      state: '',
      district: '',
      tenthSchool: '',
      tenthYear: '',
      tenthPercentage: '',
      eleventhSchool: '',
      eleventhYear: '',
      eleventhPercentage: '',
      twelfthSchool: '',
      twelfthYear: '',
      twelfthPercentage: '',
      graduationCollege: '',
      graduationYear: '',
      graduationPercentage: '',
      graduationCourse: '',
      course: '',
      skills: '',
      languages: '',
      resume: null,
      documents: []
    });
    
    alert('Application submitted successfully! Data saved to applications.json and localStorage.');
  };

  const handleStatusChange = async (id: any, newStatus: any) => {
    const updatedApplications = applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updatedApplications);
    await saveApplications(updatedApplications);
    
    // Show success message
    const application = applications.find(app => app.id === id);
    const statusText = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    alert(`Application status updated to "${statusText}" for ${application?.name || 'candidate'}. Data saved to localStorage! Use Export JSON to update the file.`);
  };

  const sendEmail = (email: any, type: any) => {
    const subject = type === 'shortlisted' 
      ? 'Congratulations! You have been shortlisted for the next round'
      : type === 'rejected'
      ? 'Application Status Update'
      : 'Application Received';
    
    const body = type === 'shortlisted'
      ? 'Dear Candidate,\n\nCongratulations! We are pleased to inform you that you have been shortlisted for the next round of our placement process.\n\nWe will contact you soon with further details.\n\nBest regards,\nIyanthiran Edge Team'
      : type === 'rejected'
      ? 'Dear Candidate,\n\nThank you for your interest in our placement program. After careful consideration, we have decided not to move forward with your application at this time.\n\nWe encourage you to apply for future opportunities.\n\nBest regards,\nIyanthiran Edge Team'
      : 'Dear Candidate,\n\nThank you for submitting your application. We have received it and will review it shortly.\n\nWe will contact you with updates soon.\n\nBest regards,\nIyanthiran Edge Team';

    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const exportApplications = () => {
    const dataStr = JSON.stringify({ applications }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `applications_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const getFilePaths = (application: any) => {
    const paths = [];
    if (application.photo) {
      paths.push(`Photo: ${application.photo}`);
    }
    if (application.resume) {
      paths.push(`Resume: ${application.resume}`);
    }
    if (application.documents && application.documents.length > 0) {
      application.documents.forEach((doc: any) => {
        paths.push(`${doc.originalName}: ${doc.name}`);
      });
    }
    return paths;
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (app.course && app.course.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: any) => {
    switch (status) {
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (application: any) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Walk-in Interview Applications
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Walk-in Interview Application</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Apply for walk-in interviews at our Vaazhai Incubator office. Submit your details, documents, and take the next step in your career journey with Iyanthiran Edge.
            </p>
          </div>
        </div>
      </section>

      

      {/* Application Form */}
      <section className="py-5 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role/Position Selection - Moved to Top */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                    🎯 Role/Position Selection
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Role/Position *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a role/position</option>
                      <option value="Software Developer">Software Developer</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="React Developer">React Developer</option>
                      <option value="Node.js Developer">Node.js Developer</option>
                      <option value="Python Developer">Python Developer</option>
                      <option value="Java Developer">Java Developer</option>
                      <option value="Data Analyst">Data Analyst</option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
                      <option value="Content Writer">Content Writer</option>
                      <option value="SEO Specialist">SEO Specialist</option>
                      <option value="Social Media Manager">Social Media Manager</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Business Analyst">Business Analyst</option>
                      <option value="Quality Assurance (QA)">Quality Assurance (QA)</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Mobile App Developer">Mobile App Developer</option>
                      <option value="Database Administrator">Database Administrator</option>
                      <option value="System Administrator">System Administrator</option>
                      <option value="Network Engineer">Network Engineer</option>
                      <option value="Cybersecurity Specialist">Cybersecurity Specialist</option>
                      <option value="Cloud Engineer">Cloud Engineer</option>
                      <option value="AI/ML Engineer">AI/ML Engineer</option>
                      <option value="Blockchain Developer">Blockchain Developer</option>
                      <option value="Sales Executive">Sales Executive</option>
                      <option value="Customer Support">Customer Support</option>
                      <option value="HR Executive">HR Executive</option>
                      <option value="Finance Executive">Finance Executive</option>
                      <option value="Operations Executive">Operations Executive</option>
                      <option value="Intern - Development">Intern - Development</option>
                      <option value="Intern - Design">Intern - Design</option>
                      <option value="Intern - Marketing">Intern - Marketing</option>
                      <option value="Intern - Business">Intern - Business</option>
                      <option value="Trainee - Any Role">Trainee - Any Role</option>
                    </select>
                    <p className="text-sm text-gray-600 mt-2">Choose the role you're applying for at Iyanthiran Edge</p>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-teal-600" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo *</label>
                      <input
                        type="file"
                        name="photo"
                        onChange={handlePhotoChange}
                        accept="image/*"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Address Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your complete address"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Enter pincode"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Enter state"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">District *</label>
                        <input
                          type="text"
                          name="district"
                          value={formData.district}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Enter district"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Information */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-purple-600" />
                    Education Information
                  </h3>
                  
                  {/* 10th Standard */}
                  <div className="mb-6">
                    <h4 className="text-md font-medium text-gray-800 mb-3">10th Standard *</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                        <input
                          type="text"
                          name="tenthSchool"
                          value={formData.tenthSchool}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="School name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
                        <input
                          type="number"
                          name="tenthYear"
                          value={formData.tenthYear}
                          onChange={handleInputChange}
                          required
                          min="1990"
                          max="2025"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Year"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
                        <input
                          type="number"
                          name="tenthPercentage"
                          value={formData.tenthPercentage}
                          onChange={handleInputChange}
                          required
                          min="0"
                          max="100"
                          step="0.01"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Percentage"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 11th Standard */}
                  <div className="mb-6">
                    <h4 className="text-md font-medium text-gray-800 mb-3">11th Standard *</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                        <input
                          type="text"
                          name="eleventhSchool"
                          value={formData.eleventhSchool}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="School name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
                        <input
                          type="number"
                          name="eleventhYear"
                          value={formData.eleventhYear}
                          onChange={handleInputChange}
                          required
                          min="1990"
                          max="2025"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Year"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
                        <input
                          type="number"
                          name="eleventhPercentage"
                          value={formData.eleventhPercentage}
                          onChange={handleInputChange}
                          required
                          min="0"
                          max="100"
                          step="0.01"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Percentage"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 12th Standard */}
                  <div className="mb-6">
                    <h4 className="text-md font-medium text-gray-800 mb-3">12th Standard *</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                        <input
                          type="text"
                          name="twelfthSchool"
                          value={formData.twelfthSchool}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="School name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
                        <input
                          type="number"
                          name="twelfthYear"
                          value={formData.twelfthYear}
                          onChange={handleInputChange}
                          required
                          min="1990"
                          max="2025"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Year"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
                        <input
                          type="number"
                          name="twelfthPercentage"
                          value={formData.twelfthPercentage}
                          onChange={handleInputChange}
                          required
                          min="0"
                          max="100"
                          step="0.01"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Percentage"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Graduation */}
                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-3">Graduation (if applicable)</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">College/University</label>
                        <input
                          type="text"
                          name="graduationCollege"
                          value={formData.graduationCollege}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="College/University name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                        <input
                          type="text"
                          name="graduationCourse"
                          value={formData.graduationCourse}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Course name"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
                        <input
                          type="number"
                          name="graduationYear"
                          value={formData.graduationYear}
                          onChange={handleInputChange}
                          min="1990"
                          max="2025"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Year"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Percentage/CGPA</label>
                        <input
                          type="text"
                          name="graduationPercentage"
                          value={formData.graduationPercentage}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Percentage or CGPA"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills and Languages */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    Skills & Languages
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Technical Skills *</label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="List your technical skills (e.g., React, Python, Java, SQL, etc.)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Languages Known *</label>
                      <textarea
                        name="languages"
                        value={formData.languages}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="List languages you know (e.g., English, Tamil, Hindi, etc.)"
                      />
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Download className="h-5 w-5 mr-2 text-orange-600" />
                    Resume Upload
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume (PDF, DOC, DOCX) *</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                    />
                  </div>
                </div>

                {/* Supporting Documents */}
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FileImage className="h-5 w-5 mr-2 text-indigo-600" />
                    Supporting Documents
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload Supporting Documents (PDF, Images)</label>
                      <input
                        type="file"
                        multiple
                        onChange={handleDocumentAdd}
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      />
                      <p className="text-sm text-gray-500 mt-2">You can upload certificates, mark sheets, experience letters, etc.</p>
                    </div>
                    
                    {/* Document List */}
                    {formData.documents.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Documents:</h4>
                        <div className="space-y-2">
                          {formData.documents.map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between bg-white p-3 rounded-lg border">
                              <div className="flex items-center">
                                <FileImage className="h-4 w-4 text-blue-500 mr-2" />
                                <span className="text-sm text-gray-700">{doc.name}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleDocumentRemove(doc.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

      {/* Application Management */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Management</h2>
              
              {/* Folder Structure Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">📁 File Storage Structure</h3>
                <div className="text-xs text-blue-700 space-y-1">
                  <div>• <strong>Photos:</strong> photos/random_phone_timestamp.ext</div>
                  <div>• <strong>Resumes:</strong> resumes/random_phone_timestamp.ext</div>
                  <div>• <strong>Certificates:</strong> certificates/random_phone_timestamp.ext</div>
                  <div>• <strong>Data:</strong> Stored in localStorage, use Export JSON to update file</div>
                </div>
              </div>
              
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
                  <span className="ml-3 text-gray-600">Loading applications...</span>
                </div>
              ) : (
                <div>
              
              {/* Filters and Search */}
              <div className="mb-8 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search applications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button 
                    onClick={exportApplications}
                    className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export JSON
                  </button>
                </div>
              </div>

              {/* Applications Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{app.name}</div>
                            <div className="text-sm text-gray-500">{app.email}</div>
                            <div className="text-sm text-gray-500">{app.phone}</div>
                            <div className="text-xs text-gray-400 mt-1">
                              📍 {app.district}, {app.state} - {app.pincode}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <div className="font-medium text-teal-600">{app.course || 'Position not specified'}</div>
                            <div className="text-xs text-gray-500">Applied Role</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <div className="font-medium">{app.graduationCourse || '12th Pass'}</div>
                            <div className="text-xs text-gray-500">{app.graduationYear || app.twelfthYear || 'Education info'}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="max-w-xs">
                            <div className="text-xs text-gray-600 mb-1">Files:</div>
                            {getFilePaths(app).map((path, index) => {
                              // Extract the actual filename from the path (after the colon)
                              const fileName = path.includes(':') ? path.split(': ')[1] : path;
                              // Create full URL for the file
                              const fileUrl = fileName.startsWith('http') ? fileName : `/candidates/${fileName}`;
                              
                              return (
                                <div key={index} className="mb-1">
                                  <a 
                                    href={fileUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-600 hover:text-blue-800 hover:underline cursor-pointer block truncate"
                                    title={`Click to open: ${fileName}`}
                                  >
                                    {path}
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>
                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.appliedDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleStatusChange(app.id, 'shortlisted')}
                              className="text-green-600 hover:text-green-900"
                              title="Shortlist"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleStatusChange(app.id, 'rejected')}
                              className="text-red-600 hover:text-red-900"
                              title="Reject"
                            >
                              <XCircle className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => sendEmail(app.email, app.status)}
                              className="text-blue-600 hover:text-blue-900"
                              title="Send Email"
                            >
                              <Mail className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleViewDetails(app)}
                              className="text-gray-600 hover:text-gray-900" 
                              title="View Details"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary Stats */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">{applications.filter(app => app.status === 'pending').length}</div>
                  <div className="text-sm text-yellow-800">Pending</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{applications.filter(app => app.status === 'shortlisted').length}</div>
                  <div className="text-sm text-green-800">Shortlisted</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{applications.filter(app => app.status === 'rejected').length}</div>
                  <div className="text-sm text-red-800">Rejected</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{applications.length}</div>
                  <div className="text-sm text-blue-800">Total</div>
                </div>
              </div>
                </div>
              )}
            </div>
          </div>
        </section>

      {/* Application Details Modal */}
      {showModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Application Details</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="bg-teal-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-teal-600" />
                  Personal Information
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-gray-900 font-medium">{selectedApplication.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <p className="text-gray-900">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone</label>
                    <p className="text-gray-900">{selectedApplication.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Applied Role</label>
                    <p className="text-gray-900 font-medium text-teal-600">{selectedApplication.course || 'Position not specified'}</p>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Address Information
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Address</label>
                    <p className="text-gray-900">{selectedApplication.address}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Pincode</label>
                      <p className="text-gray-900">{selectedApplication.pincode}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">State</label>
                      <p className="text-gray-900">{selectedApplication.state}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">District</label>
                      <p className="text-gray-900">{selectedApplication.district}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Information */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-purple-600" />
                  Education Information
                </h4>
                
                {/* 10th Standard */}
                <div className="mb-4">
                  <h5 className="text-md font-medium text-gray-800 mb-2">10th Standard</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <label className="text-gray-600">School</label>
                      <p className="text-gray-900">{selectedApplication.tenthSchool}</p>
                    </div>
                    <div>
                      <label className="text-gray-600">Year</label>
                      <p className="text-gray-900">{selectedApplication.tenthYear}</p>
                    </div>
                    <div>
                      <label className="text-gray-600">Percentage</label>
                      <p className="text-gray-900">{selectedApplication.tenthPercentage}%</p>
                    </div>
                  </div>
                </div>

                {/* 11th Standard */}
                <div className="mb-4">
                  <h5 className="text-md font-medium text-gray-800 mb-2">11th Standard</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <label className="text-gray-600">School</label>
                      <p className="text-gray-900">{selectedApplication.eleventhSchool}</p>
                    </div>
                    <div>
                      <label className="text-gray-600">Year</label>
                      <p className="text-gray-900">{selectedApplication.eleventhYear}</p>
                    </div>
                    <div>
                      <label className="text-gray-600">Percentage</label>
                      <p className="text-gray-900">{selectedApplication.eleventhPercentage}%</p>
                    </div>
                  </div>
                </div>

                {/* 12th Standard */}
                <div className="mb-4">
                  <h5 className="text-md font-medium text-gray-800 mb-2">12th Standard</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <label className="text-gray-600">School</label>
                      <p className="text-gray-900">{selectedApplication.twelfthSchool}</p>
                    </div>
                    <div>
                      <label className="text-gray-600">Year</label>
                      <p className="text-gray-900">{selectedApplication.twelfthYear}</p>
                    </div>
                    <div>
                      <label className="text-gray-600">Percentage</label>
                      <p className="text-gray-900">{selectedApplication.twelfthPercentage}%</p>
                    </div>
                  </div>
                </div>

                {/* Graduation */}
                {selectedApplication.graduationCollege && (
                  <div>
                    <h5 className="text-md font-medium text-gray-800 mb-2">Graduation</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <label className="text-gray-600">College/University</label>
                        <p className="text-gray-900">{selectedApplication.graduationCollege}</p>
                      </div>
                      <div>
                        <label className="text-gray-600">Course</label>
                        <p className="text-gray-900">{selectedApplication.graduationCourse}</p>
                      </div>
                      <div>
                        <label className="text-gray-600">Year</label>
                        <p className="text-gray-900">{selectedApplication.graduationYear}</p>
                      </div>
                      <div>
                        <label className="text-gray-600">Percentage/CGPA</label>
                        <p className="text-gray-900">{selectedApplication.graduationPercentage}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Skills and Languages */}
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                  Skills & Languages
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Technical Skills</label>
                    <p className="text-gray-900 whitespace-pre-wrap">{selectedApplication.skills}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Languages Known</label>
                    <p className="text-gray-900 whitespace-pre-wrap">{selectedApplication.languages}</p>
                  </div>
                </div>
              </div>

              {/* Files Information */}
              <div className="bg-indigo-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileImage className="h-5 w-5 mr-2 text-indigo-600" />
                  Uploaded Files
                </h4>
                <div className="space-y-2">
                  {getFilePaths(selectedApplication).map((path, index) => (
                    <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded border">
                      {path}
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Status and Date */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Application Status</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div className="mt-1">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedApplication.status)}`}>
                        {selectedApplication.status.charAt(0).toUpperCase() + selectedApplication.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Applied Date</label>
                    <p className="text-gray-900">{selectedApplication.appliedDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-2xl">
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    sendEmail(selectedApplication.email, selectedApplication.status);
                    closeModal();
                  }}
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2 inline" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;