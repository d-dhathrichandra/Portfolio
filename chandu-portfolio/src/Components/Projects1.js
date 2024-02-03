import React from 'react';
import '../styles/Projects.scss';


const Projects = () => {
    return (
      <section id="projects" className="projects">
        <div className="projects-content">
          <h2>Projects</h2>
          <div className="projects-item">
            <img src="https://www.mdpi.com/energies/energies-12-02692/article_deploy/html/images/energies-12-02692-g005.png" alt="Project 1" />
            <div className="item-details">
              <h3>Automatic Street Lights using 555 timer</h3>
              <p> Designed and implemented an innovative embedded systems project focused on energy-saving techniques for street lights.</p>
              <p>Utilized Light Dependent Resistors (LDR) as sensors to detect darkness, triggering an automatic switch-on mechanism for the lights. Additionally, incorporated a circuit based on a 555 Timer to turn off the street lights when ambient daylight is detected from an alternate light source.</p>
              <a href="https://www.linkedin.com/in/dnrk-charan/details/projects/">View Project</a>
            </div>
          </div>
          <div className="projects-item">
            <img src="https://cdn.techjockey.com/blog/wp-content/uploads/2021/09/Student-Information-Management-System-_Banner.jpg" alt="Project 2" />
            <div className="item-details">
              <h3>Student-Faculty Database Management</h3>
              <p>Created Database containing student and faculty information using MySQL and Python. Developed an algorithm to map the interest of students with the corresponding faculty specialization.</p>
                <p>The project allowed students to find a suitable project supervisor.</p>
              <a href="https://www.linkedin.com/in/dnrk-charan/details/projects/">View Project</a>
            </div>
          </div>
          {/* Add more projects items as needed */}
        </div>
      </section>
    );
  };
  
  export default Projects;