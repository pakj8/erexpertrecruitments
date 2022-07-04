import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";

function OurServices() {
  const text1 = ` we provide a full range of solutions including temporary and
  permanent Staffing, outsourcing and other workforce solutions in the
  areas of Real Estate, Finance, Accounting, Human Resources, IT,
  Sales and Marketing.`;

  const text2 = `Businesses need great frontline resources because they are the face
  of the organization. However, hiring this kind of frontline resource
  is a challenge. For such multiple entry-level positions in your
  organization, we have a specialist Bulk Hiring team that comes
  equipped with technology-driven processes and established
  relationships. So you know that we take your mass hiring needs very
  seriously`;

  const text3 = `Hiring for critical leadership positions and functional heads is one
  of the big tasks for any organization, especially a startup. Good
  leadership is the momentous stepping stone for steering the
  organization towards growth. Our specialized team helps you find key
  people to head all the key functions like marketing, finance,
  technology and product. We connect you with the right talent who
  will take your organization to new heights. Hiring for decisive XO
  and VP level positions just got simpler.`;

  const text4 = `It is often difficult to know whether a certain type of talent
  exists in the market. When this is the case, we provide our clients
  with an in-depth analysis of the availability and quality of talent
  within their reach. Whether recruiting a new chairman or executive
  or establishing a business team in a new market, we create detailed
  reports illustrating who's who across our clients' sectors and other
  relevant markets.`;

  const text5 = `Dead Position??? Passive Candidates??? Fitment Issues??? Headhunting
  has played a pivotal role when it comes to recruitment Over the
  years combined with long brainstorming sessions we have developed
  ways and methods to target the right set of people when it comes to
  a specific job description.`;

  const text6 = `ER Expert Recruitment offers IT Professionals/engineers that will
  fully concentrate on the client's needs, where the client has full
  management control over the project and IT professionals.`;

  const text7 = `There is a major difference between training and development.
  Training focuses on the current employee needs and competency gaps
  while development refers to preparing people for future assignments
  and responsibilities. ER Expert Recruitments help you polish your
  communication and social skills. We provide a structured program for
  updating the skills and knowledge of employees in accordance with
  changing environment. Our Curated learning Pathways help close
  Knowledge gaps and drive Measurable Outcomes.`;

  return (
    <div id="services" className="container servicesCard ">
      <h1 className="display-3 m-5 text-start themeColor headers">
        Services We Provide
      </h1>
      <div className="cards">
        <div className="card card-one">
          <h2 className="card-title cardTitle">Recruitment</h2>
          <p className="description">{text1}</p>
        </div>
        <div className="card card-one">
          <h2 className="card-title cardTitle">Bulk Hiring</h2>
          <p className="description">{text2}</p>
        </div>
        <div className="card card-one">
          <h2 className="card-title cardTitle">CXO/EXECUTIVE HIRING</h2>
          <p className="description">{text3}</p>
        </div>
        <div className="card card-one">
          <h2 className="card-title cardTitle">INDUSTRY MAPPING</h2>
          <p className="description">{text4}</p>
        </div>
        <div className="card card-one">
          <h2 className="card-title cardTitle">HEADHUNTING</h2>
          <p className="description">{text5}</p>
        </div>
        <div className="card card-one">
          <h2 className="card-title cardTitle">Dedicated Resource Model</h2>
          <p className="description">{text6}</p>
        </div>
        <div className="card card-one">
          <h2 className="card-title cardTitle">Training And Development</h2>
          <p className="description">{text7}</p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
