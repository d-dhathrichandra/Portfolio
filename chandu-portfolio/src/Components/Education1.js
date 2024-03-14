// src/components/Education/Education.js
import React from 'react';
import '../styles/Education.scss';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-content">
        <h2>Education</h2>
        <img src="https://iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png" alt="Project 1" />
        <div className="education-item">
          <h3>Undergraduate Degree</h3>
          <p>College Name : Indian Institute of Technology, Varanasi</p>
          <p>Degree in Electronics Engineering</p>
          <p>CGPA : 7.5</p>
          <p>Graduation Year: 2025</p>

        </div>
        <div className="education-item">
          <h3>Higher Secondary School</h3>
          <p>College Name : Tirumala Junior College, Bhimavaram</p>
          <p>Intermediate - Maths, Physics, Chemistry</p>
          <p>Percentage : 96.8</p>
          <p>Graduation Year: 2021</p>
        </div>
        <div className="education-item">
          <h3>Secondary School</h3>
          <p>College Name : Sri Kakatiya Merit School, Bhimavaram</p>
          <p>SSC - 10th</p>
          <p>CGPA : 9.8</p>
          <p>Graduation Year: 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
