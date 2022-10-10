import Image from "next/image";
export default function SafeSecure() {
  return (
    <section className="py-24 mt-20 bg-[#F9F9FC]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/safe-secure.png"}
                alt="Safe and Secure Solutions"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">Safe and Secure</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Prevent external and internal threats to your customers and your business’ security through our highly classified collection of procedures and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
