import Image from "next/image";
export default function GrowingBigger() {
  return (
    <section className="bg-[#FFFCEB] py-40" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col lg:mt-40">
            <h2 className="section-title leading-snug lg:mt-10">
              We&apos;re growing even bigger…
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Unicodez’s dream has started spreading over the United States. We
              aim to have a worldwide impact on entrepreneurs at various stages
              in their business journeys. We have a plan to change the business
              world and you, our customer, are a big part of it. What better
              time is there to collaborate with the winning team than now?
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/growing-bigger.png"}
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
