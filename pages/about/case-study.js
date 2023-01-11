import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import CaseHero from "../../components/case-study/hero";
import CaseCatalog from "../../components/case-study/case-grid";

export default function Clients() {
    return (
        <Fragment>
            <Head>
                <title>Case Studies</title>
            </Head>
            <CaseHero />
            <CaseCatalog />
            <div className="mt-20 -mb-24">
                <Newsletter />
            </div>
        </Fragment>
    );
}
