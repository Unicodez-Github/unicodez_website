import { Fragment } from "react";
import Head from "next/head";
import HowWeGetItDone from "../../components/homepage/how-we-get-it-done";
import Newsletter from "../../components/core/newsletter";
import HowCanWeHelp from "../../components/services/how-can-we-help";
import ServicesCta from "../../components/services/services-cta";
import ProductsHero from "../../components/hero/products-hero";
import ProductCatalog from "../../components/products/product-catalog";
import SimpleSolutionsGrid from "../../components/products/simple-solutions-grid";

export default function Services() {
  return (
    <Fragment>
      <Head>
        <title>Our Products :: Unicodez - Starts with you!</title>
      </Head>
      <ProductsHero />
      <ProductCatalog />
      <SimpleSolutionsGrid />
      {/* <HowWeGetItDone /> */}
      {/* <HowCanWeHelp /> */}
      <ServicesCta />
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
