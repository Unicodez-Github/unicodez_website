import { Fragment } from "react";
import Head from "next/head";
import HowWeGetItDone from "../../components/homepage/how-we-get-it-done";
import Newsletter from "../../components/core/newsletter";
import ServicesHero from "../../components/hero/services-hero";
import WhatWeOffer from "../../components/services/what-we-offer";
import HowCanWeHelp from "../../components/services/how-can-we-help";
import ServicesCta from "../../components/services/services-cta";

export default function Services() {
  return (
    <Fragment>
      <Head>
        <title>Services :: Unicodez - Starts with you!</title>
      </Head>
      <ServicesHero />
      <WhatWeOffer />
      <HowWeGetItDone />
      <HowCanWeHelp />
      <ServicesCta />
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
