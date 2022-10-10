import Image from "next/image";
export default function LiveChess() {
  return (
    <section className="py-24 mt-20 bg-[#F9F9FC]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/live-chess.png"}
                alt="Live chess board"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">Live Chess Board</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              The live chess board allows teaching and learning in real-time.
              Meetchess coaches can make use of video, audio, and live
              chessboard features to communicate complex tactics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
