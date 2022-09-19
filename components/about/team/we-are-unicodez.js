import Image from "next/image";

export default function WeAreUnicodez() {
  return (
    <div className="w-full" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title leading-snug text-center">We Are Unicodez</h2>
        <div className="max-w-7xl h-full mx-auto relative">
          <Image
            src={"/images/team/group.png"}
            alt="Unicodez Team Group Picture"
            layout="responsive"
            objectFit="contain"
            width={"100%"}
            height={"50%"}
          />
        </div>
      </div>
    </div>
  );
}
