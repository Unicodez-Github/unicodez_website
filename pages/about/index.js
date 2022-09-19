import { Fragment } from "react";
import Head from "next/head";
import AboutHero from "../../components/hero/about-hero";
import OurBelief from "../../components/about/our-belief";
import WinningTeam from "../../components/about/winning-team";
import GetStartedCta from "../../components/about/get-started-cta";
import Newsletter from "../../components/core/newsletter";

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>About us :: Unicodez - Starts with you!</title>
      </Head>
      <AboutHero />
      <OurBelief />
      <WinningTeam />
      <GetStartedCta />
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
