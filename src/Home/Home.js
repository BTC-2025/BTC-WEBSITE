import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from "../sections/Heros"
import About from '../sections/About'
import Services from '../sections/Services'
import OurProcess from '../sections/OurProcess'
import Industries from '../sections/Industries'
import Technologies from '../sections/Technologies'
// import Contact from '../sections/Contact'
import GetInTouch from '../sections/GetInTouch'
import FAQ from '../sections/FAQ'
import WhyUsPage from '../sections/WhyUsPage'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Burj Tech Consultancy | IT Services, Software Solutions & Digital Transformation</title>

        <meta 
          name="description" 
          content="Burj Tech Consultancy offers expert IT services, software development, web & app development, UI/UX design, cloud solutions, and digital transformation services. Trusted technology partner for businesses in Tiruvallur and beyond." 
        />

        <meta 
          name="keywords" 
          content="software companies in tiruvallur, it companies in tiruvallur, software solutions in tiruvallur, it services in tiruvallur, Burj Tech Consultancy, burjtechconsultancy, btc, burj, software company, IT services, software development, web development, app development, digital transformation" 
        />

        <link 
          rel="canonical" 
          href="https://www.burjtechconsultancy.com/" 
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Burj Tech Consultancy | IT Services & Software Solutions" />
        <meta 
          property="og:description" 
          content="Professional IT services, software solutions, and digital transformation by Burj Tech Consultancy." 
        />
        <meta property="og:url" content="https://www.burjtechconsultancy.com/" />
        <meta property="og:image" content="https://www.burjtechconsultancy.com/preview.jpg" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Burj Tech Consultancy | IT Services & Software Solutions" />
        <meta 
          name="twitter:description" 
          content="Your trusted software and IT services partner delivering modern digital solutions." 
        />
        <meta name="twitter:image" content="https://www.burjtechconsultancy.com/preview.jpg" />
      </Helmet>

      <div>
        <Hero />
        <About />
        <Services />
        {/* <ServicesCarousel /> */}
        <OurProcess />
        <WhyUsPage />
        <Industries />
        <Technologies />
        <FAQ />
        <GetInTouch />
      </div>
    </>
  )
}

export default Home