import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FlagIcon from "@mui/icons-material/Flag";
import GroupsIcon from "@mui/icons-material/Groups";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <h1 className="display-3 m-5 text-start">About Us</h1>
          <div className="col-lg-12 first-content">
            <p>
              ER expert Recruitment is a pioneer of organised recruitments in
              India. our roots in executive search enable us to bring a unique
              approach to hiring the right candidate. ER Expert Recruitments was
              founded on an innovative idea that every small or large-scaled
              business should run like a fortune 500 company, we introduced
              technology-driven HR services that work with clients all the way.
            </p>
            <p>
              With our years of expertise in the industry, we would like to take
              the Honor to be Em-panelled with you in order to Serve you Better
              Presently and in the near Future ER Expert Recruitments has Worked
              with the Best of the Corporates in India. We Provide a range of
              talent acquisition services by leveraging our Domain Knowledge
              built over time. We have accumulated a huge Goodwill amongst our
              Satisfied Clients. Let us join hands together to bring a
              revolution in the world of human resource management.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="card-container">
              <div
                style={{ width: "20rem", height: "20rem" }}
                className="card text-center bg-dark card-hover"
              >
                <RemoveRedEyeIcon
                  sx={{
                    ":hover": {
                      color: "teal",
                    },
                  }}
                  className="mui-icons"
                />
                <div className="card-body content">
                  <div className="card-title">
                    <h3>Vision</h3>
                  </div>
                  <div>
                    <p className="card-text text-start">
                      We Provide high-Quality HR Services to Clients in Mumbai
                      who require HR Support and HR Direction. We not only
                      provide Trained and Enabled Employees for Bulk-Hiring but
                      also Support Functions to Contribute effectively and
                      Productively to the overall Company Direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-container">
              <div
                style={{ width: "20rem", height: "20rem" }}
                className="card text-center bg-dark card-hover"
              >
                <FlagIcon
                  sx={{
                    ":hover": {
                      color: "teal",
                    },
                  }}
                  className="mui-icons"
                />
                <div className="card-body content">
                  <div className="card-title">
                    <h3>Mission</h3>
                  </div>
                  <div>
                    <p className="card-text text-start">
                      ER Expert Recruitments aspires to be a Talent Technology
                      Leader, Intelligently solving the most critical challenges
                      for employers and delivering results that strengthen
                      organisations. We have all the necessary tools, the Right
                      Measures, and a Full-Fledged team to Meet your timely
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
