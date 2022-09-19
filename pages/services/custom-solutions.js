import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import CustomSolutionsHero from "../../components/hero/custom-solutions-hero";
import CustomSolutionsBrief from "../../components/services/custom-solutions/custom-solutions-brief";
import CustomSoftwareGrid from "../../components/services/custom-solutions/custom-software-grid";
import InnovativeProducts from "../../components/services/custom-solutions/innovative-products";
import ScaleOrganization from "../../components/services/custom-solutions/scale-organization";
import IncreaseRoi from "../../components/services/custom-solutions/increase-roi";
import TechnicalSupport from "../../components/services/custom-solutions/technical-support";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-solutions/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";

export default function CustomSolutions() {
  return (
    <Fragment>
      <Head>
        <title>Custom Software Solutions :: Unicodez - Starts with you!</title>
      </Head>
      <CustomSolutionsHero />
      <CustomSolutionsBrief />
      <CustomSoftwareGrid />
      <InnovativeProducts />
      <ScaleOrganization />
      <IncreaseRoi />
      <TechnicalSupport />
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
