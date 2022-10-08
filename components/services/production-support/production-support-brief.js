import Image from "next/image";
export default function ProductionSupportBrief() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title text-left leading-snug">
              Optimized Support & Maintenance Solutions
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Production support and maintenance services are aimed to ensure
              that applications are highly available, reliable, and relevant to
              evolving business needs. Since 2010, Unicodez has delivered
              full-range support and maintenance services for applications of
              different types and complexity. When it comes to product planning,
              we are here to help you succeed.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={
                  "/images/services/optimized-support-maintenance-solutions.png"
                }
                alt=" Optimized Support & Maintenance Solutions"
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
