import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/naruto.gif";
import Tilt from "react-parallax-tilt";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../Projects/Projects";
import Reveal from "../Reveal";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Reveal>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Hmm,<span className="purple"> ME ? </span>
              </h1>
              <p className="home-about-body">
              I Am an Experienced Full Stack Developer an experienced developer specializing in Tailoring <span className="purple"> Custom websites for businesses of all sizes.</span>
              <br/>
               Whether you’re seeking contracts, showcasing services, or venturing into e-commerce, <span className="purple"> you can rely on my expertise.</span>
                {/* Driven Developer and passionate about building <span className="purple"> innovative solutions. </span>
                <br></br>
                Committed to pushing boundaries and making a real impact. Thrives on <span className="purple"> collaboration and
                  embraces new challenges</span>  with enthusiasm.
                <br></br>
                <br></br>
                <span className="purple"> Let's Create Something Remarkable Together.</span> */}
              </p>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="myAvtar-img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Reveal>

        <Techstack />
        <Toolstack />
        <Projects />

        <Reveal>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND <span className="purple">Rushiraj </span>ON</h1>
              
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/RushirajRavalji"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/RavaljiRushiraj"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/rushiraj-ravalji-a52995231/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/rushiraj_ravalji/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                
              </ul>
              <p>
                Feel free to <span className="purple">connect </span>
              </p>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </Container>
  );
}

export default Home2;
