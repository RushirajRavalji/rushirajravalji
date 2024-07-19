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
