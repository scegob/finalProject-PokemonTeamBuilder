import React from "react";
import PokeId from "../images/pokemonGoID.jpg";
import "./Contact.css";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <>
      <div className="paddingTop">
        <Card style={{ width: "18rem" }} className="trainerId">
          <Card.Img variant="top" src={PokeId} />
          <Card.Body>
            <div className="center">
              <Card.Title>Pokemon Go Trainer Id</Card.Title>
              <Card.Text>
                Pokemon Go is an application made by{" "}
                <a href="https://nianticlabs.com/" target="_blank">
                  Niantic
                </a>
                . Feel free to add me in this great application that brings
                pokemon to the real world through AR.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Contact;
