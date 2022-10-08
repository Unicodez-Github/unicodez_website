import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-software/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import ProductionSupportHero from "../../components/hero/production-support-hero";
import ProductionSupportBrief from "../../components/services/production-support/production-support-brief";
import ProductionSupportGrid from "../../components/services/production-support/production-support-grid";
import TailorBrand from "../../components/services/production-support/tailor-brand";
import EasySolutions from "../../components/services/production-support/easy-solutions";
import OperationalProcess from "../../components/services/production-support/operational-process";
import DeepBench from "../../components/services/production-support/deep-bench";
import MaintenanceExperts from "../../components/services/production-support/maintenance-experts";

export default function ProductionSupport() {
  return (
    <Fragment>
      <Head>
        <title>Production Support and Maintenance | Why Choose Unicodez?</title>
        <meta name="description" content="Production support and maintenance services ensure that applications are relevant to evolving business needs. Learn more here, then contact us today!"/>
        <meta name="keywords" content="Production support maintenance" />
      </Head>
      <ProductionSupportHero />
      <ProductionSupportBrief />
      <ProductionSupportGrid />
      <TailorBrand />
      <EasySolutions />
      <OperationalProcess />
      <DeepBench />
      <MaintenanceExperts />
      <WhyChooseUs />
      {/* <BringYourSoftwareIdeas /> */}

      <GetStartedServices />
      <ServicesCta />
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
