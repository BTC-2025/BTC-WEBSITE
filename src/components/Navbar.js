
import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import routes from '../assets/logo2.png';
import linx from '../assets/favicon.png';
import zonet from '../assets/zonet.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeProductCategory, setActiveProductCategory] = useState("ERP");
  const [activeDivisionCategory, setActiveDivisionCategory] = useState("BTC Routes");
  
  const [hoverTimeouts, setHoverTimeouts] = useState({});

  const [showConsultationModal,setshowConsultationModal] = useState(false)
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
  
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const divisionsRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const divisionsDropdownRef = useRef(null);

  // Products data structure
  // const productsData = {
  //   "ERP": {
  //     title: "Enterprise Resource Planning",
  //     items: [
  //       {
  //         name: "Finance & Accounting",
  //         desc: "Manage company finances, budgeting, billing, and accounting operations."
  //       },
  //       {
  //         name: "Inventory Management",
  //         desc: "Track stock levels, movement, and optimize warehouse operations."
  //       },
  //       {
  //         name: "Purchase Management",
  //         desc: "Handle vendor management, purchase orders, and procurement workflows."
  //       },
  //       {
  //         name: "Sales Management",
  //         desc: "Automate sales orders, quotations, and end-to-end sales processes."
  //       },
  //       {
  //         name: "Manufacturing Management",
  //         desc: "Plan production, track materials, and streamline factory operations."
  //       }
  //     ]
  //   },
  //   "CRM": {
  //     title: "Customer Relationship Management",
  //     items: [
  //       { name: "Lead Management", desc: "Capture, track, and convert leads efficiently." },
  //       { name: "Contact Management", desc: "Maintain organized customer and client information." },
  //       { name: "Opportunity Management", desc: "Monitor deals and sales pipelines in real-time." },
  //       { name: "Sales Management", desc: "Track sales activities and automate follow-ups." },
  //       { name: "Customer Support (Ticketing)", desc: "Manage customer issues with a smart ticketing system." },
  //       { name: "Marketing Automation", desc: "Automate campaigns, email marketing, and audience segmentation." },
  //       { name: "Task & Activity Management", desc: "Assign and monitor tasks with reminders and scheduling." },
  //       { name: "Communication Management", desc: "Centralize emails, calls, chats, and communication logs." },
  //       { name: "Analytics & Reporting", desc: "Generate performance dashboards and insights." },
  //       { name: "Customer Feedback & Surveys", desc: "Collect and analyze feedback to improve services." },
  //       { name: "Document Management", desc: "Store, organize, and share CRM-related documents securely." },
  //       { name: "Mobile CRM", desc: "Access CRM features from mobile devices on the go." }
  //     ]
  //   },
  //   "HRM": {
  //     title: "Human Resources Management",
  //     items: [
  //       { name: "Human Resources Management", desc: "Manage employee records, roles, and lifecycle efficiently." },
  //       { name: "Payroll Management", desc: "Automate salary generation, deductions, and payslips." },
  //       { name: "Attendance Management", desc: "Track employee attendance, shift schedules, and leaves." }
  //     ]
  //   },
  //   "SMS": {
  //     title: "School Management System",
  //     items: [
  //       { name: "School Management System", desc: "Full digital solution for administration, academics, and staff." }
  //     ]
  //   },
  //   "POS": {
  //     title: "Point of Sale",
  //     items: [
  //       { name: "Restaurant Management", desc: "Handle billing, orders, table management, and kitchen workflows." }
  //     ]
  //   }
  // };

  const productsData = {
  "Digital Essentials": {
    title: "Digital Essentials Suite",
    items: [
      {
        name: "Access Kit",
        desc: "Provides secure access to digital services, tools, and authentication modules."
      },
      {
        name: "Digital Books",
        desc: "A platform to access and manage e-books, learning resources, and digital content."
      },
      {
        name: "Security Tools",
        desc: "Enhance data privacy, protect user accounts, and safeguard system resources."
      },
      {
        name: "Mail System",
        desc: "A full-featured email solution for sending, receiving, and managing communication."
      },
      {
        name: "AI Utilities",
        desc: "AI-based assistance for tasks, predictions, automation, and smart suggestions."
      }
    ]
  },

  "Transport & Travel": {
    title: "Transport, Booking & B2B Solutions",
    items: [
      {
        name: "Transport Management",
        desc: "Plan, track, and manage transportation fleets and logistics."
      },
      {
        name: "Booking System",
        desc: "Online ticketing and reservation system for travel, events, and services."
      },
      {
        name: "B2B Platform",
        desc: "A business-to-business marketplace for managing partners, vendors, and services."
      }
    ]
  },

  "Chat System": {
    title: "Chat & Instant Messaging",
    items: [
      {
        name: "Chat Application",
        desc: "Real-time messaging platform supporting text, media, and group communication."
      }
    ]
  },

  "Utility & Management": {
    title: "Management & Utility Suite",
    items: [
      // Management (ERP, CRM, POS, SMS, etc.)
      {
        name: "ERP, CRM, POS, SMS",
        desc: "Comprehensive business management tools covering operations, sales, HR, schools, and retail."
      },

      // Meet (album, mx player, camera & meet)
      {
        name: "Media & Meet",
        desc: "Media suite including gallery, video player, camera tools, and online meeting platform."
      },

      // Reminder (calendar, clock, reminder)
      {
        name: "Reminder & Scheduling Tools",
        desc: "Calendar, clock, and reminder utilities for managing events, alarms, and schedules."
      },

      // Call (call, contact, business calling, truecaller, justdial & message)
      {
        name: "Communication & Caller Suite",
        desc: "Includes calling, contacts, messaging, caller identification, business calling, and directory search."
      }
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


  const divisionsData = {
  "BTC Routes": {
    title: "BTC Routes",
    description: "Comprehensive education and career development platform",
    link: "https://www.btcroutes.com",
    image: routes,
    items: [
      "Professional Courses",
      "Industry Internships",
      "Career Placement Assistance",
      "Skill Development Programs",
      "Mentorship & Guidance"
    ]
  },

  "BTC Linx": {
    title: "BTC Linx",
    description: "Advanced AI automation and communication solutions",
    link: "https://www.btclinx.com",
    image: linx,
    items: [
      "AI Automation Solutions",
      "AI Automated Tele Calling",
      "Intelligent Process Automation",
      "Smart Communication Systems",
      "AI-Powered Customer Engagement"
    ]
  },

  "BTC ZoneT": {
    title: "BTC ZoneT",
    description: "Innovative hardware products, devices, and technology systems",
    link: "https://www.btczonet.com",  // ← Add your actual URL
    image: zonet,                     // ← Add your ZoneT image import
    items: [
      "Smart Devices & Gadgets",
      "IoT Hardware Solutions",
      "Embedded Systems",
      "Network & Connectivity Devices",
      "Hardware Integration & Support"
    ]
  }
};


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateDropdownPosition = (ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const dropdownWidth = 1000;
      const dropdownHeight = 500;
      
      const left = Math.max(20, (viewportWidth - dropdownWidth) / 2);
      const top = rect.bottom + 10;
      const maxTop = viewportHeight - dropdownHeight - 20;
      const adjustedTop = Math.min(top, maxTop);
      
      return { 
        left: Math.floor(left), 
        top: Math.floor(adjustedTop) 
      };
    }
    return { left: 0, top: 0 };
  };

  // Clear all timeouts and close dropdown immediately
  const closeAllDropdowns = () => {
    Object.values(hoverTimeouts).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
    setHoverTimeouts({});
    setActiveDropdown(null);
  };

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

    setshowConsultationModal(false);
    setShowSuccessModal(true);

  } catch (error) {
    console.error("API Error:", error);
    alert("Failed to submit. Please try again.");
  }finally{
    setIsLoading(false)
  }
};


  const handleOpenModal = () => setshowConsultationModal(true);

  const handleCloseModal = () => {
    setshowConsultationModal(false);

    // Optional: reset form when closed
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



  // Handle dropdown enter
  const handleDropdownEnter = (dropdownType) => {
    // Clear any existing timeouts first
    Object.values(hoverTimeouts).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
    setHoverTimeouts({});
    
    // Set the active dropdown immediately
    setActiveDropdown(dropdownType);
    
    // Set category defaults
    if (dropdownType === 'products') {
      setActiveProductCategory('ERP');
    } else if (dropdownType === 'divisions') {
      setActiveDivisionCategory('BTC Routes');
    }
    
    // Calculate position
    requestAnimationFrame(() => {
      let ref = null;
      if (dropdownType === 'products') ref = productsRef;
      else if (dropdownType === 'services') ref = servicesRef;
      else if (dropdownType === 'divisions') ref = divisionsRef;
      
      if (ref) {
        const position = calculateDropdownPosition(ref);
        setDropdownPosition(position);
      }
    });
  };

  // Handle dropdown leave with proper timeout management
  const handleDropdownLeave = (dropdownType) => {
    // Clear existing timeouts
    Object.values(hoverTimeouts).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
    
    // Set a new timeout for closing
    const timeoutId = setTimeout(() => {
      setActiveDropdown(null);
      setHoverTimeouts(prev => {
        const newTimeouts = { ...prev };
        delete newTimeouts[dropdownType];
        return newTimeouts;
      });
    }, 150);
    
    setHoverTimeouts(prev => ({ ...prev, [dropdownType]: timeoutId }));
  };

  // Handle dropdown content enter
  const handleDropdownContentEnter = (dropdownType) => {
    // Clear the closing timeout when entering dropdown content
    Object.values(hoverTimeouts).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
    setHoverTimeouts({});
    setActiveDropdown(dropdownType);
  };

  // Handle dropdown content leave
  const handleDropdownContentLeave = (dropdownType) => {
    handleDropdownLeave(dropdownType);
  };

  // Handle nav item click
  const handleNavClick = (navItem) => {
    closeAllDropdowns();
    setActiveNav(navItem);
  };

  // Handle category hover
  const handleProductCategoryHover = (category) => {
    setActiveProductCategory(category);
  };

  const handleDivisionCategoryHover = (category) => {
    setActiveDivisionCategory(category);
  };


  // Initialize dropdown position state
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });

  // Handle window resize and scroll to reposition dropdowns
  useEffect(() => {
    const handleReposition = () => {
      if (activeDropdown) {
        let ref = null;
        if (activeDropdown === 'products') ref = productsRef;
        else if (activeDropdown === 'services') ref = servicesRef;
        else if (activeDropdown === 'divisions') ref = divisionsRef;
        
        if (ref) {
          const position = calculateDropdownPosition(ref);
          setDropdownPosition(position);
        }
      }
    };

    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition);

    return () => {
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition);
    };
  }, [activeDropdown]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(hoverTimeouts).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, [hoverTimeouts]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top transition-all ${
        isScrolled 
          ? "bg-white shadow-sm" 
          : "bg-white"
      }`}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-normal fs-4 text-dark" to="/" onClick={() => handleNavClick("Home")}>
            <img src={logo} alt="BTC" width="140" className="d-inline-block align-text-top" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-1">
                <Link 
                  className={`nav-link px-3 py-2 rounded ${activeNav === "Home" ? "active text-primary fw-normal" : "text-dark"}`}
                  to="/"
                  onClick={() => handleNavClick("Home")}
                  onMouseEnter={closeAllDropdowns}
                >
                  Home
                </Link>
              </li>

              {/* Products Dropdown */}
              <li 
                ref={productsRef}
                className="nav-item mx-1 products-dropdown"
                onMouseEnter={() => handleDropdownEnter('products')}
                onMouseLeave={() => handleDropdownLeave('products')}
              >
                <div
                  className={`nav-link px-3 py-2 rounded ${
                    activeNav === "Products" ? "active text-primary fw-normal" : "text-dark"
                  }`}
                  onClick={() => handleNavClick("Products")}
                  style={{cursor: 'pointer'}}
                >
                  Products
                </div>
              </li>

              {/* Services Dropdown */}
              <li 
                ref={servicesRef}
                className="nav-item mx-1 services-dropdown"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={() => handleDropdownLeave('services')}
              >
                <div
                  className={`nav-link px-3 py-2 rounded ${
                    activeNav === "Services" ? "active text-primary fw-normal" : "text-dark"
                  }`}
                  onClick={() => handleNavClick("Services")}
                  style={{cursor: 'pointer'}}
                >
                  Services
                </div>
              </li>

              {/* Divisions Dropdown */}
              <li 
                ref={divisionsRef}
                className="nav-item mx-1 divisions-dropdown"
                onMouseEnter={() => handleDropdownEnter('divisions')}
                onMouseLeave={() => handleDropdownLeave('divisions')}
              >
                <div
                  className={`nav-link px-3 py-2 rounded ${
                    activeNav === "Divisions" ? "active text-primary fw-normal" : "text-dark"
                  }`}
                  onClick={() => handleNavClick("Divisions")}
                  style={{cursor: 'pointer'}}
                >
                  Divisions
                </div>
              </li>

              <li className="nav-item mx-1">
                <Link
                  className={`nav-link px-3 py-2 rounded ${activeNav === "About" ? "active text-primary fw-normal" : "text-dark"}`}
                  to="/about"
                  onClick={() => handleNavClick("About")}
                  onMouseEnter={closeAllDropdowns}
                >
                  About
                </Link>
              </li>

              <li className="nav-item mx-1">
                <Link
                  className={`nav-link px-3 py-2 rounded ${activeNav === "Contact" ? "active text-primary fw-normal" : "text-dark"}`}
                  to="/contact"
                  onClick={() => handleNavClick("Contact")}
                  onMouseEnter={closeAllDropdowns}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="d-flex align-items-center">
              <Link 
                className="btn btn-primary px-4 py-2 fw-normal rounded-3"
                // to="/consultation"
                // onClick={handleSubmitConsultation}
                onClick={handleOpenModal}
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .transition-all {
            transition: all 0.3s ease;
          }
          
          .nav-link {
            transition: all 0.2s ease;
            font-weight: 400;
            line-height: 1.6;
          }
          
          .nav-link:hover {
            background-color: #f8f9fa;
            transform: translateY(-1px);
          }
          
          .nav-link.active {
            background-color: #e3f2fd;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #0d6efd, #0a58ca);
            border: none;
            transition: all 0.3s ease;
            font-weight: 400;
            line-height: 1.6;
          }
          
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
          }
          
          .navbar-brand {
            transition: all 0.3s ease;
          }
          
          .navbar-brand:hover {
            transform: scale(1.05);
          }
        `}</style>
      </nav>

      {/* Products Mega Dropdown */}
      {activeDropdown === 'products' && (
        <div 
          ref={productsDropdownRef}
          className="mega-dropdown products-mega-dropdown mt-3"
          style={{
            left: `${dropdownPosition.left}px`,
            top: `${dropdownPosition.top}px`
          }}
          onMouseEnter={() => handleDropdownContentEnter('products')}
          onMouseLeave={() => handleDropdownContentLeave('products')}
        >
          <div className="mega-dropdown-sidebar">
            <h3 className="mega-dropdown-title">Our Products</h3>
            <ul className="mega-dropdown-list">
              {Object.keys(productsData).map((categoryKey) => (
                <li 
                  key={categoryKey} 
                  className={`mega-dropdown-item ${
                    activeProductCategory === categoryKey ? 'active' : ''
                  }`}
                >
                  <button 
                    className="mega-dropdown-link"
                    onMouseEnter={() => handleProductCategoryHover(categoryKey)}
                  >
                    {categoryKey}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mega-dropdown-content">
            {Object.entries(productsData).map(([categoryKey, categoryData]) => (
              <div 
                key={categoryKey}
                className={`mega-dropdown-panel ${
                  activeProductCategory === categoryKey ? 'active' : ''
                }`}
              >
                <h3 className="mega-dropdown-category-title">{categoryData.title}</h3>
                <div className="mega-dropdown-items-grid">
                  {categoryData.items.map((item, index) => (
                    <div key={index} className="mega-dropdown-item-card">
                      <h3 className="mega-dropdown-item-title">{item.name}</h3>
                      <p className="mega-dropdown-item-description">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services Mega Dropdown */}
      {activeDropdown === 'services' && (
        <div 
          ref={servicesDropdownRef}
          className="mega-dropdown services-mega-dropdown mt-3"
          style={{
            left: `${dropdownPosition.left}px`,
            top: `${dropdownPosition.top}px`
          }}
          onMouseEnter={() => handleDropdownContentEnter('services')}
          onMouseLeave={() => handleDropdownContentLeave('services')}
        >
          <div className="mega-dropdown-sidebar">
            <h3 className="mega-dropdown-title">Our Services</h3>
          </div>
          
          <div className="mega-dropdown-content">
            <div className="mega-dropdown-panel active">
              <h3 className="mega-dropdown-category-title">Professional Services</h3>
              <div className="mega-dropdown-items-grid">
                {servicesData.map((service, index) => (
                  <div key={index} className="mega-dropdown-item-card">
                    <h4 className="mega-dropdown-item-title">{service}</h4>
                    <p className="mega-dropdown-item-description">
                      Professional {service.toLowerCase()} services tailored to your business needs
                    </p>
                    <button className="mega-dropdown-item-button">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divisions Mega Dropdown */}
      {activeDropdown === 'divisions' && (
        <div 
          ref={divisionsDropdownRef}
          className="mega-dropdown divisions-mega-dropdown mt-3"
          style={{
            left: `${dropdownPosition.left}px`,
            top: `${dropdownPosition.top}px`
          }}
          onMouseEnter={() => handleDropdownContentEnter('divisions')}
          onMouseLeave={() => handleDropdownContentLeave('divisions')}
        >
          <div className="mega-dropdown-sidebar">
            <h3 className="mega-dropdown-title">Our Divisions</h3>
            <ul className="mega-dropdown-list">
              {Object.keys(divisionsData).map((categoryKey) => (
                <li 
                  key={categoryKey} 
                  className={`mega-dropdown-item ${
                    activeDivisionCategory === categoryKey ? 'active' : ''
                  }`}
                >
                  <button 
                    className="mega-dropdown-link"
                    onMouseEnter={() => handleDivisionCategoryHover(categoryKey)}
                  >
                    {categoryKey}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mega-dropdown-content">
            {Object.entries(divisionsData).map(([categoryKey, divisionData]) => (
              <div 
                key={categoryKey}
                className={`mega-dropdown-panel ${
                  activeDivisionCategory === categoryKey ? 'active' : ''
                }`}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mega-dropdown-category-title">{divisionData.title}</h3>
                  <Link to={divisionData.link} target="_blank">
                    <img src={divisionData.image} width={80} alt={divisionData.title} />
                  </Link>

                </div>
                <p className="mega-dropdown-category-description">
                  {divisionData.description}
                </p>
                <div className="mega-dropdown-items-grid">
                  {divisionData.items.map((item, index) => (
                    <div key={index} className="mega-dropdown-item-card">
                      <h4 className="mega-dropdown-item-title">{item}</h4>
                      <button className="mega-dropdown-item-button">
                        Explore More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Consultation Modal */}
{showConsultationModal && (
  <div className="modal show d-block">
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Get Free Consultation</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmitConsultation}>
              <div className="row">
                <div className="col-12 mb-3">
                  <label className="form-label">Consultation Type *</label>
                  <select 
                    className="form-select"
                    name="consultationType"
                    value={consultationForm.consultationType}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Select Consultation Type</option>
                    <option value="product">Product Consultation</option>
                    <option value="service">Service Consultation</option>
                  </select>
                </div>

                {consultationForm.consultationType === 'product' && (
                  <div className="col-12 mb-3">
                    <label className="form-label">Select Product *</label>
                    <select 
                      className="form-select"
                      name="product"
                      value={consultationForm.product}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Choose a product</option>
                      {getAllProducts().map((product, index) => (
                        <option key={index} value={product}>{product}</option>
                      ))}
                    </select>
                  </div>
                )}

                {consultationForm.consultationType === 'service' && (
                  <div className="col-12 mb-3">
                    <label className="form-label">Select Service *</label>
                    <select 
                      className="form-select"
                      name="service"
                      value={consultationForm.service}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Choose a service</option>
                      {servicesData.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    value={consultationForm.name}
                    onChange={handleFormChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email *</label>
                  <input 
                    type="email" 
                    className="form-control"
                    name="email"
                    value={consultationForm.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="form-control"
                    name="phone"
                    value={consultationForm.phone}
                    onChange={handleFormChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">Additional Message</label>
                  <textarea 
                    className="form-control"
                    rows="4"
                    name="message"
                    value={consultationForm.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your requirements, budget, timeline, or any specific needs..."
                  ></textarea>
                </div>
              </div>

              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Consultation Request
                </button>
              </div> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal} disabled={isLoading}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? (
                    <div className="button-loading">
                      <div className="loading-spinner"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit Consultation Request"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

{/* Success Modal */}
{showSuccessModal && (
  <div className="modal show d-block" style={{backgroundColor: 'rgba(248, 245, 245, 0.92)'}}>
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog modal-md">
        <div className="modal-content text-center">
          <div className="modal-body py-5">
            <div className="mb-4">
              <div className="success-icon" style={{
                width: '80px',
                height: '80px',
                background: '#10B981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                fontSize: '2rem',
                color: 'white'
              }}>
                ✓
              </div>
            </div>
            <h4 className="mb-3" style={{color: '#10B981'}}>Thank You!</h4>
            <p className="mb-4">
              Your consultation request has been submitted successfully. 
              Our team will contact you within 24 hours to discuss your requirements.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      <style jsx global>{`
        /* Import Roboto font */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
        
        * {
          font-family: 'Roboto', sans-serif;
        }

        .mega-dropdown {
          position: fixed;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          z-index: 1001;
          width: 1000px;
          display: flex;
          max-height: 500px;
          overflow: hidden;
          animation: dropdownFadeIn 0.3s ease-out;
          transform-origin: top center;
          border: 1px solid #e2e8f0;
          font-family: 'Roboto', sans-serif;
        }

        .products-mega-dropdown {
          border-color: #3b82f6;
        }

        .services-mega-dropdown {
          border-color: #10b981;
        }

        .divisions-mega-dropdown {
          border-color: #8b5cf6;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .mega-dropdown-sidebar {
          width: 250px;
          background: #f8fafc;
          border-right: 1px solid #e2e8f0;
          padding: 1.5rem 0;
          flex-shrink: 0;
        }

        .mega-dropdown-title {
          padding: 0 1.5rem 1rem;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 400;
          color: #1e293b;
          border-bottom: 1px solid #e2e8f0;
          line-height: 1.6;
          letter-spacing: 0.5px;
        }

        .mega-dropdown-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mega-dropdown-item {
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }

        .mega-dropdown-item.active .mega-dropdown-link {
          background: white;
          border-right: 3px solid;
        }

        .products-mega-dropdown .mega-dropdown-item.active .mega-dropdown-link {
          color: #3b82f6;
          border-right-color: #3b82f6;
        }

        .divisions-mega-dropdown .mega-dropdown-item.active .mega-dropdown-link {
          color: #8b5cf6;
          border-right-color: #8b5cf6;
        }

        .mega-dropdown-link {
          width: 100%;
          padding: 0.75rem 1.5rem;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 0.95rem;
          color: #475569;
          transition: all 0.2s ease;
          text-align: left;
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: 0.3px;
        }

        .mega-dropdown-link:hover {
          background: white;
          border-right: 3px solid;
        }

        .products-mega-dropdown .mega-dropdown-link:hover {
          color: #3b82f6;
          border-right-color: #3b82f6;
        }

        .divisions-mega-dropdown .mega-dropdown-link:hover {
          color: #8b5cf6;
          border-right-color: #8b5cf6;
        }
        /* Modal Styles */
// .modal-backdrop {
//   z-index: 1050;
// }

.modal {
  z-index: 1060;
}

.modal-content {
  border: none;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem;
}

.modal-title {
  font-weight: 500;
  color: #1e293b;
}

.modal-body {
  padding: 1.5rem;
}

.form-label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.form-control, .form-select {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem;
  transition: all 0.2s ease;
}

.form-control:focus, .form-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.modal-footer {
  border-top: 1px solid #e2e8f0;
  padding: 1.5rem;
}

.success-icon {
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .modal-dialog {
    margin: 1rem;
  }
}

        .mega-dropdown-content {
          flex: 1;
          padding: 2rem;
          position: relative;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .mega-dropdown-panel {
          display: none;
          flex: 1;
          animation: contentFadeIn 0.2s ease-in-out;
        }

        .mega-dropdown-panel.active {
          display: flex;
          flex-direction: column;
        }

        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .mega-dropdown-category-title {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 400;
          color: #1e293b;
          line-height: 1.6;
          letter-spacing: 0.5px;
        }

        .mega-dropdown-category-description {
          margin: 0 0 1.5rem 0;
          font-size: 1rem;
          color: #64748b;
          line-height: 1.7;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .mega-dropdown-items-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .mega-dropdown-item-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1.25rem;
          transition: all 0.2s ease;
        }

        .mega-dropdown-item-card:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .products-mega-dropdown .mega-dropdown-item-card:hover {
          border-color: #3b82f6;
        }

        .divisions-mega-dropdown .mega-dropdown-item-card:hover {
          border-color: #8b5cf6;
        }

        .mega-dropdown-item-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
          font-weight: 400;
          color: #1e293b;
          line-height: 1.6;
          letter-spacing: 0.3px;
        }

        .mega-dropdown-item-description {
          margin: 0 0 1rem 0;
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .mega-dropdown-item-button {
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.2s ease;
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: 0.3px;
        }

        .products-mega-dropdown .mega-dropdown-item-button {
          background: #3b82f6;
        }

        .products-mega-dropdown .mega-dropdown-item-button:hover {
          background: #2563eb;
        }

        .services-mega-dropdown .mega-dropdown-item-button {
          background: #10b981;
        }

        .services-mega-dropdown .mega-dropdown-item-button:hover {
          background: #059669;
        }

        .divisions-mega-dropdown .mega-dropdown-item-button {
          background: #8b5cf6;
        }

        .divisions-mega-dropdown .mega-dropdown-item-button:hover {
          background: #7c3aed;
        }

        /* Navbar specific font styles */
        .navbar {
          font-family: 'Roboto', sans-serif;
        }

        .navbar-brand {
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .nav-link {
          font-weight: 400;
          letter-spacing: 0.3px;
          line-height: 1.6;
        }

        .btn-primary {
          font-weight: 300;
          letter-spacing: 0.3px;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .mega-dropdown {
            width: 90vw;
            left: 5vw !important;
            max-width: 800px;
          }
        }

        @media (max-width: 768px) {
          .mega-dropdown {
            display: none;
          }
        }

        /* Loading Animation Styles */
.button-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Pulse animation for the button during loading */
.btn-primary:disabled {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
  }
}

/* Ensure proper button styling with loading state */
.btn {
  position: relative;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
      `}</style>
    </>
  );
};

export default Navbar;