import Image from "next/image";
export default function ScalabilityFuture() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">Scalability for the Future</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              We make scaling possible with our cost-effective running of workloads. Maximize the use of your resources.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/scalability-future-alt.png"}
                alt="Scalability for the Future"
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
