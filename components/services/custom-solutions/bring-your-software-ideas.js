import Image from "next/image";
import TestimonialBlock from "../../about/testimonials/testimonial-block";

export default function BringYourSoftwareIdeas() {
  return (
    <section className="w-full pt-10 mt-16" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Bring Your Software Ideas To Life With Unicodez
          </h2>
          <TestimonialBlock />
        </div>
      </div>
    </section>
  );
}
