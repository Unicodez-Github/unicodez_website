import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ClientsHero from "../../components/hero/clients-hero";
import ClientsGrid from "../../components/about/clients/clients-grid";
import ClientsCta from "../../components/about/clients/clients-cta";

export default function Clients() {
  return (
    <Fragment>
      <Head>
        <title>Clients :: Unicodez - Starts with you!</title>
      </Head>
      <ClientsHero />
      <ClientsGrid />
      {/* <div className="mt-36">
        <ClientsCta />
      </div> */}
      <div className="mt-20 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
