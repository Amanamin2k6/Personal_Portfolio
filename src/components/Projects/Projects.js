import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import houston from "..//../Assets/logos for all/ssausm houston new.png"
import nj from "..//../Assets/logos for all/ssausm nj new.png"
import svgCharity from "..//../Assets/logos for all/SVG-Charity.png"
import chicago from "..//../Assets/logos for all/ssausm chicago new.png"
import svg from "..//../Assets/logos for all/svg white.png"
import ProjectCard from "./ProjectCards";
import lndym from "..//../Assets/logos for all/english logo.png"
import scranton from "..//../Assets/logos for all/ssausm scranton new.png"
import richmond from "..//../Assets/logos for all/ssausm richmond.png"
import uk from "..//../Assets/logos for all/ssausm uk new.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I currently work on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={svgCharity}
              title="SVG Charity"
              description="I manage the website and social media for SVG Charity. I also worked with them during the pandemic to raise awareness about the virus in India and organize food drives and blood drives at various locations across the United States."
              insta="https://www.instagram.com/svgcharity/"
              fb="https://www.facebook.com/SVGCharity"
              website="https://www.swaminarayanvadtalgadi.org/charity/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={svg}
              title="SVG"
              description="I manage the website and social media for SVG. They are the parent organization for many of the nonprofits I work with."
              insta="https://www.instagram.com/swaminarayanvadtalgadi_/"
              fb="https://www.facebook.com/swaminarayanvadtalgadi"
              website="https://www.swaminarayanvadtalgadi.org/"
              twitter="https://twitter.com/vadtalgadi"
              youtube="https://www.youtube.com/user/TheSwaminarayangadi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lndym}
              title="LNDYM"
              description="I manange the soical media accounts and websites for LNDYM (Laxminarayan Dev Yuvak Mandal). We help reconnect Indian American youth eith their culture."
              insta="https://www.instagram.com/officiallndym/"
              fb="https://www.facebook.com/lndym"
              website="https://www.swaminarayanvadtalgadi.org/lndym/ "
              twitter="https://twitter.com/officiallndym"
              youtube="https://www.youtube.com/channel/UCfBvsiuuDYwe8u0QwpuuTRQ"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chicago}
              title="ISSO of Chicago"
              description="This was the first nonprofit of it's kind in the United States and I manage their website and social media."
              insta="https://www.instagram.com/issoofchicago/"
              fb="https://www.facebook.com/ISSOOfChicago/"
              twitter="https://twitter.com/issoofchicago "
              website="http://www.shriji.org/"
              youtube="https://www.youtube.com/user/issoofchicago"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scranton}
              title="SSAUSM Scranton, PA"
              description="This nonprofit is located at the heart of the low income region of Scranton, PA and I work to manage their website and social media."
              insta="https://www.instagram.com/ssausmscranton/"
              fb="https://www.facebook.com/ssausmscranton"
              website="http://www.scranton.svg.org/"
              youtube="https://www.youtube.com/channel/UCj9HFyj75nF6St6058izhvw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nj}
              title="SSAUSM New Jersey"
              description="This nonprofit is located in South Brunswick, NJ and I manage their website and social media. I also helped organize blood drives and food drives here during COVID-19."
              insta="https://www.instagram.com/ssausmnj/"
              fb="https://www.facebook.com/ssausmnj"
              website="http://www.newjersey.svg.org/"
              youtube="https://www.youtube.com/channel/UCnRvcfHEAm2lu7ZdJu3htCA"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={richmond}
              title="SSAUSM Richmond, VA"
              description="This nonprofit is located in Richmond, VA. I manage their website. I also help organize weekly food drives and cultural gatherings every week."
              website="http://www.richmond.svg.org/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houston}
              title="SSAUSM Houston, TX"
              description="This is my main base of operations, I manage their events, social media, website, and finances."
              insta="https://www.instagram.com/vadtaldhamhouston/"
              fb="https://www.facebook.com/VadtalDhamHouston"
              website="http://www.houston.svg.org/"
              youtube="https://www.youtube.com/@vadtaldhamhouston"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uk}
              title="SSAUSM UK"
              description="This is one of my international partners. I manange their website and social media."
              insta="https://www.instagram.com/lndymuk/"
              website="http://swaminarayan.cc/"
            />
          </Col>
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}

export default Projects;
