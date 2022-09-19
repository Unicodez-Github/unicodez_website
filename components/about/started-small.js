import Image from "next/image";
export default function StartedSmall() {
  return (
    <section className="bg-[#F9F9FC] py-48 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">We started small…</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Unicodez was founded with three employees based in India and just
              a handful of local clients. Today, we have grown to service an
              ever-increasing number of clients worldwide. This journey has been
              challenging, rewarding, and humbling and each day teaches us
              something new. But we&apos;re excited to be here and are rewarded
              by the success stories of our clients.
            </p>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Your wins are ours and we show this through our unwavering
              dedication to you and your business. Unicodez has matured into a
              full-service software development company. Our clients are spread
              out across a wide range of industries and nationalities.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/about-started-small.png"}
                alt=""
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
