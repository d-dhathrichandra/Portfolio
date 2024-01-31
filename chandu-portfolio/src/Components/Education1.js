// src/components/Education/Education.js
import React from 'react';
import '../styles/Education.scss';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Indian Institute of Technology, Varanasi</h3>
          <p>Degree in Electronics Engineering</p>
          <p>Graduation Year: 2025</p>
        </div>
        <div className="education-item">
          <h3>Higher Secondary School Certificate</h3>
          <p>Intermediate - Maths, Physics, Chemistry</p>
          <p>Graduation Year: 2021</p>
        </div>
        <div className="education-item">
          <h3>Secondary School Certificate</h3>
          <p>SSC - 10th</p>
          <p>Graduation Year: 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
