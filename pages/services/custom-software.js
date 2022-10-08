import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import CustomSolutionsHero from "../../components/hero/custom-software-hero";
import CustomSolutionsBrief from "../../components/services/custom-software/custom-software-brief";
import CustomSoftwareGrid from "../../components/services/custom-software/custom-software-grid";
import InnovativeProducts from "../../components/services/custom-software/innovative-products";
import ScaleOrganization from "../../components/services/custom-software/scale-organization";
import IncreaseRoi from "../../components/services/custom-software/increase-roi";
import TechnicalSupport from "../../components/services/custom-software/technical-support";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-software/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";

export default function CustomSolutions() {
  return (
    <Fragment>
      <Head>
        <title>Custom Software Development Services | Software Engineering</title>
        <meta name="description" content="At Unicodez, our team of experts is trained to understand and monitor market demands, setting you up for success. Learn more about our custom software services here."/>
        <meta name="keywords" content="custom software development, build custom app" />
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
