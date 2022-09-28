import Head from "next/head";
import { Fragment } from "react";
import Newsletter from "../components/core/newsletter";
import HomeHero from "../components/hero/home-hero";
import Founded from "../components/homepage/founded";
import HowWeGetItDone from "../components/homepage/how-we-get-it-done";
import LatestArticles from "../components/homepage/latest-articles";
import OneStopSolution from "../components/homepage/one-stop-solution";
import UniqueSolutions from "../components/homepage/unique-solutions";
import YouHaveTheJob from "../components/homepage/you-have-the-job";


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Unicodez - Starts with you!</title>
      </Head>
      <HomeHero />
      <OneStopSolution />
      <Founded />
      <HowWeGetItDone />
      <UniqueSolutions />
      <YouHaveTheJob />
      <LatestArticles />
      <div className="-mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
