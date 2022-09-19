import Image from "next/image";
import Link from "next/link";
import Navbar from "../core/navbar.js";
import ServicesHeroImage from "../../public/images/services/services-hero-img.png";

const ServicesHero = () => {
  return (
    <div className="relative bg-[#F9FDFF] overflow-x-hidden overflow-y-hidden">
      <div className="relative pb-16 sm:pb-64">
        <div
          className="hidden lg:block sm:absolute top-0 -bottom-60  w-1/2 h-full right-0 justify-end"
          aria-hidden="true"
        >
          <div className="relative w-full h-full p-48">
            <Image
              src={ServicesHeroImage}
              alt=""
              layout="responsive"
            />
          </div>
          
        </div>
        <Navbar />
        <main className="container -mt-40">
          <div className="grid lg:grid-cols-2">
            <div className="text-left pt-72">
              <h1 className="text-4xl tracking-tight sm:leading-relaxed md:sm:leading-relaxed font-bold text-unicodez-dark sm:text-5xl md:text-6xl mt-5">
                <span className="block">Just How High Do You Want to Fly?</span>
              </h1>
              <p className="mt-5 max-w-md text-base font-medium text-unicodez-dark sm:text-lg md:mt-5 md:text-xl md:max-w-lg leading-8 sm:md:leading-10">
                At Unicodez, we see ourselves as the lead architects in your
                business plan. You’ve got the dream and we’ve got the tools and
                skills to make it a reality.
              </p>
              <div className="mt-5 max-w-md sm:flex justify-center sm:justify-start md:mt-8">
                <div className="rounded-md shadow">
                <Link href={"#services"}>
                  <span
                    className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-unicodez-blue hover:bg-opacity-90 md:py-4 md:px-14 cursor-pointer"
                  >
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
    </div>
  );
};

export default ServicesHero;
