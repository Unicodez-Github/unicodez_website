import Image from "next/image";
export default function CustomSolutionsBrief() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Now more than ever, businesses need custom software to adapt to
              new market demands. Technological advancements in the world
              constantly affect what customers demand of businesses.
            </p>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Our team of experts is trained to understand and monitor market
              demands, equipping them with the knowledge needed to create
              high-performance and feature-packed custom software for your
              business. We’ll create, deploy, and maintain software design
              specifically for your customers.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/testimonials/testimonial-brief.png"}
                alt=""
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
