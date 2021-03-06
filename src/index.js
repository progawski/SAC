import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-color-picker/index.css"
import Creator from "./Creator";
import { Container, Row } from "reactstrap";

var destination = document.getElementById("container");

ReactDOM.render(
    <Container className="h-100">
        <Row className="h-100">
            <Creator/>
        </Row>
    </Container>,
    destination
);