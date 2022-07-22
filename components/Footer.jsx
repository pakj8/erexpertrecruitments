import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div style={{ color: "white" }} className=" container">
      <footer className="py-5">
        <div className="row justify-content-center">
          {/* About */}

          <div className="col-6 col-md-2 mb-3">
            <h5>ABOUT</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  CSR
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Testimonials */}

          <div className="col-6 col-md-2 mb-3">
            <h5>TESTIMONIALS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  Success Stories
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  Customer Reviews
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  Press & News
                </a>
              </li>
            </ul>
          </div>

          {/* BLOGS */}

          <div className="col-6 col-md-2 mb-3">
            <h5>BLOGS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  Interview
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  Training & Development
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* INDIA */}

          <div className="col-6 col-md-2 mb-3">
            <h5 style={{ position: "relative", left: "40px" }}>INDIA</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  +91 7977028524
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  recruitments@erexpertrecruitments.com
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted footerText">
                  www.erexpertrecruitments.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{ paddingTop: "50px" }}
          className="d-flex flex-column flex-sm-row justify-content-between py-7 my-4 border-top"
        >
          <p>&copy; {date} ER Expert Recruitments, Inc. All Right Reserved</p>
          <ul className="list-unstyled d-flex social">
            {" "}
            <li className="ms-3">
              {" "}
              <a
                className="link-dark"
                href="https://www.facebook.com/Erexpertrecruitments"
              >
                <FacebookIcon
                  sx={{
                    color: "#3b5998",
                    ":hover": {
                      color: "white",
                      boxShadow: 20,
                    },
                  }}
                  fontSize="large"
                />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-dark"
                href="https://www.linkedin.com/in/er-expert-recruitments-7b7901241/"
              >
                <LinkedInIcon
                  sx={{
                    color: "#1DA1F2",
                    ":hover": {
                      color: "white",
                      boxShadow: 20,
                    },
                  }}
                  fontSize="large"
                />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-dark"
                href="https://www.instagram.com/recruitment_intelligence/"
              >
                <InstagramIcon
                  sx={{
                    color: "#e95950",
                    ":hover": {
                      color: "white",
                      boxShadow: 20,
                    },
                  }}
                  fontSize="large"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
