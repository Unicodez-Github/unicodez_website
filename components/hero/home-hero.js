import Image from "next/image";
import Link from "next/link";
import Navbar from "../core/navbar.js";
import HomeHeroImage from "../../public/images/homepage-hero-art.svg";

const HomeHero = () => {
  return (
    <div className="relative bg-[#FBF8FB] overflow-x-hidden overflow-y-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div
          className="hidden lg:block sm:absolute top-0 mt-16 -bottom-60 min-w-[500px] min-h-[700px] w-auto right-0 justify-end"
          aria-hidden="true"
        >
          <Link href={"/contact"}>
          <div className="relative w-full h-full container cursor-pointer">
            <Image
              src={HomeHeroImage}
              alt=""
              layout="fill"
              className="right-full"
              placeholder="blur"
              blurDataURL="/images/homepage-hero-art-min.png"
            />
          </div>
          </Link>
        </div>
        <Navbar />
        <main className="container mt-16 sm:mt-24">
          <div className="text-left">
            <h1 className="text-4xl tracking-tight sm:leading-relaxed md:sm:leading-relaxed font-bold text-unicodez-dark sm:text-5xl md:text-6xl">
              <span className="block">Software</span>
              <span className="block">Solutions for</span>
              <span className="block">Business Growth</span>
            </h1>
            <p className="my-6 md:mt-2 max-w-md text-base font-medium text-unicodez-dark sm:text-lg  md:max-w-lg sm:md:leading-10">
              <span className="relative bg-unicodez-dark text-white p-4">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap">
                 Unicodez Starts with <span className="animate-pulse text-unicodez-pink">yoU!</span>
                </span>
                {/* <span className="animated-cursor absolute -bottom-0 left-0 -top-1 inline-block bg-[#FBF8FB] w-full animate-type will-change"></span> */}
              </span>
            </p>
            <p className="mt-5 max-w-md text-base font-medium text-unicodez-dark sm:text-lg md:mt-5 md:text-xl md:max-w-lg sm:md:leading-10">
              A combination of software artistry and business genius.
            </p>
            <div className="mt-5 max-w-md sm:flex justify-center sm:justify-start md:mt-8">
              <div className="rounded-md shadow max-w-xs">
                <Link href={"#onestopsolution"}>
                  <span className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-unicodez-blue hover:bg-opacity-90 md:py-4 md:px-14 cursor-pointer">
                    <span>Learn More</span>
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
        </main>
      </div>
    </div>
  );
};

export default HomeHero;
