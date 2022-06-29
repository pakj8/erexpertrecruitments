import React, { useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import ChallengesCard from "./view/ChallengesCard";
import ADSpng from "../public/ads.png";

function Challenges() {
  return (
    <div>
      <h1 className="display-3 m-5 text-start animate">
        <span style={{ color: "teal" }}>Challenges </span>
        <span style={{ color: "#40DFEF" }}>Taken & </span>
        <span style={{ color: "teal" }}>Conquered</span>
      </h1>
      <Carousel
        className="challengeContainer"
        variant="light"
        indicators={false}
      >
        <Carousel.Item>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images={ADSpng}
                  name="Ads Sales Manager"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/seo.png"
                  name="SEO"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/content.png"
                  name="Content Syndication Head"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  bgColor="#B3E8E5"
                  images="/coding.png"
                  name="Front End Developer"
                />
              </div>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/user.png"
                  name="Marketing Head"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/process.png"
                  name="Procurement Manager"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/architect.png"
                  name="Head of Architecture"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/chef.png"
                  name="Corporate Chef"
                  bgColor="#B3E8E5"
                />
              </div>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/clipboard.png"
                  name="Deputy Manager: E-insurance"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/team.png"
                  name="Regional Sale Manager"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/aggregation.png"
                  name="Deputy Manager: Web Aggregator"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/handshake.png"
                  name="Business Development Manager"
                  bgColor="#B3E8E5"
                />
              </div>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/handshake.png"
                  name="Content Acquisition"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/edit.png"
                  name="Chief Manager Underwriting"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/social-care.png"
                  name="Service Officer"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/hr.png"
                  name="HR Manager"
                  bgColor="#B3E8E5"
                />
              </div>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/office.png"
                  name="Relationship Manager- Branch Banking"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/web-design.png"
                  name="Graphic Designers"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/curve.png"
                  name="LUX Designer/Developer"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/interior-design.png"
                  name="Interior Draftsman"
                  bgColor="#B3E8E5"
                />
              </div>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/leadership.png"
                  name="Team Leader/AM"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  bgColor="#3BACB6"
                  images="/paint-palette.png"
                  name="Editor/Art Director"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/executive.png"
                  name="Executive Assitants"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="/crm.png"
                  name="Relationship Manager"
                  bgColor="#B3E8E5"
                />
              </div>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Challenges;
