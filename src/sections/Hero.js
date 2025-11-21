// import React from 'react';
// import '../styles/Hero.css';
// import linx from '../assets/favicon.png'
// import routes from '../assets/logo2.png'

// const Hero = () => {
//   return (
//     <section className="hero">
//       {/* Clean Background Elements */}
//       <div className="clean-background">
//         <div className="floating-shapes">
//           <div className="shape shape-1"></div>
//           <div className="shape shape-2"></div>
//           <div className="shape shape-3"></div>
//         </div>
//         <div className="gradient-sphere sphere-1"></div>
//         <div className="gradient-sphere sphere-2"></div>
//       </div>

//       <div className="hero-container">
//         {/* Main Content with Clean Layout */}
//         <div className="hero-content-wrapper">
//           {/* Left Side - Main Content */}
//           <div className="hero-main-section">
//             <div className="content-block">
//               <div className="pre-title-glow">
//                 <span className="pre-title">Digital Innovation Studio</span>
//                 <div className="glow-line"></div>
//               </div>
              
//               <h1 className="hero-titles">
//                 <span className="title-line">Building reliable</span>
//                 <span className="title-line highlight-text">IT solutions</span>
//                 <span className="title-line">for your digital growth</span>
//               </h1>
              
//               <p className="hero-description">
//                 We deliver cutting-edge technology solutions that drive innovation 
//                 and transform businesses. Partner with us to unlock your digital potential 
//                 and achieve sustainable growth in the modern marketplace.
//               </p>

//               {/* Clean Stats Bar - Focus on what we offer */}
//               <div className="features-bar">
//                 <div className="feature-item">
//                   <div className="feature-icon"></div>
//                   <div className="feature-text">Modern Solutions</div>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon"></div>
//                   <div className="feature-text">Innovative Approach</div>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon"></div>
//                   <div className="feature-text">Fast Delivery</div>
//                 </div>
//               </div>

//               <div className="hero-actions">
//                 <button className="btn-primary">
//                   <span className="btn-content">
//                     <span className="btn-text">Explore Services</span>
//                     <span className="btn-arrow">→</span>
//                   </span>
//                 </button>
//                 <button className="btn-secondary">
//                   <span className="btn-content">
//                     <span className="btn-text">Get Consultation</span>
//                     <span className="btn-play">▶</span>
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Visual Elements */}
//           <div className="hero-visual-section">
//             {/* Clean Code Preview */}
//             <div className="code-preview">
//               <div className="code-header">
//                 <div className="code-dots">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//                 <div className="code-title">innovation.js</div>
//               </div>
//               <div className="code-content">
//                 <div className="code-line">
//                   <span className="code-keyword">const</span>
//                   <span className="code-variable"> digitalGrowth</span>
//                   <span className="code-operator"> =</span>
//                   <span className="code-bracket"> ()</span>
//                   <span className="code-operator"> ={'>'}</span>
//                   <span className="code-bracket"> {'{'} </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="code-space"></span>
//                   <span className="code-return">return</span>
//                   <span className="code-bracket"> {'{'} </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="code-space"></span>
//                   <span className="code-space"></span>
//                   <span className="code-property">webSolutions</span>
//                   <span className="code-operator">:</span>
//                   <span className="code-string"> "responsive"</span>
//                 </div>
//                 <div className="code-line">
//                   <span className="code-space"></span>
//                   <span className="code-space"></span>
//                   <span className="code-property">mobileApps</span>
//                   <span className="code-operator">:</span>
//                   <span className="code-string"> "intuitive"</span>
//                 </div>
//                 <div className="code-line">
//                   <span className="code-space"></span>
//                   <span className="code-bracket"> {'}'} </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="code-bracket"> {'}'} </span>
//                 </div>
//               </div>
//             </div>

//             {/* Clean Service Cards */}
//             <div className="services-showcase">
//               <div className="service-card">
//                 <div className="service-icon">
//                   <img src={linx} width={100} alt='linx' />
//                 </div>
//                 <div className="service-content">
//                   <h4>AI & Automation</h4>
//                   <p>Smart solutions for your business</p>
//                 </div>
//               </div>

//               <div className="service-card">
//                 <div className="service-icon">
//                   <img src={routes} width={100} alt='routes' />
//                 </div>
//                 <div className="service-content">
//                   <h4>Web Development</h4>
//                   <p>Modern, responsive websites</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section - Scroll Indicator */}
//         <div className="hero-bottom-section">
//           {/* Enhanced Scroll Indicator */}
//           <div className="clean-scroll-indicator">
//             <div className="scroll-text">Discover Our Approach</div>
//             <div className="scroll-progress">
//               <div className="scroll-track">
//                 <div className="scroll-thumb"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import '../styles/Hero.css';
import linx from '../assets/favicon.png';
import routes from '../assets/logo2.png';
import { Link,useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate()
  return (
    <section className="hero">
      {/* Clean Background Elements */}
      <div className="clean-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
      </div>

      <div className="hero-container">
        {/* Main Content with Clean Layout */}
        <div className="hero-content-wrapper">
          {/* Left Side - Main Content */}
          <div className="hero-main-section">
            <div className="content-block">
              <div className="pre-title-glow">
                <span className="pre-title">Digital Innovation Studio</span>
                <div className="glow-line"></div>
              </div>
              
              <h1 className="hero-titles">
                <span className="title-line">Building reliable</span>
                <span className="title-line highlight-text">IT solutions</span>
                <span className="title-line">for your digital growth</span>
              </h1>
              
              <p className="hero-description">
                We deliver cutting-edge technology solutions that drive innovation 
                and transform businesses. Partner with us to unlock your digital potential 
                and achieve sustainable growth in the modern marketplace.
              </p>

              {/* Clean Stats Bar - Focus on what we offer */}
              <div className="features-bar">
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <div className="feature-text">Modern Solutions</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <div className="feature-text">Innovative Approach</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <div className="feature-text">Fast Delivery</div>
                </div>
              </div>

              <div className="hero-actions">
                <button className="btn-primary"  onClick={() => {
                  const section = document.getElementById("services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                  <span className="btn-content">
                    <span className="btn-text">Explore Services</span>
                    <span className="btn-arrow">→</span>
                  </span>
                </button>
                <button className="btn-secondary" onClick={() => navigate('/consultation')}>
                  <span className="btn-content">
                    <span className="btn-text">Get Consultation</span>
                    <span className="btn-play">▶</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Clean Professional Coding Section */}
          <div className="hero-visual-section">
            {/* Enhanced Code Preview */}
            <div className="code-preview professional">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-title">solutions.js</div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-comment">Our Services Portfolio</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> services</span>
                  <span className="code-operator"> =</span>
                  <span className="code-bracket"> {'{'} </span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-property">linx</span>
                  <span className="code-operator">:</span>
                  <span className="code-bracket"> {'{'} </span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-space"></span>
                  <span className="code-property">aiTelecalling</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> "intelligent"</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-space"></span>
                  <span className="code-property">networkAuto</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> "automated"</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-space"></span>
                  <span className="code-property">dataCenter</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> "optimized"</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-bracket"> {'}'},</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-property">routes</span>
                  <span className="code-operator">:</span>
                  <span className="code-bracket"> {'{'} </span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-space"></span>
                  <span className="code-property">courses</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> "industry-ready"</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-space"></span>
                  <span className="code-property">internship</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> "hands-on"</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-space"></span>
                  <span className="code-property">placement</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> "guaranteed"</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span>
                  <span className="code-bracket"> {'}'}</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket"> {'}'}</span>
                </div>
              </div>
            </div>

            {/* Compact Service Badges */}
            <div className="service-badges">
              <Link to="https://www.btclinx.com">
                <div className="service-badge linx-badge">
                  <div className="badge-icon">
                    <img src={linx} alt="Linx" />
                  </div>
                  <div className="badge-content">
                    <h4>Linx Solutions</h4>
                    <p>AI • Automation • Data Center</p>
                  </div>
                </div>
              </Link>
              
              <Link to="https://www.btcroutes.com">
                <div className="service-badge routes-badge">
                  <div className="badge-icon">
                    <img src={routes} alt="Routes" />
                  </div>
                  <div className="badge-content">
                    <h4>Routes Platform</h4>
                    <p>Courses • Internship • Placement</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Scroll Indicator */}
        <div className="hero-bottom-section">
          <div className="clean-scroll-indicator">
            <div className="scroll-text">Discover Our Approach</div>
            <div className="scroll-progress">
              <div className="scroll-track">
                <div className="scroll-thumb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;