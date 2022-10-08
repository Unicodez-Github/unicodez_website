import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-software/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import CloudSolutionsHero from "../../components/hero/cloud-solutions-hero";
import CloudSolutionsBrief from "../../components/services/cloud-solutions/cloud-solutions-brief";
import CloudSolutionsGrid from "../../components/services/cloud-solutions/cloud-solutions-grid";
import CloudMigration from "../../components/services/cloud-solutions/cloud-migration";
import SafeSecure from "../../components/services/cloud-solutions/safe-secure";
import ScalabilityFuture from "../../components/services/cloud-solutions/scalability-future";
import DisasterRecovery from "../../components/services/cloud-solutions/disaster-recovery";
import CloudBackup from "../../components/services/cloud-solutions/cloud-backup";

export default function CloudSolutions() {
  return (
    <Fragment>
      <Head>
        <title>Secure Cloud Services | Backups, Migration, and More</title>
        <meta name="description" content="Cloud services keep data safe and support environmental proactivity — and at Unicodez, we provide tailored solutions for your business. Contact us here."/>
        <meta name="keywords" content="cloud solution, cloud solutions developer, disaster recovery" />
      </Head>
      <CloudSolutionsHero />
      <CloudSolutionsBrief />
      <CloudSolutionsGrid />
      <CloudMigration />
      <SafeSecure />
      <ScalabilityFuture />
      <DisasterRecovery />
      <CloudBackup />
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
