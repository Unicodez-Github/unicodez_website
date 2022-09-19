import Image from "next/image";
export default function TestimonialBrief() {
  return (
    <section className="py-48 mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Since our establishment in 2016, we&apos;ve worked hard to connect to
              our clients on personal levels. Every entrepreneur puts a lot of
              who they are into their business&apos;s core values, goals, and system
              of operation.
            </p>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Connecting with our clients gives us a clear understanding of your
              goals and visions for your company. Your dream becomes ours.
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
