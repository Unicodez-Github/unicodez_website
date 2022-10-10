import Image from "next/image";
import Link from "next/link";
import HotAirBalloonImg from "../../public/images/hot-air-balloon-art.png";

export default function OneStopSolution() {
  return (
    <section
      className="container py-20 md:py-40 relative"
      id="onestopsolution"
      data-aos="zoom-in"
    >
      <div className="w-full flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col text-unicodez-dark">
            <h2 className="section-title leading-snug">Your One-Stop Solution</h2>
            <p className="mt-6 text-2xl font-semibold leading-snug">
              Simple solutions for the most complex problems
            </p>
            <p className="mt-10 text-xl leading-10 text-unicodez-text ">
              Unicodez is a team of diverse software-development & global-IT
              professionals. We provide software consulting services and
              solutions for businesses and organizations all over the world.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/services"}>
                <button className="button primary normal text-center !px-16">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:flex lg:justify-end mt-10 lg:-mt-80">
          <div className="grid lg:grid-cols-3">
            <div className="relative min-h-[24rem] lg:min-w-[30rem] lg:ml-20">
              <Image
                src={HotAirBalloonImg}
                alt=""
                layout="fill"
                height={700}
                width={500}
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/images/hot-air-balloon-art-min.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
