import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiDotnet,
  DiReact,
  DiAngularSimple,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiMicrosoftsqlserver,
  SiPostgresql,
} from "react-icons/si";
import Reveal from "../Reveal";


function Techstack() {
  return (
    <Reveal>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" , paddingTop : "100px" }}>
  <h1 className="project-heading">
          My Professional <strong className="purple">Skillset </strong>
        </h1>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>JavaScript</h4>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <h4>Angular</h4>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React.JS</h4>
      </Col>
    
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
        <h4>Asp.Net Core</h4>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node.JS</h4>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>MongoDB</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>

  
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h4>PostgreSQL</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <h4>Microsoft SQL Server</h4>
      </Col> */}


    </Row>
    </Reveal>
  );
}

export default Techstack;
