/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col, UncontrolledCollapse
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

// index page sections
import Download from "../IndexSections/Download.js";


fetch('https://normapi.herokuapp.com/api/normalize', {
  "method": "post",
  "Content-Type": "application/json",
  "body": JSON.stringify({
    "string": 'TEST test TEST'
  })})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        {/*Инструкция по работе с сообщениями https://github.com/Wolox/react-chat-widget*/}
        <Widget />
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 landing-top-background">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-black">
                        Личный нотариус{" "}
                        <span>онлайн 24/7</span>
                      </h1>
                      <p className="lead text-black">
                        Услугу предоставляет сбербанк
                      </p>
                      <div className="btn-wrapper">
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}

            </section>
            {/* 1st Hero Variation */}
          </div>

        </main>

      </>
    );
  }
}

export default Landing;
