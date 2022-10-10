import Image from "next/image";
export default function CustomizedCoaching() {
  return (
    <section className="py-24 mt-20 bg-[#F9F9FC]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/customized-coaching.png"}
                alt="Customized Coaching Chess Platform"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">Customized Coaching Platform</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              The Meetchess coaching platform is customized to the nines. We
              spared no feature in creating the best chess platform. <br />
              Tutors or coaches have a wide array of tools to help them connect
              with their students. The sub-coach allows the main coach to have
              multiple sub-coaches to assist in various areas of coaching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
