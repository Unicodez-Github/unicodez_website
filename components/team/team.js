import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../core/newsletter";
import TeamHero from "../../hero/team-hero";
import TeamGrid from "./team-grid";
import WeAreUnicodez from "./we-are-unicodez";
import HiringCta from "./hiring-cta";

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
