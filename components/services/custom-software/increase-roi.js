import Image from "next/image";
export default function IncreaseRoi() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">
              Increase Your Return On Investment
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Get flexible strategies and help from our experts to integrate
              custom software into your business to adapt to new market demands.
              Adapting to new market demands will increase your return on your
              investments, and our custom software engineering services can
              help.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/increase-roi.png"}
                alt="Increase ROI With Unicodez Custom Software Development"
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
