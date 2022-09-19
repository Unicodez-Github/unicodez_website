import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-solutions/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import MobileApplicationsHero from "../../components/hero/mobile-applications-hero";
import MobileApplicationsBrief from "../../components/services/mobile-applications/mobile-applications-brief";
import MobileApplicationsGrid from "../../components/services/mobile-applications/mobile-applications-grid";
import TopNotchApps from "../../components/services/mobile-applications/top-notch-apps";
import ScalabilityFuture from "../../components/services/mobile-applications/scalability-future";
import SafeSecure from "../../components/services/mobile-applications/safe-secure";
import SmartMobileApps from "../../components/services/mobile-applications/smart-mobile-apps";

export default function MobileApplications() {
  return (
    <Fragment>
      <Head>
        <title>Mobile Application Development :: Unicodez - Starts with you!</title>
      </Head>
      <MobileApplicationsHero />
      <MobileApplicationsBrief />
      <MobileApplicationsGrid />
      <TopNotchApps />
      <ScalabilityFuture />
      <SafeSecure />
      <SmartMobileApps />
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
