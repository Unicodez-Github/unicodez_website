import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Newsletter from "../../components/core/newsletter";
import ContactHero from "../../components/hero/contact-hero";
import BringYourSoftwareIdeas from "../../components/services/custom-software/bring-your-software-ideas";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Us :: Unicodez - Starts with you!</title>
      </Head>
      <ContactHero />
      <ContactForm />
      {/* <BringYourSoftwareIdeas /> */}

      <div className="mt-24 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
