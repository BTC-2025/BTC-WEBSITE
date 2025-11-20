// import React, { useEffect, useRef, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaCode, FaPaintBrush, FaMobileAlt, FaGamepad,FaBrain, FaCloud } from "react-icons/fa";
// import "../styles/Services.css";
// import { useNavigate } from "react-router-dom";

// const Services = () => {
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [showCards, setShowCards] = useState(false);

//   const services = [
//     { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable websites with latest tech." },
//     { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Beautiful and user-friendly designs." },
//     { icon: <FaMobileAlt />, title: "App Development", desc: "Cross-platform mobile applications." },
//     { icon: <FaGamepad />, title: "Game Development", desc: "Scalable multiplayer backends and real-time synchronization."},
//     { icon: <FaBrain />, title: "AI/ML Services", desc: "Intelligent solutions powered by AI and machine learning." },
//     { icon: <FaCloud />, title:"Cloud Services", desc: "Reliable cloud solutions for your business." }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const scrolled = Math.min(Math.max(windowHeight - rect.top, 0), windowHeight);
//       const progress = scrolled / windowHeight;

//       setProgress(progress);

//       if (progress >= 1) {
//         setShowCards(true);
//       } else {
//         setShowCards(false);
//       }
//     };


//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const Navigate = useNavigate()

//   return (
//     <section ref={sectionRef} id="services" className="services-section">
//       <div className="services-sticky">
//         <Container>
//           <h2
//             className={`services-heading-card ${progress >= 1 ? "grown" : ""}`}
//             style={{ opacity: progress, transform: `scale(${0.8 + progress * 0.2})` }}
//           >
//             Our Services
//           </h2>

//             <Row className={`services-cards ${showCards ? "show" : ""}`}>
//               {services.map((service, index) => (
//                 <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
//                   <div className="service-tile text-dark" style={{ transitionDelay: `${index * 0.2}s`, cursor: showCards ? "pointer" : "default" }} onClick={() => Navigate(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`)}>
//                     <div className="service-icon">{service.icon}</div>
//                     <h3>{service.title}</h3>
//                     <p>{service.desc}</p>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Services;





//right to left perfect
// import React, { useEffect, useRef, useState } from "react";
// import { Container } from "react-bootstrap";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaMobileAlt,
//   FaGamepad,
//   FaBrain,
//   FaCloud,
// } from "react-icons/fa";
// import "../styles/Services.css";
// import { useNavigate } from "react-router-dom";

// const Services = () => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const services = [
//     { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable websites with latest tech." },
//     { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Beautiful and user-friendly designs." },
//     { icon: <FaMobileAlt />, title: "App Development", desc: "Cross-platform mobile applications." },
//     { icon: <FaGamepad />, title: "Game Development", desc: "Scalable multiplayer backends and real-time sync." },
//     { icon: <FaBrain />, title: "AI/ML Services", desc: "Intelligent solutions powered by AI & ML." },
//     { icon: <FaCloud />, title: "Cloud Services", desc: "Reliable cloud solutions for your business." },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const scrolled = windowH - rect.top;
//       const progress = scrolled / windowH;

//       setScrollProgress(progress);

//       if (scrolled > 0) {
//         const index = Math.min(
//           Math.floor(scrolled / windowH),
//           services.length - 1
//         );
//         setActiveIndex(index);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navigate = useNavigate();

//   return (
//     <section ref={sectionRef} id="services" className="services-section">

//       <div className="services-sticky">
//         <Container>
//           <h2 className="services-heading">Our Services</h2>

//           <div className="single-card-wrapper d-flex justify-content-center align-items-center">
//             {services.map((service, index) => {
//               const isActive = index === activeIndex;

//               // animation movement values
//               let translateX = -200; // entering from left
//               let opacity = 0;

//               if (isActive) {
//                 translateX = 0; // center
//                 opacity = 1;
//               } else if (index < activeIndex) {
//                 translateX = 200; // exit to right
//                 opacity = 0;
//               }

//               return (
//                 <div
//                   key={index}
//                   className="service-single-card"
//                   style={{
//                     transform: `translateX(${translateX}px)`,
//                     opacity,
//                   }}
//                   onClick={() =>
//                     navigate(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`)
//                   }
//                 >
//                   <div className="service-icon">{service.icon}</div>
//                   <h3>{service.title}</h3>
//                   <p>{service.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Services;



//rotation

// import React, { useEffect, useRef, useState } from "react";
// import { Container } from "react-bootstrap";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaMobileAlt,
//   FaGamepad,
//   FaBrain,
//   FaCloud,
// } from "react-icons/fa";
// import "../styles/Services.css";
// import { useNavigate } from "react-router-dom";

// const Services = () => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const services = [
//     { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable websites with latest tech." },
//     { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Beautiful and user-friendly designs." },
//     { icon: <FaMobileAlt />, title: "App Development", desc: "Cross-platform mobile applications." },
//     { icon: <FaGamepad />, title: "Game Development", desc: "Scalable multiplayer backends and real-time sync." },
//     { icon: <FaBrain />, title: "AI/ML Services", desc: "Intelligent solutions powered by AI & ML." },
//     { icon: <FaCloud />, title: "Cloud Services", desc: "Reliable cloud solutions for your business." },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const scrolled = windowH - rect.top;

//       if (scrolled > 0) {
//         const index = Math.min(
//           Math.floor(scrolled / windowH),
//           services.length - 1
//         );
//         setActiveIndex(index);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navigate = useNavigate();

//   return (
//     <section ref={sectionRef} id="services" className="services-section">

//       <div className="services-sticky">
//         <Container>
//           <h2 className="services-heading">Our Services</h2>

//           <div className="single-card-wrapper">
//             {services.map((service, index) => {
//               const isActive = index === activeIndex;

//               // Rotation animation logic
//               let rotation = -45;     // entering from rotated left
//               let translateY = 50;    // little down
//               let opacity = 0;

//               if (isActive) {
//                 rotation = 0;        // straight front
//                 translateY = 0;
//                 opacity = 1;
//               } else if (index < activeIndex) {
//                 rotation = 45;       // rotate and exit right
//                 translateY = -50;
//                 opacity = 0;
//               }

//               return (
//                 <div
//                   key={index}
//                   className="service-single-card"
//                   style={{
//                     transform: `
//                       perspective(1000px)
//                       rotateY(${rotation}deg)
//                       translateY(${translateY}px)
//                     `,
//                     opacity,
//                   }}
//                   onClick={() =>
//                     navigate(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`)
//                   }
//                 >
//                   <div className="service-icon">{service.icon}</div>
//                   <h3>{service.title}</h3>
//                   <p>{service.desc}</p>
//                 </div>
//               );
//             })}
//           </div>

//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Services;


//zoom in
// import React, { useEffect, useRef, useState } from "react";
// import { Container } from "react-bootstrap";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaMobileAlt,
//   FaGamepad,
//   FaBrain,
//   FaCloud,
// } from "react-icons/fa";
// import "../styles/Services.css";
// import { useNavigate } from "react-router-dom";

// const Services = () => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const services = [
//     { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable websites with latest tech." },
//     { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Beautiful and user-friendly designs." },
//     { icon: <FaMobileAlt />, title: "App Development", desc: "Cross-platform mobile applications." },
//     { icon: <FaGamepad />, title: "Game Development", desc: "Scalable multiplayer backends and real-time sync." },
//     { icon: <FaBrain />, title: "AI/ML Services", desc: "Intelligent solutions powered by AI & ML." },
//     { icon: <FaCloud />, title: "Cloud Services", desc: "Reliable cloud solutions for your business." },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sec = sectionRef.current;
//       if (!sec) return;

//       const rect = sec.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const scrolled = windowH - rect.top;

//       if (scrolled > 0) {
//         const index = Math.min(
//           Math.floor(scrolled / windowH),
//           services.length - 1
//         );
//         setActiveIndex(index);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navigate = useNavigate();

//   return (
//     <section ref={sectionRef} id="services" className="services-section">

//       <div className="services-sticky">
//         <Container>
//           <h2 className="services-heading">Our Services</h2>

//           <div className="single-card-wrapper">
//             {services.map((service, index) => {
//               const isActive = index === activeIndex;

//               // zoom animation values
//               let scale = 0.6;   // small before entering
//               let opacity = 0;

//               if (isActive) {
//                 scale = 1;       // full size when active
//                 opacity = 1;
//               } else if (index < activeIndex) {
//                 scale = 0.6;     // shrink when leaving
//                 opacity = 0;
//               }

//               return (
//                 <div
//                   key={index}
//                   className="service-single-card"
//                   style={{
//                     transform: `scale(${scale})`,
//                     opacity,
//                   }}
//                   onClick={() =>
//                     navigate(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`)
//                   }
//                 >
//                   <div className="service-icon">{service.icon}</div>
//                   <h3>{service.title}</h3>
//                   <p>{service.desc}</p>
//                 </div>
//               );
//             })}
//           </div>

//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React, { useEffect, useRef, useState } from "react";
// import { Container } from "react-bootstrap";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaMobileAlt,
//   FaGamepad,
//   FaBrain,
//   FaCloud,
// } from "react-icons/fa";
// import "../styles/Services.css";
// import { useNavigate } from "react-router-dom";

// const Services = () => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const services = [
//     { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable websites with latest tech." },
//     { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Beautiful and user-friendly designs." },
//     { icon: <FaMobileAlt />, title: "App Development", desc: "Cross-platform mobile applications." },
//     { icon: <FaGamepad />, title: "Game Development", desc: "Scalable multiplayer backends and real-time sync." },
//     { icon: <FaBrain />, title: "AI/ML Services", desc: "Intelligent solutions powered by AI & ML." },
//     { icon: <FaCloud />, title: "Cloud Services", desc: "Reliable cloud solutions for your business." },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const scrolled = windowH - rect.top;

//       if (scrolled > 0) {
//         const index = Math.min(
//           Math.floor(scrolled / windowH),
//           services.length - 1
//         );
//         setActiveIndex(index);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navigate = useNavigate();

//   return (
//     <section ref={sectionRef} id="services" className="services-section">

//       <div className="services-sticky">
//         <Container>
//           <h2 className="services-heading">Our Services</h2>

//           <div className="single-card-wrapper d-flex justify-content-center">
//             {services.map((service, index) => {
//               const isActive = index === activeIndex;

//               // Strong parallax motion
//               let translateZ = -350;  // deep back
//               let opacity = 0;
//               let scale = 0.8;        // small when far

//               if (isActive) {
//                 translateZ = 0;       // comes to center
//                 opacity = 1;
//                 scale = 1;
//               } else if (index < activeIndex) {
//                 translateZ = 300;     // moves forward and away
//                 opacity = 0;
//                 scale = 0.8;
//               }

//               return (
//                 <div
//                   key={index}
//                   className="service-single-card parallax-card"
//                   style={{
//                     transform: `perspective(1400px) translateZ(${translateZ}px) scale(${scale})`,
//                     opacity,
//                   }}
//                   onClick={() =>
//                     navigate(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`)
//                   }
//                 >
//                   <div className="service-icon">{service.icon}</div>
//                   <h3>{service.title}</h3>
//                   <p>{service.desc}</p>
//                 </div>
//               );
//             })}
//           </div>

//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Services;





import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaGamepad,
  FaBrain,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(80); // Default navbar height

  const services = [
    { 
      icon: <FaCode />, 
      title: "Web Development", 
      desc: "Modern, scalable websites with latest tech.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    { 
      icon: <FaPaintBrush />, 
      title: "UI/UX Design", 
      desc: "Beautiful and user-friendly designs.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    { 
      icon: <FaMobileAlt />, 
      title: "App Development", 
      desc: "Cross-platform mobile applications.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    { 
      icon: <FaGamepad />, 
      title: "Game Development", 
      desc: "Scalable multiplayer backends and real-time sync.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    { 
      icon: <FaBrain />, 
      title: "AI/ML Services", 
      desc: "Intelligent solutions powered by AI & ML.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    { 
      icon: <FaCloud />, 
      title: "Cloud Services", 
      desc: "Reliable cloud solutions for your business.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
  ];

  // useEffect(() => {
  //   // Get navbar height dynamically
  //   const navbar = document.querySelector('nav, .navbar, [role="navigation"]');
  //   if (navbar) {
  //     setNavbarHeight(navbar.offsetHeight);
  //   }

  //   const handleScroll = () => {
  //     const section = sectionRef.current;
  //     if (!section) return;

  //     const rect = section.getBoundingClientRect();
  //     const windowH = window.innerHeight;
      
  //     // Adjust for navbar height
  //     const adjustedTop = rect.top + navbarHeight;
  //     const scrolled = windowH - adjustedTop;

  //     if (scrolled > 0) {
  //       const index = Math.min(
  //         Math.floor(scrolled / (windowH - navbarHeight)),
  //         services.length - 1
  //       );
  //       setActiveIndex(index);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", handleScroll);
    
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", handleScroll);
  //   };
  // }, [navbarHeight]);

  useEffect(() => {
  const servicesLength = services.length; // store once

  // Get navbar height dynamically
  const navbar = document.querySelector('nav, .navbar, [role="navigation"]');
  if (navbar) {
    setNavbarHeight(navbar.offsetHeight);
  }

  const handleScroll = () => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Adjust for navbar height
    const adjustedTop = rect.top + navbarHeight;
    const scrolled = windowH - adjustedTop;

    if (scrolled > 0) {
      const index = Math.min(
        Math.floor(scrolled / (windowH - navbarHeight)),
        servicesLength - 1 // use stored length
      );
      setActiveIndex(index);
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, [navbarHeight,services.length]); // no warning now


  const navigate = useNavigate();

  const scrollToService = (index) => {
    const section = sectionRef.current;
    if (section) {
      const targetScroll = section.offsetTop + ((window.innerHeight - navbarHeight) * index);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="services-section">
      <div 
        className="services-sticky"
        style={{ 
          top: `${navbarHeight}px`,
          height: `calc(100vh - ${navbarHeight}px)`
        }}
      >
        <Container>
          <h2 className="services-heading">Our Services</h2>

          <div className="single-card-wrapper">
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              let translateZ = -350;
              let opacity = 0;
              let scale = 0.8;
              let rotation = 0;

              if (isActive) {
                translateZ = 0;
                opacity = 1;
                scale = 1;
                rotation = 0;
              } else if (index < activeIndex) {
                translateZ = 300;
                opacity = 0;
                scale = 0.8;
                rotation = -5;
              } else {
                rotation = 5;
              }

              return (
                <div
                  key={index}
                  className={`service-single-card parallax-card ${isActive ? 'active-card' : ''}`}
                  style={{
                    transform: `perspective(1400px) translateX(-50%) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotation}deg)`,
                    opacity,
                  }}
                  onClick={() =>
                    navigate(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`)
                  }
                >
                  <div 
                    className="service-icon"
                    style={{
                      background: service.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="service-arrow">
                    <FaArrowRight className="arrow-icon" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress indicator */}
          <div className="progress-indicator">
            {services.map((_, index) => (
              <div
                key={index}
                className={`progress-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToService(index)}
              />
            ))}
          </div>

        </Container>
      </div>
    </section>
  );
};

export default Services;