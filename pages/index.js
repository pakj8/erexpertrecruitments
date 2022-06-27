import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import HomeContainer from "../components/HomeContainer";
import About from "../components/About";
import OurServices from "../components/OurServices";
import TwoContainer from "../components/TwoContainer";
import Milestone from "../components/Milestone";
import Challenges from "../components/Challenges";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import MapContainer from "../components/MapContainer";

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
          <HomeContainer />
          <OurServices />
          <About />
          <TwoContainer />
          <Milestone />
          <Challenges />
          <hr style={{ height: "2px" }} />
          <Faq />
          <MapContainer />
          <Footer />
        </div>
      </main>
    </div>
  );
}
