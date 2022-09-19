import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import TeamHero from "../../components/hero/team-hero";
import TeamGrid from "../../components/about/team/team-grid";
import WeAreUnicodez from "../../components/about/team/we-are-unicodez";
import HiringCta from "../../components/about/team/hiring-cta";

export default function Team() {
  return (
    <Fragment>
      <Head>
        <title>Team :: Unicodez - Starts with you!</title>
      </Head>
      <TeamHero />
      <TeamGrid />
      <WeAreUnicodez />
      <div className="mt-36">
        <HiringCta />
      </div>
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
