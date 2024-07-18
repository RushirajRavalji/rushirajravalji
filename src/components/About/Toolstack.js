import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSwagger,
  SiVisualstudio,
  SiWindows,
} from "react-icons/si";
import Reveal from "../Reveal";

function Toolstack() {
  return (
    <Reveal>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" , paddingTop : "100px" }}>
       <h1 className="project-heading">
        My {" "}
          <strong className="purple"> Tools</strong> 
        </h1>

      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h4>Windows OS</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>VS Code</h4>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <h4>Visual Studio</h4>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>

      



    </Row>
    </Reveal>
  );
}

export default Toolstack;
