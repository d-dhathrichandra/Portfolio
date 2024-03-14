
import React from 'react';
import '../styles/Education.scss';


const Projects = () => {
    return (
      <section id="education" className="education">
        <div className="education-content">
          <h2>Education</h2>
          <div className="education-item">
            <img src="https://iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png" alt="Education 1" />
            <div className="item-details">
              <h3>Undergraduate Degree</h3>
              <p>College Name : Indian Institute of Technology, Varanasi</p>
              <p>Degree in Electronics Engineering</p>
              <p>CGPA : 7.5</p>
              <p>Graduation Year: 2025</p>
            </div>
          </div>
          <div className="education-item">
            <img src="https://projectabstracts.com/wp-content/uploads/2018/08/pg-20827-student-database-management.jpg" alt="Project 2" />
            <div className="item-details">
              <h3>Higher Secondary School</h3>
              <p>College Name : Tirumala Junior College, Bhimavaram</p>
              <p>Intermediate - Maths, Physics, Chemistry</p>
              <p>Percentage : 96.8</p>
              <p>Graduation Year: 2021</p>
            </div>
          </div>
          <div className="education-item">
            <img src="https://projectabstracts.com/wp-content/uploads/2018/08/pg-20827-student-database-management.jpg" alt="Project 2" />
            <div className="item-details">
              <h3>Secondary School</h3>
              <p>College Name : Sri Kakatiya Merit School, Bhimavaram</p>
              <p>SSC - 10th</p>
              <p>CGPA : 9.8</p>
              <p>Graduation Year: 2019</p>
            </div>
          </div>
          {/* Add more projects items as needed */}
        </div>
      </section>
    );
  };
  
  export default Education;