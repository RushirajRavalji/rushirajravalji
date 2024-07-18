import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Reveal from "../Reveal";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Reveal> 
  <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Rushiraj Ravalji</span> from <span className="purple">Gujarat, India</span>.
      <br />
      I'm currently working as a software developer, Tailoring digital solutions that drive innovation.
      <br />
      With a background in B-Tech(Computer Engineering), I'm dedicated to honing my skills and pushing the boundaries of what's possible.
      <br />
      <br />
      Apart from coding, I find joy in various activities:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing eFootball games Online
      </li>
      <li className="about-activity">
        <ImPointRight /> Cricket on field
      </li>
      <li className="about-activity">
        <ImPointRight /> Reading all kind of books (Novels, Manga)
      </li>
    </ul>
    <p style={{ color: "rgb(155 126 172)" }}>
      "A Stubborn person for the things I Desire 💯"
    </p>
    
  </blockquote>
</Card.Body>
</Reveal>
    </Card>
  );
}

export default AboutCard;
