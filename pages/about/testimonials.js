import { Fragment } from "react";
import Head from "next/head";
import Newsletter from "../../components/core/newsletter";
import TestimonialsHero from "../../components/hero/testimonials-hero";
import TestimonialBrief from "../../components/about/testimonials/testimonial-brief";
import OurWord from "../../components/about/testimonials/our-word";
import FormOurOwn from "../../components/about/testimonials/from-our-own";
import TestimonialsCta from "../../components/about/testimonials/testimonials-cta";

export default function Testimonials() {
  return (
    <Fragment>
      <Head>
        <title>Testimonials :: Unicodez - Starts with you!</title>
      </Head>
      <TestimonialsHero />
      <TestimonialBrief />
      <OurWord />
      <FormOurOwn />
      <div className="mt-36">
        <TestimonialsCta />
      </div>
      <div className="-mt-64 -mb-24">
        <Newsletter />
      </div>
    </Fragment>
  );
}
