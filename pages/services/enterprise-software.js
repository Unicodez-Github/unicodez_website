import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-solutions/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import EnterpriseSoftwareHero from "../../components/hero/enterprise-software-hero";
import EnterpriseSoftwareBrief from "../../components/services/enterprise-software/enterprise-software-brief";
import EnterpriseSoftwareGrid from "../../components/services/enterprise-software/enterprise-software-grid";
import AutomateBusiness from "../../components/services/enterprise-software/automate-business";
import InformationSecurity from "../../components/services/enterprise-software/information-security";
import PerformanceOptimization from "../../components/services/enterprise-software/performance-optimization";
import CrmErp from "../../components/services/enterprise-software/crm-erp";

export default function EnterpriseSoftware() {
  return (
    <Fragment>
      <Head>
        <title>Enterprise Software Solutions :: Unicodez - Starts with you!</title>
      </Head>
      <EnterpriseSoftwareHero />
      <EnterpriseSoftwareBrief />
      <EnterpriseSoftwareGrid />
      <AutomateBusiness />
      <InformationSecurity />
      <PerformanceOptimization />
      <CrmErp />
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
