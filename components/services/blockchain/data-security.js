import Image from "next/image";
export default function DataSecurity() {
  return (
    <section className="py-24 mt-20 bg-[#F9F9FC]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/data-security.png"}
                alt="Data Security on Blockchain"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">Data Security</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
            Increase the security of your data. Blockchain technology is considered highly secure, as it doesn&apos;t have a single point of failure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
