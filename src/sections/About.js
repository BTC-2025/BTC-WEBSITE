// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "../styles/About.css"; // Import custom styles

// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <Container data-aos="fade-up">
//         <Row className="align-items-center">
//           {/* Image Section */}
//           <Col md={6} className="text-center">
//             <img
//               src="https://drrrhyhe9lfip.cloudfront.net/ScriptMedia/54/about_us_thumb01png-514.png"
//               alt="About Us"
//               className="about-img"
//             />
//           </Col>

//           {/* Content Section */}
//           <Col md={6}>
//             <div className="about-content">
//               <h2>About <span>Us</span></h2>
//               <p>
//                 At <strong>Burj Tech Consultancy Pvt Ltd</strong>, we specialize in
//                 delivering innovative technology solutions that help businesses
//                 grow, transform, and stay ahead of the competition.
//               </p>
//               <p>
//                 With a passionate team and a client-first approach, we ensure
//                 that every solution we deliver aligns with your vision and
//                 business needs.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default About;




import React, { useEffect, useRef } from "react";
import "../styles/About.css";

/* Gradient Icon (re-usable) */
const GradientIcon = ({ type = "spark", className = "" }) => {
  // A few simple inline gradient SVG icons (customize / replace later)
  if (type === "spark") {
    return (
      <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#6DD3FF" />
            <stop offset="1" stopColor="#7C6BFF" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6v6" />
          <path d="M24 36v6" />
          <path d="M6 24h6" />
          <path d="M36 24h6" />
          <path d="M12 12l4 4" />
          <path d="M32 32l4 4" />
          <path d="M12 36l4-4" />
          <path d="M32 16l4-4" />
          <circle cx="24" cy="24" r="4" fill="url(#g1)" />
        </g>
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#8EE6C0" />
            <stop offset="1" stopColor="#4FB6FF" />
          </linearGradient>
        </defs>
        <path d="M24 6 L8 12 v8 c0 10 8 18 16 18 s16-8 16-18 v-8z" fill="url(#g2)" stroke="#e8f7fb" strokeWidth="1.5"/>
        <path d="M20 24l3 3 7-7" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // default: circle
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="g3" x1="0" x2="1">
          <stop offset="0" stopColor="#FFD6A5" />
          <stop offset="1" stopColor="#FF9AA2" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="url(#g3)" />
    </svg>
  );
};

const About = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const nodes = itemsRef.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("a-show");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const approachItems = [
    "Research-Driven Planning",
    "UI-First Prototyping",
    "Iterative Development",
    "Performance & Security Focus"
  ];

  const trustItems = [
    "Skilled & Experienced Team",
    "Transparent Communication",
    "Quality-First Delivery",
    "Modern Tech Stack & Best Practices"
  ];

  const values = ["Innovation", "Simplicity", "Integrity", "Quality", "Curiosity"];

  // const roadmap = [
  //   "Launch AI-powered services (Q1-Q2)",
  //   "Grow Cloud & Automation division",
  //   "Start building ERP & SaaS product",
  //   "Hire senior engineers & domain experts",
  //   "Form partnerships with global firms"
  // ];

  return (
    <section className="abt-wrap" aria-labelledby="about-heading">
      {/* decorative floating blobs */}
      <div className="decor decor-1" aria-hidden="true"></div>
      <div className="decor decor-2" aria-hidden="true"></div>

      <div className="abt-inner">
        {/* Title + short */}
        <header className="abt-header" ref={(el) => (itemsRef.current[0] = el)}>
          <div className="eyebrow">About</div>
          <h2 id="about-heading" className="abt-title">Who we are — BURJ Tech Consultancy</h2>
          <p className="abt-lead">
            We build simple, powerful, and future-ready digital systems — from product design to cloud-native deployments.
            Our focus is on clarity, performance and measurable business outcomes.
          </p>
        </header>

        {/* Vision + Mission + Story cluster (freestyle cluster cards) */}
        <div className="cluster" ref={(el) => (itemsRef.current[1] = el)}>
          <article className="cluster-card c-vision">
            <div className="icon-wrap"><GradientIcon type="spark" className="g-icon" /></div>
            <h3>Vision</h3>
            <p>To enable businesses to scale with confidence using dependable, human-centered technology.</p>
          </article>

          <article className="cluster-card c-mission">
            <div className="icon-wrap"><GradientIcon type="shield" className="g-icon" /></div>
            <h3>Mission</h3>
            <p>Deliver clean, secure, and scalable software while keeping communication transparent and timelines realistic.</p>
          </article>

          <article className="cluster-card c-story">
            <div className="icon-wrap"><GradientIcon type="dot" className="g-icon" /></div>
            <h3>Our Story</h3>
            <p>We launched BurjTech to make top-tier engineering approachable for businesses seeking practical digital transformation.</p>
          </article>
        </div>

        {/* Two horizontal groups: Approach + Why Trust Us */}
        <div className="h-group">
          <div className="panel" ref={(el) => (itemsRef.current[2] = el)}>
            <div className="panel-head">
              <h4>Our Approach</h4>
              <p className="muted">A pragmatic process to deliver results fast and reliably.</p>
            </div>
            <div className="panel-grid">
              {approachItems.map((t, i) => (
                <div
                  key={t}
                  className="mini-card"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mini-left"><GradientIcon type={i % 2 ? "shield" : "spark"} className="mini-icon" /></div>
                  <div className="mini-body">
                    <strong>{t}</strong>
                    <span className="mini-sub">Practical approach focused on impact</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" ref={(el) => (itemsRef.current[3] = el)}>
            <div className="panel-head">
              <h4>Why clients trust us</h4>
              <p className="muted">We deliver like partners, not vendors.</p>
            </div>
            <div className="panel-grid">
              {trustItems.map((t, i) => (
                <div
                  key={t}
                  className="mini-card"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mini-left"><GradientIcon type={i % 2 ? "dot" : "spark"} className="mini-icon" /></div>
                  <div className="mini-body">
                    <strong>{t}</strong>
                    <span className="mini-sub">A short assurance line</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values + Promise + Roadmap */}
        <div className="bottom-row">
          <div className="values-card" ref={(el) => (itemsRef.current[4] = el)}>
            <h4>Core Values</h4>
            <div className="values">
              {values.map((v, i) => (
                <div
                  key={v}
                  className="value-pill"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="value-text">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="promise-road">
            <div className="promise" ref={(el) => (itemsRef.current[5] = el)}>
              <h4>Our Promise</h4>
              <p>
                We may be new, but we are committed to reliable delivery, transparent collaboration and solutions that create real business value.
              </p>
            </div>

            {/* <div className="roadmap" ref={(el) => (itemsRef.current[6] = el)}>
              <h4>Roadmap</h4>
              <ol className="road-list">
                {roadmap.map((r, i) => (
                  <li key={r} style={{ transitionDelay: `${i * 70}ms` }}>
                    <span className="road-step">{r}</span>
                  </li>
                ))}
              </ol>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
