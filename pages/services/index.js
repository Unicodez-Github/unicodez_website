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
        <title>What We Offer | Software Engineering and Development</title>
        <meta name="description" content="At Unicodez, we see ourselves as the lead architects in your business plan. Learn more about what we offer here, then contact us today!"/>
        <meta name="keywords" content="Software engineering, mobile app development, hire a developer" />
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
