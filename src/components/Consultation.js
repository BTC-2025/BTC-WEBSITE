// import React, { useState } from "react";
// import "./Consultation.css"; // We'll create this CSS file

// const Consultation = () => {
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [consultationForm, setConsultationForm] = useState({
//     consultationType: "",
//     product: "",
//     service: "",
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   // Products data structure
//   const productsData = {
//     "ERP": {
//       title: "Enterprise Resource Planning",
//       items: [
//         {
//           name: "Finance & Accounting",
//           desc: "Manage company finances, budgeting, billing, and accounting operations."
//         },
//         {
//           name: "Inventory Management",
//           desc: "Track stock levels, movement, and optimize warehouse operations."
//         },
//         {
//           name: "Purchase Management",
//           desc: "Handle vendor management, purchase orders, and procurement workflows."
//         },
//         {
//           name: "Sales Management",
//           desc: "Automate sales orders, quotations, and end-to-end sales processes."
//         },
//         {
//           name: "Manufacturing Management",
//           desc: "Plan production, track materials, and streamline factory operations."
//         }
//       ]
//     },
//     "CRM": {
//       title: "Customer Relationship Management",
//       items: [
//         { name: "Lead Management", desc: "Capture, track, and convert leads efficiently." },
//         { name: "Contact Management", desc: "Maintain organized customer and client information." },
//         { name: "Opportunity Management", desc: "Monitor deals and sales pipelines in real-time." },
//         { name: "Sales Management", desc: "Track sales activities and automate follow-ups." },
//         { name: "Customer Support (Ticketing)", desc: "Manage customer issues with a smart ticketing system." },
//         { name: "Marketing Automation", desc: "Automate campaigns, email marketing, and audience segmentation." },
//         { name: "Task & Activity Management", desc: "Assign and monitor tasks with reminders and scheduling." },
//         { name: "Communication Management", desc: "Centralize emails, calls, chats, and communication logs." },
//         { name: "Analytics & Reporting", desc: "Generate performance dashboards and insights." },
//         { name: "Customer Feedback & Surveys", desc: "Collect and analyze feedback to improve services." },
//         { name: "Document Management", desc: "Store, organize, and share CRM-related documents securely." },
//         { name: "Mobile CRM", desc: "Access CRM features from mobile devices on the go." }
//       ]
//     },
//     "HRM": {
//       title: "Human Resources Management",
//       items: [
//         { name: "Human Resources Management", desc: "Manage employee records, roles, and lifecycle efficiently." },
//         { name: "Payroll Management", desc: "Automate salary generation, deductions, and payslips." },
//         { name: "Attendance Management", desc: "Track employee attendance, shift schedules, and leaves." }
//       ]
//     },
//     "SMS": {
//       title: "School Management System",
//       items: [
//         { name: "School Management System", desc: "Full digital solution for administration, academics, and staff." }
//       ]
//     },
//     "POS": {
//       title: "Point of Sale",
//       items: [
//         { name: "Restaurant Management", desc: "Handle billing, orders, table management, and kitchen workflows." }
//       ]
//     }
//   };

//   // Services data
//   const servicesData = [
//     "Web Development",
//     "Mobile App Development", 
//     "Artificial Intelligence",
//     "Game Development",
//     "Cloud Services"
//   ];

//   const getAllProducts = () => {
//     const allProducts = [];
//     Object.values(productsData).forEach(category => {
//       category.items.forEach(item => {
//         allProducts.push(item.name);
//       });
//     });
//     return allProducts;
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setConsultationForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmitConsultation = async (e) => {
//     e.preventDefault();

//     try {
//       // Prepare data to send
//       const payload = {
//         consultationType: consultationForm.consultationType,
//         fullname: consultationForm.name,
//         email: consultationForm.email,
//         phone: consultationForm.phone,
//         product: consultationForm.product,
//         service: consultationForm.service,
//         message: consultationForm.message
//       };

//       console.log("Sending → ", payload);

//       // API request
//       const response = await fetch("https://btc-website-be.onrender.com/api/consult/createconsult", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();
//       console.log("Server response:", data);

//       if (!response.ok) {
//         alert(data.error || "Something went wrong");
//         return;
//       }

//       // SUCCESS
//       setConsultationForm({
//         consultationType: "",
//         product: "",
//         service: "",
//         name: "",
//         email: "",
//         phone: "",
//         message: ""
//       });

//       setShowSuccessModal(true);

//     } catch (error) {
//       console.error("API Error:", error);
//       alert("Failed to submit. Please try again.");
//     }
//   };

//   const resetForm = () => {
//     setConsultationForm({
//       consultationType: "",
//       product: "",
//       service: "",
//       name: "",
//       email: "",
//       phone: "",
//       message: ""
//     });
//   };

//   return (
//     <div className="consultation-page">
//       <div className="consultation-container">
//         <div className="consultation-header">
//           <h1 className="consultation-title">Get Free Consultation</h1>
//           <p className="consultation-subtitle">
//             Let's discuss your project requirements and find the best solution for your business
//           </p>
//         </div>

//         {/* Consultation Form */}
//         <div className="consultation-form-container">
//           <form onSubmit={handleSubmitConsultation} className="consultation-form">
//             <div className="form-grid">
//               <div className="form-group full-width">
//                 <label className="form-label">Consultation Type *</label>
//                 <select 
//                   className="form-select"
//                   name="consultationType"
//                   value={consultationForm.consultationType}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Select Consultation Type</option>
//                   <option value="product">Product Consultation</option>
//                   <option value="service">Service Consultation</option>
//                 </select>
//               </div>

//               {consultationForm.consultationType === 'product' && (
//                 <div className="form-group full-width">
//                   <label className="form-label">Select Product *</label>
//                   <select 
//                     className="form-select"
//                     name="product"
//                     value={consultationForm.product}
//                     onChange={handleFormChange}
//                     required
//                   >
//                     <option value="">Choose a product</option>
//                     {getAllProducts().map((product, index) => (
//                       <option key={index} value={product}>{product}</option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               {consultationForm.consultationType === 'service' && (
//                 <div className="form-group full-width">
//                   <label className="form-label">Select Service *</label>
//                   <select 
//                     className="form-select"
//                     name="service"
//                     value={consultationForm.service}
//                     onChange={handleFormChange}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {servicesData.map((service, index) => (
//                       <option key={index} value={service}>{service}</option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               <div className="form-group">
//                 <label className="form-label">Full Name *</label>
//                 <input 
//                   type="text" 
//                   className="form-input"
//                   name="name"
//                   value={consultationForm.name}
//                   onChange={handleFormChange}
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Email *</label>
//                 <input 
//                   type="email" 
//                   className="form-input"
//                   name="email"
//                   value={consultationForm.email}
//                   onChange={handleFormChange}
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div className="form-group full-width">
//                 <label className="form-label">Phone Number *</label>
//                 <input 
//                   type="tel" 
//                   className="form-input"
//                   name="phone"
//                   value={consultationForm.phone}
//                   onChange={handleFormChange}
//                   placeholder="Enter your phone number"
//                   required
//                 />
//               </div>

//               <div className="form-group full-width">
//                 <label className="form-label">Additional Message</label>
//                 <textarea 
//                   className="form-textarea"
//                   rows="5"
//                   name="message"
//                   value={consultationForm.message}
//                   onChange={handleFormChange}
//                   placeholder="Tell us about your requirements, budget, timeline, or any specific needs..."
//                 ></textarea>
//               </div>
//             </div>

//             <div className="form-actions">
//               <button 
//                 type="button" 
//                 className="btn-secondary"
//                 onClick={resetForm}
//               >
//                 Clear Form
//               </button>
//               <button type="submit" className="btn-primary">
//                 Submit Consultation Request
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Additional Information */}
//         <div className="consultation-features">
//           <div className="feature-card">
//             <div className="feature-icons">
//               <i className="fas fa-clock"></i>
//             </div>
//             <h3>Quick Response</h3>
//             <p>We'll get back to you within 24 hours with initial consultation</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icons">
//               <i className="fas fa-user-tie"></i>
//             </div>
//             <h3>Expert Advice</h3>
//             <p>Get professional guidance from our experienced team</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icons">
//               <i className="fas fa-shield-alt"></i>
//             </div>
//             <h3>No Commitment</h3>
//             <p>Free consultation with no obligation to purchase</p>
//           </div>
//         </div>
//       </div>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="modal-overlay">
//           <div className="success-modal">
//             <div className="success-icon">
//               <i className="fas fa-check"></i>
//             </div>
//             <h2>Thank You!</h2>
//             <p>
//               Your consultation request has been submitted successfully. 
//               Our team will contact you within 24 hours to discuss your requirements.
//             </p>
//             <button 
//               className="btn-primary"
//               onClick={() => setShowSuccessModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Consultation;


// import React, { useState } from "react";
// import "./Consultation.css"; // We'll update this CSS file

// const Consultation = () => {
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [consultationForm, setConsultationForm] = useState({
//     consultationType: "",
//     product: "",
//     service: "",
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   // Products data structure
//   const productsData = {
//     "ERP": {
//       title: "Enterprise Resource Planning",
//       items: [
//         {
//           name: "Finance & Accounting",
//           desc: "Manage company finances, budgeting, billing, and accounting operations."
//         },
//         {
//           name: "Inventory Management",
//           desc: "Track stock levels, movement, and optimize warehouse operations."
//         },
//         {
//           name: "Purchase Management",
//           desc: "Handle vendor management, purchase orders, and procurement workflows."
//         },
//         {
//           name: "Sales Management",
//           desc: "Automate sales orders, quotations, and end-to-end sales processes."
//         },
//         {
//           name: "Manufacturing Management",
//           desc: "Plan production, track materials, and streamline factory operations."
//         }
//       ]
//     },
//     "CRM": {
//       title: "Customer Relationship Management",
//       items: [
//         { name: "Lead Management", desc: "Capture, track, and convert leads efficiently." },
//         { name: "Contact Management", desc: "Maintain organized customer and client information." },
//         { name: "Opportunity Management", desc: "Monitor deals and sales pipelines in real-time." },
//         { name: "Sales Management", desc: "Track sales activities and automate follow-ups." },
//         { name: "Customer Support (Ticketing)", desc: "Manage customer issues with a smart ticketing system." },
//         { name: "Marketing Automation", desc: "Automate campaigns, email marketing, and audience segmentation." },
//         { name: "Task & Activity Management", desc: "Assign and monitor tasks with reminders and scheduling." },
//         { name: "Communication Management", desc: "Centralize emails, calls, chats, and communication logs." },
//         { name: "Analytics & Reporting", desc: "Generate performance dashboards and insights." },
//         { name: "Customer Feedback & Surveys", desc: "Collect and analyze feedback to improve services." },
//         { name: "Document Management", desc: "Store, organize, and share CRM-related documents securely." },
//         { name: "Mobile CRM", desc: "Access CRM features from mobile devices on the go." }
//       ]
//     },
//     "HRM": {
//       title: "Human Resources Management",
//       items: [
//         { name: "Human Resources Management", desc: "Manage employee records, roles, and lifecycle efficiently." },
//         { name: "Payroll Management", desc: "Automate salary generation, deductions, and payslips." },
//         { name: "Attendance Management", desc: "Track employee attendance, shift schedules, and leaves." }
//       ]
//     },
//     "SMS": {
//       title: "School Management System",
//       items: [
//         { name: "School Management System", desc: "Full digital solution for administration, academics, and staff." }
//       ]
//     },
//     "POS": {
//       title: "Point of Sale",
//       items: [
//         { name: "Restaurant Management", desc: "Handle billing, orders, table management, and kitchen workflows." }
//       ]
//     }
//   };

//   // Services data
//   const servicesData = [
//     "Web Development",
//     "Mobile App Development", 
//     "Artificial Intelligence",
//     "Game Development",
//     "Cloud Services"
//   ];

//   const getAllProducts = () => {
//     const allProducts = [];
//     Object.values(productsData).forEach(category => {
//       category.items.forEach(item => {
//         allProducts.push(item.name);
//       });
//     });
//     return allProducts;
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setConsultationForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmitConsultation = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // Prepare data to send
//       const payload = {
//         consultationType: consultationForm.consultationType,
//         fullname: consultationForm.name,
//         email: consultationForm.email,
//         phone: consultationForm.phone,
//         product: consultationForm.product,
//         service: consultationForm.service,
//         message: consultationForm.message
//       };

//       console.log("Sending → ", payload);

//       // API request
//       const response = await fetch("https://btc-website-be.onrender.com/api/consult/createconsult", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();
//       console.log("Server response:", data);

//       if (!response.ok) {
//         alert(data.error || "Something went wrong");
//         return;
//       }

//       // SUCCESS
//       setConsultationForm({
//         consultationType: "",
//         product: "",
//         service: "",
//         name: "",
//         email: "",
//         phone: "",
//         message: ""
//       });

//       setShowSuccessModal(true);

//     } catch (error) {
//       console.error("API Error:", error);
//       alert("Failed to submit. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setConsultationForm({
//       consultationType: "",
//       product: "",
//       service: "",
//       name: "",
//       email: "",
//       phone: "",
//       message: ""
//     });
//   };

//   return (
//     <div className="consultation-page">
//       <div className="consultation-container">
//         <div className="consultation-header">
//           <h1 className="consultation-title">Get Free Consultation</h1>
//           <p className="consultation-subtitle">
//             Let's discuss your project requirements and find the best solution for your business
//           </p>
//         </div>

//         {/* Consultation Form */}
//         <div className="consultation-form-container">
//           <form onSubmit={handleSubmitConsultation} className="consultation-form">
//             <div className="form-grid">
//               <div className="form-group full-width">
//                 <label className="form-label">Consultation Type *</label>
//                 <select 
//                   className="form-select"
//                   name="consultationType"
//                   value={consultationForm.consultationType}
//                   onChange={handleFormChange}
//                   required
//                   disabled={isLoading}
//                 >
//                   <option value="">Select Consultation Type</option>
//                   <option value="product">Product Consultation</option>
//                   <option value="service">Service Consultation</option>
//                 </select>
//               </div>

//               {consultationForm.consultationType === 'product' && (
//                 <div className="form-group full-width">
//                   <label className="form-label">Select Product *</label>
//                   <select 
//                     className="form-select"
//                     name="product"
//                     value={consultationForm.product}
//                     onChange={handleFormChange}
//                     required
//                     disabled={isLoading}
//                   >
//                     <option value="">Choose a product</option>
//                     {getAllProducts().map((product, index) => (
//                       <option key={index} value={product}>{product}</option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               {consultationForm.consultationType === 'service' && (
//                 <div className="form-group full-width">
//                   <label className="form-label">Select Service *</label>
//                   <select 
//                     className="form-select"
//                     name="service"
//                     value={consultationForm.service}
//                     onChange={handleFormChange}
//                     required
//                     disabled={isLoading}
//                   >
//                     <option value="">Choose a service</option>
//                     {servicesData.map((service, index) => (
//                       <option key={index} value={service}>{service}</option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               <div className="form-group">
//                 <label className="form-label">Full Name *</label>
//                 <input 
//                   type="text" 
//                   className="form-input"
//                   name="name"
//                   value={consultationForm.name}
//                   onChange={handleFormChange}
//                   placeholder="Enter your full name"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Email *</label>
//                 <input 
//                   type="email" 
//                   className="form-input"
//                   name="email"
//                   value={consultationForm.email}
//                   onChange={handleFormChange}
//                   placeholder="Enter your email"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div className="form-group full-width">
//                 <label className="form-label">Phone Number *</label>
//                 <input 
//                   type="tel" 
//                   className="form-input"
//                   name="phone"
//                   value={consultationForm.phone}
//                   onChange={handleFormChange}
//                   placeholder="Enter your phone number"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div className="form-group full-width">
//                 <label className="form-label">Additional Message</label>
//                 <textarea 
//                   className="form-textarea"
//                   rows="5"
//                   name="message"
//                   value={consultationForm.message}
//                   onChange={handleFormChange}
//                   placeholder="Tell us about your requirements, budget, timeline, or any specific needs..."
//                   disabled={isLoading}
//                 ></textarea>
//               </div>
//             </div>

//             <div className="form-actions">
//               <button 
//                 type="button" 
//                 className="btn-secondary"
//                 onClick={resetForm}
//                 disabled={isLoading}
//               >
//                 Clear Form
//               </button>
//               <button 
//                 type="submit" 
//                 className="btn-primary"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <div className="button-loading">
//                     <div className="loading-spinner"></div>
//                     <span>Submitting...</span>
//                   </div>
//                 ) : (
//                   "Submit Consultation Request"
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Additional Information */}
//         <div className="consultation-features">
//           <div className="feature-card">
//             <div className="feature-icons">
//               <i className="fas fa-clock"></i>
//             </div>
//             <h3>Quick Response</h3>
//             <p>We'll get back to you within 24 hours with initial consultation</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icons">
//               <i className="fas fa-user-tie"></i>
//             </div>
//             <h3>Expert Advice</h3>
//             <p>Get professional guidance from our experienced team</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icons">
//               <i className="fas fa-shield-alt"></i>
//             </div>
//             <h3>No Commitment</h3>
//             <p>Free consultation with no obligation to purchase</p>
//           </div>
//         </div>
//       </div>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="modal-overlay">
//           <div className="success-modal">
//             <div className="success-icon">
//               <i className="fas fa-check"></i>
//             </div>
//             <h2>Thank You!</h2>
//             <p>
//               Your consultation request has been submitted successfully. 
//               Our team will contact you within 24 hours to discuss your requirements.
//             </p>
//             <button 
//               className="btn-primary close-btn"
//               onClick={() => setShowSuccessModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Consultation;


import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Consultation = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    consultationType: "",
    product: "",
    service: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Products data structure
  const productsData = {
    "ERP": {
      title: "Enterprise Resource Planning",
      items: [
        {
          name: "Finance & Accounting",
          desc: "Manage company finances, budgeting, billing, and accounting operations."
        },
        {
          name: "Inventory Management",
          desc: "Track stock levels, movement, and optimize warehouse operations."
        },
        {
          name: "Purchase Management",
          desc: "Handle vendor management, purchase orders, and procurement workflows."
        },
        {
          name: "Sales Management",
          desc: "Automate sales orders, quotations, and end-to-end sales processes."
        },
        {
          name: "Manufacturing Management",
          desc: "Plan production, track materials, and streamline factory operations."
        }
      ]
    },
    "CRM": {
      title: "Customer Relationship Management",
      items: [
        { name: "Lead Management", desc: "Capture, track, and convert leads efficiently." },
        { name: "Contact Management", desc: "Maintain organized customer and client information." },
        { name: "Opportunity Management", desc: "Monitor deals and sales pipelines in real-time." },
        { name: "Sales Management", desc: "Track sales activities and automate follow-ups." },
        { name: "Customer Support (Ticketing)", desc: "Manage customer issues with a smart ticketing system." },
        { name: "Marketing Automation", desc: "Automate campaigns, email marketing, and audience segmentation." },
        { name: "Task & Activity Management", desc: "Assign and monitor tasks with reminders and scheduling." },
        { name: "Communication Management", desc: "Centralize emails, calls, chats, and communication logs." },
        { name: "Analytics & Reporting", desc: "Generate performance dashboards and insights." },
        { name: "Customer Feedback & Surveys", desc: "Collect and analyze feedback to improve services." },
        { name: "Document Management", desc: "Store, organize, and share CRM-related documents securely." },
        { name: "Mobile CRM", desc: "Access CRM features from mobile devices on the go." }
      ]
    },
    "HRM": {
      title: "Human Resources Management",
      items: [
        { name: "Human Resources Management", desc: "Manage employee records, roles, and lifecycle efficiently." },
        { name: "Payroll Management", desc: "Automate salary generation, deductions, and payslips." },
        { name: "Attendance Management", desc: "Track employee attendance, shift schedules, and leaves." }
      ]
    },
    "SMS": {
      title: "School Management System",
      items: [
        { name: "School Management System", desc: "Full digital solution for administration, academics, and staff." }
      ]
    },
    "POS": {
      title: "Point of Sale",
      items: [
        { name: "Restaurant Management", desc: "Handle billing, orders, table management, and kitchen workflows." }
      ]
    }
  };

  // Services data
  const servicesData = [
    "Web Development",
    "Mobile App Development", 
    "Artificial Intelligence",
    "Game Development",
    "Cloud Services"
  ];

  const getAllProducts = () => {
    const allProducts = [];
    Object.values(productsData).forEach(category => {
      category.items.forEach(item => {
        allProducts.push(item.name);
      });
    });
    return allProducts;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitConsultation = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare data to send
      const payload = {
        consultationType: consultationForm.consultationType,
        fullname: consultationForm.name,
        email: consultationForm.email,
        phone: consultationForm.phone,
        product: consultationForm.product,
        service: consultationForm.service,
        message: consultationForm.message
      };

      console.log("Sending → ", payload);

      // API request
      const response = await fetch("https://btc-website-be.onrender.com/api/consult/createconsult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (!response.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      // SUCCESS
      setConsultationForm({
        consultationType: "",
        product: "",
        service: "",
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      setShowSuccessModal(true);

    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setConsultationForm({
      consultationType: "",
      product: "",
      service: "",
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <ConsultationPage>
      <ConsultationContainer>
        <ConsultationHeader>
          <ConsultationTitle>Get Free Consultation</ConsultationTitle>
          <ConsultationSubtitle>
            Let's discuss your project requirements and find the best solution for your business
          </ConsultationSubtitle>
        </ConsultationHeader>

        {/* Consultation Form */}
        <ConsultationFormContainer>
          <ConsultationForm onSubmit={handleSubmitConsultation}>
            <FormGrid>
              <FormGroup fullWidth>
                <FormLabel>Consultation Type *</FormLabel>
                <FormSelect
                  name="consultationType"
                  value={consultationForm.consultationType}
                  onChange={handleFormChange}
                  required
                  disabled={isLoading}
                >
                  <option value="">Select Consultation Type</option>
                  <option value="product">Product Consultation</option>
                  <option value="service">Service Consultation</option>
                </FormSelect>
              </FormGroup>

              {consultationForm.consultationType === 'product' && (
                <FormGroup fullWidth>
                  <FormLabel>Select Product *</FormLabel>
                  <FormSelect
                    name="product"
                    value={consultationForm.product}
                    onChange={handleFormChange}
                    required
                    disabled={isLoading}
                  >
                    <option value="">Choose a product</option>
                    {getAllProducts().map((product, index) => (
                      <option key={index} value={product}>{product}</option>
                    ))}
                  </FormSelect>
                </FormGroup>
              )}

              {consultationForm.consultationType === 'service' && (
                <FormGroup fullWidth>
                  <FormLabel>Select Service *</FormLabel>
                  <FormSelect
                    name="service"
                    value={consultationForm.service}
                    onChange={handleFormChange}
                    required
                    disabled={isLoading}
                  >
                    <option value="">Choose a service</option>
                    {servicesData.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </FormSelect>
                </FormGroup>
              )}

              <FormGroup>
                <FormLabel>Full Name *</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={consultationForm.name}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Email *</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={consultationForm.email}
                  onChange={handleFormChange}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <FormGroup fullWidth>
                <FormLabel>Phone Number *</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={consultationForm.phone}
                  onChange={handleFormChange}
                  placeholder="Enter your phone number"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <FormGroup fullWidth>
                <FormLabel>Additional Message</FormLabel>
                <FormTextarea
                  rows="5"
                  name="message"
                  value={consultationForm.message}
                  onChange={handleFormChange}
                  placeholder="Tell us about your requirements, budget, timeline, or any specific needs..."
                  disabled={isLoading}
                />
              </FormGroup>
            </FormGrid>

            <FormActions>
              <SecondaryButton
                type="button"
                onClick={resetForm}
                disabled={isLoading}
              >
                Clear Form
              </SecondaryButton>
              <PrimaryButton
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <ButtonLoading>
                    <LoadingSpinner />
                    <span>Submitting...</span>
                  </ButtonLoading>
                ) : (
                  "Submit Consultation Request"
                )}
              </PrimaryButton>
            </FormActions>
          </ConsultationForm>
        </ConsultationFormContainer>

        {/* Additional Information */}
        <ConsultationFeatures>
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-clock"></i>
            </FeatureIcon>
            <h3>Quick Response</h3>
            <p>We'll get back to you within 24 hours with initial consultation</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-user-tie"></i>
            </FeatureIcon>
            <h3>Expert Advice</h3>
            <p>Get professional guidance from our experienced team</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-shield-alt"></i>
            </FeatureIcon>
            <h3>No Commitment</h3>
            <p>Free consultation with no obligation to purchase</p>
          </FeatureCard>
        </ConsultationFeatures>
      </ConsultationContainer>

      {/* Success Modal */}
      {showSuccessModal && (
        <ModalOverlay>
          <SuccessModal>
            <SuccessIcon>
              <i className="fas fa-check"></i>
            </SuccessIcon>
            <h2>Thank You!</h2>
            <p>
              Your consultation request has been submitted successfully. 
              Our team will contact you within 24 hours to discuss your requirements.
            </p>
            <ModalButtonContainer>
              <PrimaryButton onClick={() => setShowSuccessModal(false)}>
                Close
              </PrimaryButton>
            </ModalButtonContainer>
          </SuccessModal>
        </ModalOverlay>
      )}
    </ConsultationPage>
  );
};

// Animations
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
  }
  100% {
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
`;

const modalSlideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const iconBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Styled Components
const ConsultationPage = styled.div`
  padding: 120px 20px 60px;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Roboto', sans-serif;
`;

const ConsultationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ConsultationHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  color: white;
`;

const ConsultationTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #e3f2fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ConsultationSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ConsultationFormContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ConsultationForm = styled.form`
  width: 100%;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
`;

const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  color: #2d3748;
  font-size: 0.95rem;
`;

const baseInputStyles = `
  padding: 15px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8fafc;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #4299e1;
    background: white;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #f7fafc;
  }
`;

const FormInput = styled.input`
  ${baseInputStyles}
`;

const FormSelect = styled.select`
  ${baseInputStyles}
`;

const FormTextarea = styled.textarea`
  ${baseInputStyles}
  resize: vertical;
  min-height: 120px;
`;

const FormActions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.button`
  padding: 15px 35px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    min-height: 50px;
    padding: 12px 25px;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  position: relative;
  min-width: 200px;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    animation: ${pulse} 2s infinite;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: #e2e8f0;
  color: #4a5568;

  &:hover:not(:disabled) {
    background: #cbd5e0;
    transform: translateY(-2px);
  }
`;

const ButtonLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const ConsultationFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const SuccessModal = styled.div`
  background: white;
  padding: 50px 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  animation: ${modalSlideIn} 0.3s ease-out;

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const SuccessIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #48bb78, #38a169);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2.5rem;
  color: white;
  animation: ${iconBounce} 0.6s ease-out;
`;

// NEW: Container to center the modal button
const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export default Consultation;