import Image from "next/image";
export default function PerformanceOptimization() {
  return (
    <section className="py-10 md:py-24 mt-5 md:mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">
              Performance Optimization
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Integrate software designed to ensure that you get the most out of
              all your resources. Maximize your profits.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/performance-optimization.png"}
                alt="Software Performance Optimization"
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
