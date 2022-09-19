import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import BringYourSoftwareIdeas from "../../components/services/custom-solutions/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import MeetChessHero from "../../components/hero/meet-chess-hero";
import CustomizedCoaching from "../../components/products/meetchess/customized-coaching";
import MeetchessBrief from "../../components/products/meetchess/meetchess-brief";
import AudioVideo from "../../components/products/meetchess/audio-video";
import LiveChess from "../../components/products/meetchess/live-chess";
import Assessments from "../../components/products/meetchess/assessments";
import Database from "../../components/products/meetchess/database";
import WhyUnicodezProducts from "../../components/products/why-unicodez-products";
import ProductsCta from "../../components/services/products-cta";

export default function Meetchess() {
  return (
    <Fragment>
      <Head>
        <title>Meetchess :: Unicodez - Starts with you!</title>
      </Head>
      <MeetChessHero />
      <MeetchessBrief />
      <CustomizedCoaching />
      <AudioVideo />
      <LiveChess />
      <Assessments />
      <Database />
      <ProductsCta text="Get Meetchess" />
      <WhyUnicodezProducts />
      {/* <BringYourSoftwareIdeas /> */}

      <div className="mt-36"></div>
      <ServicesCta />
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
