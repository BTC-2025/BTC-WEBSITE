import React from "react";
import '../styles/Technologies.css';

import react from '../assets/react.png'
import node from '../assets/node.png'
import next from '../assets/next.png'
import mongo from '../assets/mongo.webp'
import flutter from '../assets/flutter.png'
import dart from '../assets/dart.png'
import android from '../assets/android.png'
import postgres from '../assets/postgre.png'
import python from '../assets/python.png'
import csharp from '../assets/csharp.png'
import fastapi from '../assets/FastAPI.png'
import docker from '../assets/Docker.png'
import anaconda from '../assets/Anaconda.png'
import jupyter from '../assets/Jupyter.png'
import tensorflow from '../assets/TensorFlow.png'
import scikitlearn from '../assets/scikit-learn.png'

const technologies = [
  { img: react, name: "React" },
  { img: node, name: "Node.js" },
  { img: next, name: "Next.js" },
  { img: mongo, name: "MongoDB" },
  { img: flutter, name: "Flutter" },
  { img: csharp, name: "C#" },
  { img: dart, name: "Dart" },
  { img: android, name: "Android" },
  { img: postgres, name: "PostgreSQL" },
  { img: python, name: "Python" },
  { img: fastapi, name: "FastAPI" },
  { img: docker, name: "Docker" },
  { img: anaconda, name: "Anaconda" },
  { img: jupyter, name: "Jupyter Notebook" },
  { img: tensorflow, name: "TensorFlow" },
  { img: scikitlearn, name: "Scikit-Learn" }
];


const Technologies = () => {
  return (
    <section className="technologies-section">
      <div className="container text-white py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="gradient-text display-4 fw-bold">Technologies</h2>
            <h3 className="fw-light">We use</h3>
          </div>
          <div className="col-md-6">
            <p>
              We leverage the latest cutting-edge technologies in both development and
              design to stay on par with technological advancements.
            </p>
          </div>
        </div>

        {/* Floating Circles */}
        <div className="tech-circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        {/* Infinite Scroll Slider */}
<div className="tech-slider">
  <div className="tech-track">
    {[...technologies, ...technologies, ...technologies].map((t, index) => (
      <div className="tech-item" key={index}>
        <span className="tech-label">{t.name}</span>
        <img src={t.img} alt={t.name} />
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default Technologies;
