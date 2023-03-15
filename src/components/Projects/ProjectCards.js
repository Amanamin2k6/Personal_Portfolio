import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineYoutube,
  AiFillFacebook
} from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>


        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {props.website &&(
          <Button
            variant="primary"
            href={props.website}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite />
          </Button>
        )}
        {props.youtube &&(
          <Button
            variant="primary"
            href={props.youtube}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiOutlineYoutube />
          </Button>
        )}

        {props.fb &&(
          <Button
            variant="primary"
            href={props.fb}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <  AiFillFacebook />
          </Button>
        )}
        {props.twitter && (
          <Button
            variant="primary"
            href={props.twitter}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiOutlineTwitter />
          </Button>
        )}
        {props.insta &&(
          <Button
            variant="primary"
            href={props.insta}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiFillInstagram />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
