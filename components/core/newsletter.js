import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="w-full z-5 relative" data-aos="fade-up">
      <div className="container relative z-10">
        <div className="w-full bg-unicodez-gray rounded-[25px] relative overflow-hidden">
          <div className="absolute w-full top-0">
            <div className="relative h-full w-full">
              <Image
                src={"/images/newsletter-bg.svg"}
                alt=""
                width="100%"
                height="25%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-10 py-28 px-10 lg:px-32 relative">
            <div className="w-2/3">
              <h3 className="text-4xl lg:text-6xl text-white font-bold leading-[65px]">
                <span className="inline lg:block">Subscribe to our</span>{" "}
                <span className="inline lg:block">Newsletter</span>
              </h3>
            </div>
            <div className="flex-1">
              <div className="w-full flex flex-wrap items-center gap-4">
                {/* <input
                  type="text"
                  className="py-4 px-7 rounded-[7px] w-full lg:w-2/3"
                  placeholder="Enter your email"
                /> */}
                <a
                  href="https://www.linkedin.com/company/unicodez-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button primary normal text-center">
                    Follow us on Linkedin
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FBF8FB] h-40 w-full absolute bottom-4"></div>
    </section>
  );
};

export default Newsletter;
