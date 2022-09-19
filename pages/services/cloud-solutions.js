import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-solutions/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import CloudSolutionsHero from "../../components/hero/cloud-solutions-hero";
import CloudSolutionsBrief from "../../components/services/cloud-solutions/cloud-solutions-brief";
import CloudSolutionsGrid from "../../components/services/cloud-solutions/cloud-solutions-grid";
import CloudMigration from "../../components/services/cloud-solutions/cloud-migration";
import SafeSecure from "../../components/services/cloud-solutions/safe-secure";
import ScalabilityFuture from "../../components/services/cloud-solutions/scalability-future";
import DisasterRecovery from "../../components/services/cloud-solutions/disaster-recovery";

export default function CloudSolutions() {
  return (
    <Fragment>
      <Head>
        <title>Cloud Software Solutions :: Unicodez - Starts with you!</title>
      </Head>
      <CloudSolutionsHero />
      <CloudSolutionsBrief />
      <CloudSolutionsGrid />
      <CloudMigration />
      <SafeSecure />
      <ScalabilityFuture />
      <DisasterRecovery />
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
