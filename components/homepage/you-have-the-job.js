import Image from "next/image";
import Link from "next/link";
import FlagsGrid from "../../public/images/flags-grid.png";

export default function YouHaveTheJob() {
  return (
    <section className="container py-40 relative" data-aos="zoom-in">
      <div className="w-full flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col text-unicodez-dark">
            <h2 className="section-title leading-snug">
              <span className="block">You Have The Job,</span>{" "}
              <span className="block mt-5">We Have The Skills </span>
            </h2>
            <p className="mt-10 text-xl leading-10 text-unicodez-text max-w-2xl">
              Our team of experts and professionals has the skills needed to get
              the job done. We’ll provide clarity for your business&apos;
              digital transformation and ensure you stand out from the
              competition.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/contact"}>
                <button className="button primary normal text-center !px-16">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:flex lg:justify-end mt-10">
          <div className="relative h-full w-full">
            <Image
              src={FlagsGrid}
              alt=""
              layout="responsive"
              height={900}
              width={1000}
            />
          </div>
        </div>
        {/* Commented out artistic curve lines */}
        {/* <div className="absolute bottom-0 lg:bottom-20">
          <div className="block w-20 h-20 ml-20 z-50 relative">
            <Image
              src={"/images/icons/line-curve-alt.svg"}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
