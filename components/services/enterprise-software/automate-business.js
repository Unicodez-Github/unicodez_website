import Image from "next/image";
export default function AutomateBusiness() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">
              Automate Your Business
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Do you still have physical records or carry out your billing,
              accounting, and other business processes manually? Automating your
              business’ operations can increase productivity and profits.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/automate-business.png"}
                alt="Automate Your Business with Unicodez Software Development"
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
