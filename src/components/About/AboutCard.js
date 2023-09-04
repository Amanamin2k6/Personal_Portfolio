import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Amin </span>
            from <span className="purple"> Houston, Texas.</span>
            <br />I am a Computer Science undergraduate student at the University of Houston. I am passionate about creating new technology that can help improve our lives.
            <br />
            <br />
            Here is what I do when I am not coding!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteer
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch videos about coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be the giver not the taker!"{" "}
          </p>
          <footer className="blockquote-footer">Aman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
