import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import BringYourSoftwareIdeas from "../../components/services/custom-solutions/bring-your-software-ideas";
import WhyUnicodezProducts from "../../components/products/why-unicodez-products";
import ProductsCta from "../../components/services/products-cta";
import SmartcheckoutHero from "../../components/hero/smart-checkout-hero";
import SmartcheckoutBrief from "../../components/products/smartcheckout/smartcheckout-brief";
import Features from "../../components/products/smartcheckout/features";
import ServicesCta from "../../components/services/services-cta";

export default function Smartcheckout() {
  return (
    <Fragment>
      <Head>
        <title>Smart Checkout :: Unicodez - Starts with you!</title>
      </Head>
      <SmartcheckoutHero />
      <SmartcheckoutBrief />
      <Features />
      <ProductsCta text="Get Smartcheckout" />
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
