import Image from "next/image";
export default function DeepBench() {
  return (
    <section className="py-24 mt-20 bg-[#FFFCEB]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/deep-bench.png"}
                alt="Deep Bench Services"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title">
              Use our deep bench to avail your desired S&M Solutions Services.
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              We recognize the need for you to focus less on the maintenance and
              support of applications and more on the core commercial activities
              of your business. Unicodez team’s in-depth expertise and extensive
              support models help you lower costs and improve response times.
            </p>
            <div className="inline-flex mt-10">
              <button className="button primary normal text-center !px-16">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
