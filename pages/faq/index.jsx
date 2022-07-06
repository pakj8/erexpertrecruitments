import React from "react";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../../components/NavigationBar";

function Faq() {
  return (
    <div id="FAQ">
      <Head>
        <title>FAQ's</title>
        <meta name="description" content="ER Expert Recruitment" />
        <link rel="icon" href="/ER.ico" />
      </Head>
      <NavigationBar />

      <div className="container">
        <div className="row">
          <h1 className="text-light display-1 text-center mt-5  faq-title">
            Frequently Asked Questions.
          </h1>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
