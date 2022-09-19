import Image from "next/image";
export default function TailorBrand() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title">
              We tailor to your brand’s needs and specifications{" "}
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              We build to fit your project specifications to the letter, address
              challenges, and leverage your advantages.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/tailor-brand-needs.png"}
                alt="We tailor to your brands needs and specifications"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"55%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
