import Image from "next/image";
import TestimonialBlock from "./testimonial-block";

export default function FormOurOwn() {
  return (
    <section className="w-full pt-10 mt-16">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Take It From One of Our Own:
          </h2>
          <TestimonialBlock />
        </div>
      </div>
    </section>
  );
}
