import Image from "next/image";
import Link from "next/link";
import Navbar from "../core/navbar.js";
import AboutHeroImage from "../../public/images/about-hero-art.png";
import HeroStats from "../about/hero-stats";

const AboutHero = () => {
  return (
    <div className="relative bg-white overflow-x-hidden overflow-y-hidden">
      <div className="relative pb-16 sm:pb-64">
        <div
          className="hidden lg:block sm:absolute top-0 -bottom-60  w-1/2 h-full right-0 justify-end bg-[#F0F4FF]"
          aria-hidden="true"
        >
          <div className="relative w-full h-full p-48">
            <Image
              src={AboutHeroImage}
              alt=""
              layout="responsive"
              placeholder="blur"
              blurDataURL="/images/about-hero-art-min.png"
            />
          </div>
        </div>
        <Navbar />
        <main className="container -mt-40">
          <div className="grid lg:grid-cols-2">
            <div className="text-left pt-72">
              <div className="inline-flex">
                <div className="text-white bg-[#EC4699] py-1 px-5 rounded-r-[24px] rounded-tl-[24px]">
                  <span className="leading-10 text-base font-medium uppercase">
                    Our Story
                  </span>
                </div>
              </div>
              <h1 className="text-4xl tracking-tight sm:leading-relaxed md:sm:leading-relaxed font-bold text-unicodez-dark sm:text-5xl md:text-6xl mt-5">
                <span className="block">Who Are We?</span>
              </h1>
              <p className="mt-5 max-w-md text-base font-medium text-unicodez-dark sm:text-lg md:mt-5 md:text-xl md:max-w-lg leading-8 sm:md:leading-10">
                We are a young software solutions company filled with creative
                and innovative ideas. We offer dynamic, flexible, and simple
                solutions to the most complex problems.
              </p>
              <div className="mt-5 max-w-md sm:flex justify-center sm:justify-start md:mt-8">
                <div className="rounded-md shadow">
                  <Link href={"#beliefs"}>
                    <span className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-unicodez-blue hover:bg-opacity-90 md:py-4 md:px-14 cursor-pointer">
                      <span>Read More</span>
                      <svg
                        width="16"
                        height="25"
                        viewBox="0 0 16 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-5"
                      >
                        <path
                          d="M8 1V17"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 11L8 17L15 11"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 18L8 24L15 18"
                          stroke="white"
                          strokeOpacity="0.5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-bounce"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <HeroStats />
    </div>
  );
};

export default AboutHero;
