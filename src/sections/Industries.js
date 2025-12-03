// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "aos/dist/aos.css";
// import '../styles/Industries.css'
// import bank from '../assets/banking.png'
// import transport from '../assets/transport.png'
// import health from '../assets/health.png'
// import manufacturing from '../assets/manufacturing.png'
// import telecom from '../assets/tele.png'
// import banklogo from '../assets/banklogo.png'
// import translogo from '../assets/transportation.png'
// import healthlogo from '../assets/healthlogo.png'
// import manulogo from '../assets/manulogo.png'
// import telecomlogo from '../assets/telecomlogo.png'
// import food from '../assets/food.png'
// import foodlogo from '../assets/foodlogo.png'
// import fashion from '../assets/fashion.png'
// import fashionlogo from '../assets/fashiologo.png'
// import {
//   FaChartLine,
//   FaRoute,
//   FaHeartbeat,
//   FaCogs,
//   FaBroadcastTower,
//   FaUtensils,
//   FaTshirt,
// } from "react-icons/fa";


// const industriesData = [
//   {
//     name: "Banking and Finance",
//     description: `Our Banking and Finance solutions streamline financial operations, enhance customer experience, and ensure regulatory compliance. We provide advanced tools for digital banking, payment processing, risk management, loan management, and analytics, leveraging AI and secure technologies to optimize efficiency and drive growth in the financial sector.`,
//     image: bank,

//     // logo: banklogo, // OLD LOGO REMOVED
//     icon: <FaChartLine size={40} color="#0d6efd" />,

//     points: [
//       "Digital Banking Solutions",
//       "Payment Management",
//       "Risk & Compliance Management",
//       "Loan & Asset Management",
//     ],
//   },
//   {
//     name: "Transportation",
//     description: `Our solutions for the transportation sector include logistics management, fleet tracking, and route optimization, utilizing advanced algorithms to improve reliability, safety, and cost-efficiency.`,
//     image: transport,

//     // logo: translogo,
//     icon: <FaRoute size={40} color="#0d6efd" />,

//     points: [
//       "Logistics",
//       "Fuel Management",
//       "Fleet Management",
//       "Trip Planning",
//       "Route Optimization",
//       "Expenses Management",
//     ],
//   },
//   {
//     name: "Health Care",
//     description: `We provide telemedicine platforms, patient management systems, and AI-driven diagnostic tools, enhancing patient care while ensuring data privacy and compliance with regulatory standards.`,
//     image: health,

//     // logo: healthlogo,
//     icon: <FaHeartbeat size={40} color="#0d6efd" />,

//     points: [
//       "Dicom Viewer",
//       "Doctor Consultation",
//       "Patient Management",
//       "Doctor Appointment",
//       "AI-driven Diagnostic",
//       "Fees Management",
//     ],
//   },
//   {
//     name: "Manufacturing",
//     description: `Our focus is on delivering integrated solutions that encompass production, machining, assembly, delivery, stock, purchase, and order management, streamlining the entire manufacturing lifecycle.`,
//     image: manufacturing,

//     // logo: manulogo,
//     icon: <FaCogs size={40} color="#0d6efd" />,

//     points: [
//       "Design & Development",
//       "Production Management",
//       "Purchase Management",
//       "Assembly Management",
//       "Asset Management",
//       "Quality Control",
//     ],
//   },
//   {
//     name: "Telecom & Media",
//     description: `Our Telecom and Media solutions enhance communication, broadcasting, and digital content delivery. We offer advanced platforms for network management, streaming services, customer engagement, and analytics to optimize performance and reach.`,
//     image: telecom,

//     // logo: telecomlogo,
//     icon: <FaBroadcastTower size={40} color="#0d6efd" />,

//     points: [
//       "Network Management",
//       "Content Delivery",
//       "Streaming & Broadcasting",
//       "Customer Engagement",
//       "Analytics & Reporting",
//     ],
//   },
//   {
//     name: "Food & Restaurant",
//     description: `We provide End-to-End digital solutions for restaurants, food delivery, cloud kitchens, and food production units. Our systems optimize order management, inventory, billing, delivery tracking, and customer experience.`,
//     image: food,

//     // logo: foodlogo,
//     icon: <FaUtensils size={40} color="#0d6efd" />,

//     points: [
//       "Restaurant POS System",
//       "Online Food Ordering",
//       "Cloud Kitchen Management",
//       "Inventory & Stock Management",
//       "Delivery Partner Integration",
//       "Billing & Offers Management",
//     ],
//   },
//   {
//     name: "Fashion & Retail",
//     description: `Our Fashion and Retail solutions help brands manage design workflows, inventory, online stores, customer loyalty, and omnichannel sales—empowering businesses to grow digitally with modern retail technologies.`,
//     image: fashion,

//     // logo: fashionlogo,
//     icon: <FaTshirt size={40} color="#0d6efd" />,

//     points: [
//       "E-commerce Storefront",
//       "Inventory & Stock Tracking",
//       "Order & Return Management",
//       "Customer Loyalty & Membership",
//       "Catalog & Collection Management",
//       "Sales Analytics & Reporting",
//     ],
//   },
// ];



// const Industries = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-5 bg-light" id="industries">
//       <Container>
//         <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
//           Industries We Serve
//         </h2>
//         <Row>
//           {/* LEFT TABS */}
//           <Col md={4}>
//             {industriesData.map((industry, index) => (
//               <Button
//                 key={index}
//                 variant={activeIndex === index ? "primary" : "light"}
//                 className={`d-flex align-items-center industry-btn mb-3 w-100 justify-content-start py-3 px-4 shadow-sm rounded-pill text-start ${
//                   activeIndex === index ? "text-white" : ""
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <div className="me-3" style={{color:"white"}}>
//                   {industry.icon} {/* NEW ICON */}
//                 </div>

//                 <div>
//                   <h6 className="mb-0 fw-bold">{industry.name}</h6>
//                   <small>All kind of industry</small>
//                 </div>
//               </Button>
//             ))}
//           </Col>

//           {/* RIGHT CONTENT */}
//           <Col md={8}>
//             <Row className="align-items-center">
//               <Col md={6} className="mb-3" data-aos="fade-up">
//                 <img
//                   src={industriesData[activeIndex].image}
//                   alt={industriesData[activeIndex].name}
//                   className="img-fluid"
//                   style={{ height: "350px", width: "100%" }}
//                 />
//               </Col>

//               <Col md={6} data-aos="fade-up">
//                 <h4 className="fw-bold">{industriesData[activeIndex].name}</h4>
//                 <p>{industriesData[activeIndex].description}</p>

//                 <Row className="g-2">
//                   {industriesData[activeIndex].points.map((point, idx) => (
//                     <Col sm={6} key={idx}>
//                       <div className="p-2 bg-white shadow-sm rounded">
//                         <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                         {point}
//                       </div>
//                     </Col>
//                   ))}
//                 </Row>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Industries;




import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import '../styles/Industries.css'
import bank from '../assets/banking.png'
import transport from '../assets/transport.png'
import health from '../assets/health.png'
import manufacturing from '../assets/manufacturing.png'
import telecom from '../assets/tele.png'
import food from '../assets/food.png'
import fashion from '../assets/fashion.png'
import {
  FaChartLine,
  FaRoute,
  FaHeartbeat,
  FaCogs,
  FaBroadcastTower,
  FaUtensils,
  FaTshirt,
  FaCheckCircle,
} from "react-icons/fa";

const industriesData = [
  {
    name: "Banking and Finance",
    description: `Our Banking and Finance solutions streamline financial operations, enhance customer experience, and ensure regulatory compliance. We provide advanced tools for digital banking, payment processing, risk management, loan management, and analytics, leveraging AI and secure technologies to optimize efficiency and drive growth in the financial sector.`,
    image: bank,
    icon: <FaChartLine size={24} />,
    points: [
      "Digital Banking Solutions",
      "Payment Management",
      "Risk & Compliance Management",
      "Loan & Asset Management",
    ],
  },
  {
    name: "Transportation",
    description: `Our solutions for the transportation sector include logistics management, fleet tracking, and route optimization, utilizing advanced algorithms to improve reliability, safety, and cost-efficiency.`,
    image: transport,
    icon: <FaRoute size={24} />,
    points: [
      "Logistics",
      "Fuel Management",
      "Fleet Management",
      "Trip Planning",
      "Route Optimization",
      "Expenses Management",
    ],
  },
  {
    name: "Health Care",
    description: `We provide telemedicine platforms, patient management systems, and AI-driven diagnostic tools, enhancing patient care while ensuring data privacy and compliance with regulatory standards.`,
    image: health,
    icon: <FaHeartbeat size={24} />,
    points: [
      "Dicom Viewer",
      "Doctor Consultation",
      "Patient Management",
      "Doctor Appointment",
      "AI-driven Diagnostic",
      "Fees Management",
    ],
  },
  {
    name: "Manufacturing",
    description: `Our focus is on delivering integrated solutions that encompass production, machining, assembly, delivery, stock, purchase, and order management, streamlining the entire manufacturing lifecycle.`,
    image: manufacturing,
    icon: <FaCogs size={24} />,
    points: [
      "Design & Development",
      "Production Management",
      "Purchase Management",
      "Assembly Management",
      "Asset Management",
      "Quality Control",
    ],
  },
  {
    name: "Telecom & Media",
    description: `Our Telecom and Media solutions enhance communication, broadcasting, and digital content delivery. We offer advanced platforms for network management, streaming services, customer engagement, and analytics to optimize performance and reach.`,
    image: telecom,
    icon: <FaBroadcastTower size={24} />,
    points: [
      "Network Management",
      "Content Delivery",
      "Streaming & Broadcasting",
      "Customer Engagement",
      "Analytics & Reporting",
    ],
  },
  {
    name: "Food & Restaurant",
    description: `We provide End-to-End digital solutions for restaurants, food delivery, cloud kitchens, and food production units. Our systems optimize order management, inventory, billing, delivery tracking, and customer experience.`,
    image: food,
    icon: <FaUtensils size={24} />,
    points: [
      "Restaurant POS System",
      "Online Food Ordering",
      "Cloud Kitchen Management",
      "Inventory & Stock Management",
      "Delivery Partner Integration",
      "Billing & Offers Management",
    ],
  },
  {
    name: "Fashion & Retail",
    description: `Our Fashion and Retail solutions help brands manage design workflows, inventory, online stores, customer loyalty, and omnichannel sales—empowering businesses to grow digitally with modern retail technologies.`,
    image: fashion,
    icon: <FaTshirt size={24} />,
    points: [
      "E-commerce Storefront",
      "Inventory & Stock Tracking",
      "Order & Return Management",
      "Customer Loyalty & Membership",
      "Catalog & Collection Management",
      "Sales Analytics & Reporting",
    ],
  },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="industries-section py-5" id="industries">
      <Container>
        <h1 className="text-center mb-5 section-title" data-aos="fade-up">
          Industries We Serve
        </h1>
        <Row>
          {/* LEFT TABS */}
          <Col md={4}>
            {industriesData.map((industry, index) => (
              <Button
                key={index}
                variant={activeIndex === index ? "primary" : "light"}
                className={`d-flex align-items-center industry-btn mb-3 w-100 justify-content-start py-3 px-4 ${
                  activeIndex === index ? "active text-white" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="industry-icon me-3">
                  {industry.icon}
                </div>
                <div>
                  <h6 className="mb-1" style={{fontWeight:"350"}}>{industry.name}</h6>
                  <small className={activeIndex === index ? "text-white-50" : "text-muted"} style={{fontWeight:"300"}}>
                    All kind of industry
                  </small>
                </div>
              </Button>
            ))}
          </Col>

          {/* RIGHT CONTENT */}
          <Col md={8}>
            <div className="industry-content p-4 h-100">
              <Row className="align-items-center h-100">
                <Col md={6} className="mb-3" data-aos="fade-up">
                  <img
                    src={industriesData[activeIndex].image}
                    alt={industriesData[activeIndex].name}
                    className="img-fluid industry-image"
                    style={{ height: "350px", width: "100%", objectFit: "cover" }}
                  />
                </Col>

                <Col md={6} data-aos="fade-up">
                  <h3 className=" mb-3 text-dark" style={{fontWeight:"400"}}>{industriesData[activeIndex].name}</h3>
                  <p className="text-muted mb-4">{industriesData[activeIndex].description}</p>

                  <Row className="g-3">
                    {industriesData[activeIndex].points.map((point, idx) => (
                      <Col sm={6} key={idx}>
                        <div className="feature-point p-3">
                          <FaCheckCircle className="text-primary me-2" />
                          <span className="text-dark">{point}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Industries;