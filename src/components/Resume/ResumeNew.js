import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">

        <Row>
          <iframe title="resume" src="https://drive.google.com/file/d/1Pqns9NWpLfAdkTuz0ISSW3kVfa2N-3jO/preview" width={width} height="480" allow="autoplay"></iframe>
        </Row>

      </Container>
      <Particle />
    </div>
  );
}

export default ResumeNew;
