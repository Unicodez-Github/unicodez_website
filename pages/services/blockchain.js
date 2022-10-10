import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import WhyChooseUs from "../../components/services/why-choose-us";
import BringYourSoftwareIdeas from "../../components/services/custom-software/bring-your-software-ideas";
import GetStartedServices from "../../components/services/get-started-services";
import BlockchainBrief from "../../components/services/blockchain/blockchain-brief";
import BlockchainHero from "../../components/hero/blockchain-hero";
import BlockchainGrid from "../../components/services/blockchain/blockchain-grid";
import SpeedyTransactions from "../../components/services/blockchain/speedy-transactions";
import DataSecurity from "../../components/services/blockchain/data-security";
import TransparentTransactions from "../../components/services/blockchain/transparent-transactions";
import DecentralizedSystem from "../../components/services/blockchain/decentralized-system";
import TrustedDevelopers from "../../components/services/blockchain/trusted-developer";

export default function Blockchain() {
  return (
    <Fragment>
      <Head>
        <title>Blockchain Technology | Custom Software Development Services</title>
        <meta name="description" content="Blockchain technology can protect your business from loopholes that were previously exploited by scammers — and Unicodez can help. Learn more here!"/>
        <meta name="keywords" content="Blockchain technology, blockchain developers, blockchain consultancy" />
      </Head>
      <BlockchainHero />
      <BlockchainBrief />
      <BlockchainGrid />
      <SpeedyTransactions />
      <DataSecurity />
      <TransparentTransactions />
      <DecentralizedSystem />
      <TrustedDevelopers />
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
