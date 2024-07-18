import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";



import userHub from "../../Assets/Projects/UserHub.png";
import myStack from "../../Assets/Projects/MyStack_OverFlow.png"
import RememberRun from "../../Assets/Projects/rememberRun.png"
import DiceRoll from "../../Assets/Projects/DiceRoll.png"
import Drums from "../../Assets/Projects/Drums.png"
import Reveal from "../Reveal";


function Projects() {
  return (
    <Container fluid className="project-section">

      <Particle/>

      <Reveal> <Container> 
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
<p>
 Comming soon 
</p>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myStack}
              isBlog={false}
              title="My Stack OverFlow"
              description="My Stack Overflow is a web-based platform designed to replicate the functionality of Stack Overflow, a popular question and answer community for programmers and tech enthusiasts. I created a clone version of it for learning purpose and added more features like User’s Location using Google Maps API and storing Users Technology details which is useful learning."
              ghLink="https://github.com/Jikkesh/stackOverFlowClone-server"
              demoLink="https://stackoverflow-jikkesh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userHub}
              isBlog={false}
              title="Film Insider Blog"
              description="Developed a full-stack web application, FilmInsider Blog, using Angular for the frontend and Node.js
              with MongoDB for the backend. This project showcases CRUD operations for blog posts and comments,
              along with user management functionalities. Users can create, read, update, and delete blog posts and
              comments, and role-based access control is implemented to manage user permissions effectively."
              ghLink="https://github.com/Jikkesh/UserHub-Angular"
              demoLink="https://filminsider-blog.netlify.app/"
            />
          </Col> */}


        <h1 className="project-heading">
          Some <strong className="purple">Mini Games </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects worked for fun only
        </p>


          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiceRoll}
              isBlog={false}
              title="Roll Dice"
              description="A Dice Roll which will be completely Random while choosing one number."
              ghLink="https://github.com/RushirajRavalji"
              demoLink="https://rushirajravalji.github.io/Dice_game/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drums}
              isBlog={false}
              title="Drums Kit"
              description="Just playaround with each click makes a drum sound."
              ghLink="https://github.com/RushirajRavalji"
              demoLink="https://rushirajravalji.github.io/Drum-kit/"    
            />
          </Col>

        </Row>
      </Container>
      </Reveal>
    </Container>
  );
}

export default Projects;
