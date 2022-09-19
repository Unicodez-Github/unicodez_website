import Image from "next/image";
export default function MeetchessBrief() {
  return (
    <section className="py-24 mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6" data-aos="fade-up">
          <div>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Unicodez presents &ldquo;Meetchess&rdquo;, the first of its kind, global video
              and audio chess platform. Meetchess offers a variety of services
              including allowing players to connect virtually. It is perfect for
              anyone with an interest in chess.
            </p>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Share your pro skills, learn from better players, or test your
              skills against others. Meetchess is created to simplify and
              automate the chess training process. It is also the
              fastest-growing chess training platform.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/meetchess-brief.png"}
                alt="Meetchess video/audio chess platform"
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
