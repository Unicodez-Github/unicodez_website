import Image from "next/image";
export default function AudioVideo() {
  return (
    <section className="py-10 md:py-24 mt-5 md:mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">Audio/Video Session</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Meetchess is equipped with clear audio and high-resolution video
              sessions. Coaches can communicate easily with students through the
              chat or response section.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/audio-video-chess.png"}
                alt="Audio/Video Session"
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
