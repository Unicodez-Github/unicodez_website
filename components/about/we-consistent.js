import Image from "next/image";
export default function WeConsistent() {
  return (
    <section className="py-40 lg:mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/we-consistent.png"}
                alt=""
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div className="flex flex-col mt-20">
            <h2 className="section-title text-left leading-snug">We’re consistent…</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Unicodez is honored to be a part of your business’s digital
              transformation. We believe in fulfilling due diligence and going
              above and beyond for our clients. Furthermore, we are consistent
              with our beliefs. You can count on us to give and maintain superb
              quality services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
