import Image from "next/image";
import Link from "next/link";
export default function WhatWeOffer() {
  return (
    <section className="w-full py-24" id="services" data-aos="zoom-in">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Here’s What We Offer
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center">
            Here are our services
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 mt-20">
          {/* Custom Software Development */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#D1E6EB]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/services/custom-software-development.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Custom Software Development"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Custom Software Development
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
              We’ll create, deploy, and maintain software design specifically
              for your customers...
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/services/custom-software"}>
                <button className="button primary normal text-center cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Enterprise Solutions */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#1B1A20]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/services/enterprise-solutions.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Enterprise Solutions"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-white text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Enterprise Solutions
            </h3>
            <p className="text-white text-opacity-70 text-left text-base max-w-sm mt-5 leading-7">
              Enterprise applications and software to improve your business
              processes&apos; efficiency, ease, and speed…
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/services/enterprise-software"}>
                <button className="button primary normal text-center cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Mobile Applications */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#F0F4FF]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/services/mobile-applications.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Mobile Applications"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Mobile Applications
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
              Software Development & Global IT consulting and solutions
              <br />
              <br />
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/services/mobile-applications"}>
                <button className="button primary normal text-center cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Cloud Solutions */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#FFEFE0]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/services/cloud-solutions.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Cloud Solutions"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Cloud Solutions
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
              Cloud computing services for your business’ hybrid infrastructure,
              collocation, backups, full migrations, and more
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/services/cloud-solutions"}>
                <button className="button primary normal text-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Blockchain */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#1B1A20]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/services/blockchain-tech.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Blockchain"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-white text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Blockchain
            </h3>
            <p className="text-white text-opacity-70 text-left text-base max-w-sm mt-5 leading-7">
              We create Blockchain products and offer consultation services.
              <br />
              <br />
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/services/blockchain"}>
                <button className="button primary normal text-center cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Product Support & Maintenance */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#FFEFE0]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/services/product-support-maintenance.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Product Support & Maintenance"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Product Support & Maintenance
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
              Tailored Product Support and Maintenance services for your
              business.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/services/production-support-maintenance"}>
                <button className="button primary normal text-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
