import React from "react";
import "./about.css";
import ME from "../../assets/pic1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Imag" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Highly skilled MERN stack developer with a passion for crafting
            efficient and innovative web and mobile applications. Proficient in
            utilizing MongoDB, Express.js, React,React Native, and Node.js to
            deliver seamless user experiences. Adept at collaborating with
            cross-functional teams to create robust and scalable solutions.
            Eager to contribute my expertise in front-end and back-end
            development to drive success in dynamic and challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
