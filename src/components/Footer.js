// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import logo from '../assets/logo.jpg'
// import { Link } from "react-router-dom";
// import '../styles/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="btc-footer" style={{zIndex:100}}>
//       <div className="container py-5">
//         <div className="row">
//           {/* Company Info */}
//           <div className="col-md-3 mb-4 bg-light text-dark" style={{borderRadius:'10px'}}>
//             <img src={logo} alt="BTC Logo" className="footer-logo d-block mx-auto" width={"200px"}/>
//             <h6>
//               BURJ Tech Consultancy (OPC) Pvt Ltd<br />
//               No. 469/ Pavalamalli St, Extn.<br />
//               Narashimhapuram,<br />
//               Kakkalur, Thiruvallur - 602003<br />
//               Tamil Nadu, India
//             </h6>
//             {/* <div className="footer-reviews">
//               <span>Reviewed on </span>
//               <span className="stars">★★★★☆</span>
//               <span> 3 Reviews</span>
//             </div> */}
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-2 mb-4 mt-1">
//             <h5>Overview</h5>
//             <ul className="footer-links" style={{textDecoration:'none'}}>
//               <li>
//                 <Link to="/terms-and-conditions" >Terms & Conditions</Link>
//               </li>
//               <li>Privacy Policy</li>
//               <li><Link to='/contact'>Contact Us</Link></li>
//               <li><Link to='careers'>Careers</Link></li>
//               <li>Blog</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="col-md-3 mb-4 mt-1">
//             <h5>For Business</h5>
//             <p><FaPhoneAlt /> +91-9444369625</p>
//             <p><FaEnvelope /> burjtechconsultancy@gmail.com</p>

//             <h5 className="mt-4">For Careers</h5>
//             <p><FaPhoneAlt /> +91-9444369625</p>
//             <p><FaEnvelope /> support@btcglobal.info</p>
//           </div>

//           {/* Newsletter */}
//           <div className="col-md-4 mb-4 mt-1">
//             <h6>Let's stay in touch!</h6>
//             <p>Join our newsletter and get insights that will change your product design perspective</p>
//             <input type="email" placeholder="Enter Email" className="newsletter-input mb-2" />
//             <button className="subscribe-btn">Subscribe</button>
//           </div>
//         </div>

//         {/* Social Media */}
//         <div className="footer-bottom mt-4 d-flex justify-content-between align-items-center flex-wrap">
//           <div className="copyright">
//             &copy; 2025 - BTC Pvt Ltd
//           </div>
//           <div className="social-icons">
//             <a href="https://www.instagram.com/burj_tech_consultancy/">
//               <FaInstagram />
//             </a>
//             <a href="https://wa.me/message/64YKOIDQIVZOF1">
//               <FaWhatsapp />
//             </a>
//             <a href="https://x.com/burj_tech7571">
//               <FaTwitter />
//             </a>
//             <a href="https://www.linkedin.com/company/burj-tech-consultancy">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="btc-footer-4col">
      <div className="btc-footer-container">
        {/* Four Column Layout */}
        <div className="btc-footer-columns">
          
          {/* Column 1: Logo & Company Info */}
          <div className="btc-col btc-col-logo">
            <div className="btc-logo-box">
              <img src={logo} alt="BTC Logo" className="btc-footer-logo" />
              {/* <div className="btc-company-tag">OPC Pvt. Ltd.</div> */}
            </div>
            <div className="btc-company-info">
              <div className="btc-info-line">
                <FaMapMarkerAlt className="btc-info-icon" />
                <span>Thiruvallur, Tamil Nadu</span>
              </div>
              <div className="btc-info-line">
                <FaPhone className="btc-info-icon" />
                <span>+91-9444369625</span>
              </div>
              <div className="btc-info-line">
                <FaEnvelope className="btc-info-icon" />
                <span>burjtechconsultancy@gmail.com</span>
              </div>
            </div>
            {/* <div className="btc-cert-badges">
              <span className="btc-cert">ISO Certified</span>
              <span className="btc-cert">MSME Registered</span>
            </div> */}
          </div>

          {/* Column 2: Company Links */}
          <div className="btc-col btc-col-company">
            <h4 className="btc-col-title">Company</h4>
            <ul className="btc-link-list">
              <li>
                <Link to="/about" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/terms-and-conditions" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Terms & Conditions
                </Link>
              </li>
              {/* <li>
                <a href="#privacy" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="btc-col btc-col-services">
            <h4 className="btc-col-title">Our Services</h4>
            <ul className="btc-link-list">
              <li>
                <Link to="/services/web-development" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services/ai/ml-services" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/game-development" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Game Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-services" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Cloud Services
                </Link>
              </li>
              {/* <li>
                <a href="#automation" className="btc-link">
                  <FaArrowRight className="btc-link-arrow" />
                  Automation
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 4: Follow & Subscribe */}
          <div className="btc-col btc-col-follow">
            <h4 className="btc-col-title">Stay Connected</h4>
            
            {/* Follow Us */}
            <div className="btc-follow-section">
              <h5 className="btc-subtitle">Follow Us</h5>
              <div className="btc-social-icons">
                <a href="https://www.instagram.com/burj_tech_consultancy/" className="btc-social">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/message/64YKOIDQIVZOF1" className="btc-social">
                  <FaWhatsapp />
                </a>
                <a href="https://x.com/burj_tech7571" className="btc-social">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/burj-tech-consultancy" className="btc-social">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Email Subscribe */}
            <div className="btc-subscribe-section">
              <h5 className="btc-subtitle">Email Updates</h5>
              <p className="btc-subscribe-text">Get latest tech insights</p>
              <div className="btc-subscribe-form">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="btc-email-input"
                />
                <button className="btc-subscribe-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="btc-footer-bottom">
          <div className="btc-copyright">
            © {new Date().getFullYear()}&nbsp;BURJ Tech Consultancy (OPC) Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;