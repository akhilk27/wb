import React from 'react';
import './About.css';
import profilePicture from '../images/me2.jpg'; // Adjust the path to your image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={profilePicture} className="img-fluid pic" alt="Akhil" />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="about-title">Akhilesh Reddy Katapally</h2>
            <p className="about-text">
                Hi! I am Akhilesh! I am an experienced Data Scientist, Engineer, and Analyst with a strong background in predictive analytics, machine learning, data engineering, and procurement optimization. Proven track record in developing advanced models, ETL processes, and interactive dashboards to drive strategic business decisions. Skilled in Python, SQL, AWS, Snowflake, Tableau, and various machine learning frameworks, with a focus on enhancing supplier selection, cost optimization, and operational efficiency through data-driven insights.            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

