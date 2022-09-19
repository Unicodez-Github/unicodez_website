import Image from "next/image";
export default function SafeSecure() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:mt-10">
            <h2 className="section-title">Safe and Secure</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Our services help you protect your confidential and private data.
              Our software solutions protect your business and customers from
              data loss, virus attacks, and malware.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/information-security.png"}
                alt="Information Security"
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
