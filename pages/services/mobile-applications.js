import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-software/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import MobileApplicationsHero from "../../components/hero/mobile-applications-hero";
import MobileApplicationsBrief from "../../components/services/mobile-applications/mobile-applications-brief";
import MobileApplicationsGrid from "../../components/services/mobile-applications/mobile-applications-grid";
import TopNotchApps from "../../components/services/mobile-applications/top-notch-apps";
import ScalabilityFuture from "../../components/services/mobile-applications/scalability-future";
import SafeSecure from "../../components/services/mobile-applications/safe-secure";
import SmartMobileApps from "../../components/services/mobile-applications/smart-mobile-apps";
import AppDevelopment from "../../components/services/mobile-applications/app-development";

export default function MobileApplications() {
  return (
    <Fragment>
      <Head>
        <title>Mobile App Development | App Design and Development</title>
        <meta name="description" content="Mobile applications are the future of B2C companies — and at Unicodez, we help your business grow to new heights with mobile apps. Learn more here."/>
        <meta name="keywords" content="Mobile app development, smart mobile app" />
      </Head>
      <MobileApplicationsHero />
      <MobileApplicationsBrief />
      <MobileApplicationsGrid />
      <TopNotchApps />
      <ScalabilityFuture />
      <SafeSecure />
      <SmartMobileApps />
      <AppDevelopment />
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
