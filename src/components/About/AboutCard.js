import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vasu Dhiman </span>
            from <span className="purple"> Kullu, India.</span>
            <br />
            I am a passionate <span className="purple">Full Stack Developer</span> with a keen interest in building web applications and exploring new technologies.
            <br />
            I am currently pursuing Bachelor of Technology in Electronics & Communication Engineering at NIT Hamirpur, Himachal Pradesh.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Knowing what to do tells you nothing about what happens in your head when you try to do it."{" "}
          </p>
          <footer className="blockquote-footer">Morgan Housel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
