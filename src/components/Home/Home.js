import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/beardguy.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Reveal from "../Reveal";


function Home() {
  return (
    <section>

      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
        <Reveal> <Row>
            
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey Visitor!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🌟
                </span>
              </h1>

              <h1 className="heading-name">
                Myself
                <strong className="main-name"> Rushiraj Ravalji</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          



           
            <Col md={5} style={{ paddingBottom: 20 }}>

              <Tilt>  
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> 
              </Tilt>
            </Col>
           

          </Row> </Reveal>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
