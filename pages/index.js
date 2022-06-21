import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import CarouselTop from "../components/CarouselTop";
import About from "../components/About";
import OurServices from "../components/OurServices";
import TwoContainer from "../components/TwoContainer";
import Milestone from "../components/Milestone";
import Challenges from "../components/Challenges";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ER EXPERT RECRUITMENTS</title>
        <meta name="description" content="ER Expert Recruitment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="row text-start">
          <NavigationBar />
          <CarouselTop />
          <OurServices />
          <About />
          <TwoContainer />
          <Milestone />
          <Challenges />
          <hr style={{ width: "80rem", position: "relative", left: "100px" }} />
          <Faq />
        </div>
      </main>
    </div>
  );
}
