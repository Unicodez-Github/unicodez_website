import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import BringYourSoftwareIdeas from "../../components/services/custom-solutions/bring-your-software-ideas";
import WhyUnicodezProducts from "../../components/products/why-unicodez-products";
import UnistackHero from "../../components/hero/unistack-hero";
import UnistackBrief from "../../components/products/unistack/unistack-brief";
import AutomatedPayroll from "../../components/products/unistack/automate-payroll";
import BusinessDatabase from "../../components/products/unistack/business-databae";
import EmployeeManagement from "../../components/products/unistack/employee-management";
import ProductsCta from "../../components/services/products-cta";

export default function Unistack() {
  return (
    <Fragment>
      <Head>
        <title>Unistack :: Unicodez - Starts with you!</title>
      </Head>
      <UnistackHero />
      <UnistackBrief />
      <AutomatedPayroll />
      <BusinessDatabase />
      <EmployeeManagement />
      <ProductsCta text="Get Unistack" />
      <WhyUnicodezProducts />
      {/* <BringYourSoftwareIdeas /> */}

      <div className="mt-36"></div>
      <ProductsCta text="Get Unistack" />
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
