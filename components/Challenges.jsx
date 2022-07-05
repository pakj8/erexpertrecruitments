import React, { useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import dynamic from "next/dynamic";

function Challenges() {
  const ChallengesCard = dynamic(() => import("./view/ChallengesCard"));

  return (
    <div>
      <h1
        style={{ color: "teal" }}
        className="display-3 m-5 text-start animate headers"
      >
        Challenges Taken & Conqured
      </h1>
      <Carousel
        className="challengeContainer"
        variant="dark"
        indicators={false}
        interval={null}
      >
        <Carousel.Item>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757260/Recruitments/ads_xvzwaw.png"
                  name="Ads Sales Manager"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757258/Recruitments/seo_myda2e.png"
                  name="SEO"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757256/Recruitments/content_rfbakz.png"
                  name="Content Syndication Head"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  bgColor="#B3E8E5"
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757256/Recruitments/coding_lycd47.png"
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
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757259/Recruitments/user_exnktc.png"
                  name="Marketing Head"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757258/Recruitments/process_guxb12.png"
                  name="Procurement Manager"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757256/Recruitments/architect_thpi1e.png"
                  name="Head of Architecture"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757256/Recruitments/chef_ecr0sq.png"
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
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757256/Recruitments/clipboard_pta5oo.png"
                  name="Deputy Manager: E-insurance"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757258/Recruitments/team_hreizh.png"
                  name="Regional Sale Manager"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757259/Recruitments/aggregation_othfsm.png"
                  name="Deputy Manager: Web Aggregator"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757257/Recruitments/handshake_kxldq5.png"
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
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757257/Recruitments/handshake_kxldq5.png"
                  name="Content Acquisition"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757832/Recruitments/edit_ugcjo6.png"
                  name="Chief Manager Underwriting"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757260/Recruitments/social-care_pjmcbm.png"
                  name="Service Officer"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757257/Recruitments/hr_h4cvhf.png"
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
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757932/Recruitments/office_e3wto1.png"
                  name="Relationship Manager- Branch Banking"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757260/Recruitments/web-design_t2vpio.png"
                  name="Graphic Designers"
                  bgColor="#3BACB6"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656758237/Recruitments/curve_ostrg7.png"
                  name="LUX Designer/Developer"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757258/Recruitments/interior-design_fair9s.png"
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
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757258/Recruitments/leadership_pd4gua.png"
                  name="Team Leader/AM"
                  bgColor="#2F8F9D"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  bgColor="#3BACB6"
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757258/Recruitments/paint-palette_oqw5uo.png"
                  name="Editor/Art Director"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757257/Recruitments/executive_faxujf.png"
                  name="Executive Assitants"
                  bgColor="#82DBD8"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ChallengesCard
                  images="https://res.cloudinary.com/dh7xchikj/image/upload/v1656757257/Recruitments/crm_pihfr2.png"
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
