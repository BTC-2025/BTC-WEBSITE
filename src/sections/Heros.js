// import React from 'react';
// import '../styles/Hero.css';
// import linx from '../assets/favicon.png';
// import routes from '../assets/logo2.png';
// import zonet from '../assets/zonet.png';
// import '../styles/Heros.css'
// import { Link, useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="hero">
//       {/* Background Elements */}
//       <div className="background-effects">
//         <div className="grid-pattern"></div>
//         <div className="gradient-orb orb-1"></div>
//         <div className="gradient-orb orb-2"></div>
//         <div className="floating-dots">
//           {[...Array(20)].map((_, i) => (
//             <div key={i} className="floating-dot" style={{
//               '--delay': `${i * 0.2}s`,
//               '--x': `${Math.random() * 100}%`,
//               '--y': `${Math.random() * 100}%`
//             }}></div>
//           ))}
//         </div>
//       </div>

//       <div className="hero-container">
//         {/* Header */}
//         {/* <div className="hero-header">
//           <div className="badge-container">
//             <div className="badge-dots">
//               <span className="dot dot-1"></span>
//               <span className="dot dot-2"></span>
//               <span className="dot dot-3"></span>
//             </div>
//             <span className="badge-label">Digital Innovation Studio</span>
//             <div className="badge-line"></div>
//           </div>
//         </div> */}

//         <div className="hero-grid">
//           {/* Left Column - Content */}
//           <div className="content-column">
//             <div className="content-wrapper">
//               <h1 className="main-headline">
//                 <span className="headline-line">Building reliable</span>
//                 <span className="headline-gradient">IT solutions</span>
//                 <span className="headline-line">for your digital growth</span>
//               </h1>
              
//               <p className="subheadline">
//                 We deliver cutting-edge technology solutions that drive innovation 
//                 and transform businesses. Partner with us to unlock your digital potential 
//                 and achieve sustainable growth in the modern marketplace.
//               </p>

//               {/* Feature Highlights */}
//               {/* <div className="feature-highlights">
//                 <div className="feature">
//                   <div className="feature-icon">⚡</div>
//                   <div className="feature-content">
//                     <h4>Modern Solutions</h4>
//                     <p>Cutting-edge technology stack</p>
//                   </div>
//                 </div>
//                 <div className="feature">
//                   <div className="feature-icon">🚀</div>
//                   <div className="feature-content">
//                     <h4>Fast Delivery</h4>
//                     <p>Agile development process</p>
//                   </div>
//                 </div>
//                 <div className="feature">
//                   <div className="feature-icon">🎯</div>
//                   <div className="feature-content">
//                     <h4>Expert Team</h4>
//                     <p>Industry professionals</p>
//                   </div>
//                 </div>
//               </div> */}
//             <div className="feature-highlights">

//             <Link to="https://www.btclinx.com" className="feature solution-feature">
//                 <div className="">
//                 <img src={linx} alt="Linx" width="100" />
//                 </div>
//                 {/* <div className="feature-content">
//                 <h4>Linx Solutions</h4>
//                 <p>AI • Automation • Data Center</p>
//                 </div> */}
//             </Link>

//             <Link to="https://www.btcroutes.com" className="feature solution-feature">
//                 <div className="">
//                 <img src={routes} alt="Routes" width="100" />
//                 </div>
//                 {/* <div className="feature-content">
//                 <h4>Routes Platform</h4>
//                 <p>Courses • Internship • Placement</p>
//                 </div> */}
//             </Link>

//             <Link to="https://www.btc-zonet.com" className="feature solution-feature">
//                 <div className="">
//                 <img src={zonet} alt="ZoneT" width="100" />
//                 </div>
//                 {/* <div className="feature-content">
//                 <h4>ZoneT Hardware</h4>
//                 <p>BlindSole • Smart Automation • IoT</p>
//                 </div> */}
//             </Link>

//             </div>


//               {/* CTA Buttons */}
//               <div className="cta-group">
//                 <button 
//                   className="cta-btn primary-cta"
//                   onClick={() => {
//                     const section = document.getElementById("services");
//                     if (section) section.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   <span className="btn-text">Explore Services</span>
//                   <span className="btn-icon">
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                       <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </span>
//                 </button>
//                 <button 
//                   className="cta-btn secondary-cta"
//                   onClick={() => navigate('/consultation')}
//                 >
//                   <span className="btn-text">Get Consultation</span>
//                   <span className="btn-icon">
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                       <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
//                       <path d="M8 6L14 10L8 14V6Z" fill="currentColor"/>
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Code & Solutions */}
//           <div className="visual-column">
//             <div className="code-section">
//               {/* Enhanced Code Preview */}
//               <div className="code-preview-container">
//                 <div className="code-header">
//                   <div className="code-controls">
//                     <span className="control-dot close"></span>
//                     <span className="control-dot minimize"></span>
//                     <span className="control-dot maximize"></span>
//                   </div>
//                   <div className="code-title-wrapper">
//                     <span className="code-folder">src/</span>
//                     <span className="code-filename">solutions.js</span>
//                     <div className="code-status">
//                       <span className="status-dot"></span>
//                       <span className="status-text">Modified</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="code-body">
//                   <div className="code-lines">
//                     <div className="code-line">
//                       <span className="line-number">1</span>
//                       <span className="code-comment">// Our Divisions Portfolio</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">2</span>
//                       <span className="code-keyword">const</span>
//                       <span className="code-variable"> division</span>
//                       <span className="code-operator"> =</span>
//                       <span className="code-bracket"> {'{'} </span>
//                     </div>
                    
//                     {/* LINX */}
//                     <div className="code-line">
//                       <span className="line-number">3</span>
//                       <span className="code-space"></span>
//                       <span className="code-property">linx</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-bracket"> {'{'} </span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">4</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">aiTelecalling</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "intelligent"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">5</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">networkAuto</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "automated"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">6</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">dataCenter</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "optimized"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">7</span>
//                       <span className="code-space"></span>
//                       <span className="code-bracket"> {'}'},</span>
//                     </div>
                    
//                     {/* ROUTES */}
//                     <div className="code-line">
//                       <span className="line-number">8</span>
//                       <span className="code-space"></span>
//                       <span className="code-property">routes</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-bracket"> {'{'} </span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">9</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">courses</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "industry-ready"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">10</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">internship</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "hands-on"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">11</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">placement</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "guaranteed"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">12</span>
//                       <span className="code-space"></span>
//                       <span className="code-bracket"> {'}'},</span>
//                     </div>
                    
//                     {/* ZONET */}
//                     <div className="code-line">
//                       <span className="line-number">13</span>
//                       <span className="code-space"></span>
//                       <span className="code-property">zonet</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-bracket"> {'{'} </span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">14</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">blindSole</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "wearable-navigation"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">15</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">smartAutomation</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "home-office-automation"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">16</span>
//                       <span className="code-space"></span>
//                       <span className="code-space"></span>
//                       <span className="code-property">hardwareSolutions</span>
//                       <span className="code-operator">:</span>
//                       <span className="code-string"> "iot-devices-and-controllers"</span>
//                     </div>
//                     <div className="code-line">
//                       <span className="line-number">17</span>
//                       <span className="code-space"></span>
//                       <span className="code-bracket"> {'}'} </span>
//                     </div>
                    
//                     <div className="code-line">
//                       <span className="line-number">18</span>
//                       <span className="code-bracket"> {'}'}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="code-footer">
//                   <div className="language-tag">
//                     <span className="language-dot"></span>
//                     <span>JavaScript</span>
//                   </div>
//                   <div className="code-actions">
//                     <button className="code-action-btn">
//                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                         <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                       </svg>
//                       Expand
//                     </button>
//                     <button className="code-action-btn">
//                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                         <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
//                         <path d="M5 6L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                       </svg>
//                       Copy
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Solutions Grid */}
//               {/* <div className="solutions-grid">
//                 <Link to="https://www.btclinx.com" className="solution-card linx-card">
//                   <div className="solution-badge">
//                     <div className="badge-icon">
//                       <img src={linx} alt="Linx" />
//                     </div>
//                     <div className="badge-status active"></div>
//                   </div>
//                   <div className="solution-info">
//                     <h4>Linx Solutions</h4>
//                     <p>AI • Automation • Data Center</p>
//                     <div className="solution-tech">
//                       <span>AI/ML</span>
//                       <span>Cloud</span>
//                       <span>Automation</span>
//                     </div>
//                   </div>
//                 </Link>

//                 <Link to="https://www.btcroutes.com" className="solution-card routes-card">
//                   <div className="solution-badge">
//                     <div className="badge-icon">
//                       <img src={routes} alt="Routes" />
//                     </div>
//                     <div className="badge-status active"></div>
//                   </div>
//                   <div className="solution-info">
//                     <h4>Routes Platform</h4>
//                     <p>Courses • Internship • Placement</p>
//                     <div className="solution-tech">
//                       <span>Education</span>
//                       <span>Training</span>
//                       <span>Career</span>
//                     </div>
//                   </div>
//                 </Link>

//                 <Link to="https://www.btc-zonet.com" className="solution-card zonet-card">
//                   <div className="solution-badge">
//                     <div className="badge-icon">
//                       <img src={zonet} alt="ZoneT" />
//                     </div>
//                     <div className="badge-status scaling"></div>
//                   </div>
//                   <div className="solution-info">
//                     <h4>ZoneT Hardware</h4>
//                     <p>BlindSole • Smart Automation • IoT</p>
//                     <div className="solution-tech">
//                       <span>IoT</span>
//                       <span>Hardware</span>
//                       <span>Innovation</span>
//                     </div>
//                   </div>
//                 </Link>
//               </div> */}
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         {/* <div className="scroll-indicator">
//           <div className="scroll-label">Scroll to explore</div>
//           <div className="scroll-bar">
//             <div className="scroll-progress"></div>
//           </div>
//           <div className="scroll-hint">
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//               <path d="M10 4V16M10 16L6 12M10 16L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import '../styles/Heros.css';
import linx from '../assets/favicon.png';
import routes from '../assets/logo2.png';
import zonet from '../assets/zonet.png';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="background-effects">
        <div className="grid-pattern"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="floating-dots">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="floating-dot" style={{
              '--delay': `${i * 0.2}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }}></div>
          ))}
        </div>
      </div>

      <div className="hero-container mt-5">
        <div className="hero-grid">
          <div className="content-column">
            <div className="content-wrapper">
              <h1 className="main-headline">
                <span className="headline-line">Building reliable</span>
                <span className="headline-gradient">IT solutions</span>
                <span className="headline-line">for your digital growth</span>
              </h1>
              
              <p className="subheadline">
                We deliver cutting-edge technology solutions that drive innovation 
                and transform businesses. Partner with us to unlock your digital potential 
                and achieve sustainable growth in the modern marketplace.
              </p>

              <div className="feature-highlights">
                <Link to="https://www.btclinx.com" className="feature solution-feature">
                  <img src={linx} alt="Linx" width="100" />
                </Link>

                <Link to="https://www.btcroutes.com" className="feature solution-feature">
                  <img src={routes} alt="Routes" width="100" />
                </Link>

                <Link to="https://www.btc-zonet.com" className="feature solution-feature">
                  <img src={zonet} alt="ZoneT" width="100" />
                </Link>
              </div>

              <div className="cta-group">
                <button 
                  className="cta-btn primary-cta"
                  onClick={() => {
                    const section = document.getElementById("services");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="btn-text">Explore Services</span>
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <button 
                  className="cta-btn secondary-cta"
                  onClick={() => navigate('/consultation')}
                >
                  <span className="btn-text">Get Consultation</span>
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 6L14 10L8 14V6Z" fill="currentColor"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="visual-column">
            <div className="code-section">
              <div className="code-preview-container">
                <div className="code-header">
                  <div className="code-controls">
                    <span className="control-dot close"></span>
                    <span className="control-dot minimize"></span>
                    <span className="control-dot maximize"></span>
                  </div>
                  <div className="code-title-wrapper">
                    <span className="code-folder">src/</span>
                    <span className="code-filename">solutions.js</span>
                    <div className="code-status">
                      <span className="status-dot"></span>
                      <span className="status-text">Modified</span>
                    </div>
                  </div>
                </div>
                
                <div className="code-body">
                  <div className="code-lines">
                    <div className="code-line">
                      <span className="line-number">1</span>
                      <span className="code-comment">Our Divisions Portfolio</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">2</span>
                      <span className="code-keyword">const &nbsp;</span>
                      <span className="code-variable"> division</span>
                      <span className="code-operator"> =</span>
                      <span className="code-bracket"> {'{'} </span>
                    </div>
                    
                    <div className="code-line">
                      <span className="line-number">3</span>
                      <span className="code-space"></span>
                      <span className="code-property">linx</span>
                      <span className="code-operator">:</span>
                      <span className="code-bracket"> {'{'} </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">4</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">aiTelecalling</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "intelligent"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">5</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">networkAuto</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "automated"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">6</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">dataCenter</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "optimized"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">7</span>
                      <span className="code-space"></span>
                      <span className="code-bracket"> {'}'},</span>
                    </div>
                    
                    <div className="code-line">
                      <span className="line-number">8</span>
                      <span className="code-space"></span>
                      <span className="code-property">routes</span>
                      <span className="code-operator">:</span>
                      <span className="code-bracket"> {'{'} </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">9</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">courses</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "industry-ready"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">10</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">internship</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "hands-on"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">11</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">placement</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "guaranteed"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">12</span>
                      <span className="code-space"></span>
                      <span className="code-bracket"> {'}'},</span>
                    </div>
                    
                    <div className="code-line">
                      <span className="line-number">13</span>
                      <span className="code-space"></span>
                      <span className="code-property">zonet</span>
                      <span className="code-operator">:</span>
                      <span className="code-bracket"> {'{'} </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">14</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">blindSole</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "wearable-navigation"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">15</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">smartAutomation</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "home-office-automation"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">16</span>
                      <span className="code-space"></span>
                      <span className="code-space"></span>
                      <span className="code-property">hardwareSolutions</span>
                      <span className="code-operator">:</span>
                      <span className="code-string"> "iot-devices-and-controllers"</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">17</span>
                      <span className="code-space"></span>
                      <span className="code-bracket"> {'}'} </span>
                    </div>
                    
                    <div className="code-line">
                      <span className="line-number">18</span>
                      <span className="code-bracket"> {'}'}</span>
                    </div>
                  </div>
                </div>
                
                {/* <div className="code-footer">
                  <div className="language-tag">
                    <span className="language-dot"></span>
                    <span>JavaScript</span>
                  </div>
                  <div className="code-actions">
                    <button className="code-action-btn">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Expand
                    </button>
                    <button className="code-action-btn">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
                        <path d="M5 6L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Copy
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;