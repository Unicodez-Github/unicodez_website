import Image from "next/image";
export default function OperationalProcess() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">
              The operational process with diversified S&M solutions
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Being trusted support partners to global enterprises, we offer our
              clients comprehensive production support and maintenance services
              so you can focus on growing your business instead.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/operational-process.png"}
                alt="Operational process with diversified S&M solutions"
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
