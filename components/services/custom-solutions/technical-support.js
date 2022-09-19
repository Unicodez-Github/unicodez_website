import Image from "next/image";
export default function TechnicalSupport() {
  return (
    <section className="py-24 mt-20 bg-[#FFFCEB]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/technical-support.png"}
                alt="Technical Software Support Services"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title">Receive Ongoing Technical Support</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Our team of customer service agents is available 24/7 to offer
              help and answer questions and inquiries.
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
