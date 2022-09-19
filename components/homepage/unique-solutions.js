import Image from "next/image";
export default function UniqueSolutions() {
  return (
    <section className="w-full bg-white overflow-x-hidden" data-aos="fade-up">
      {/* <div className="w-full flex justify-center -mt-20">
        <div className="w-20 h-20 ml-20 z-50 relative">
          <Image
            src={"/images/icons/line-curve.svg"}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div> */}
      <div className="container py-24">
        <div className="w-full bg-black rounded-[26px] p-10 lg:p-20 relative">
          <div className="absolute h-full top-0 z-10 hidden lg:block">
            <div className="w-96 h-full">
              <Image
                src={"/images/space-bg.png"}
                alt="We Create Unique Solutions for Businesses"
                layout="fill"
                objectFit="cover"
                className="-mt-20 rounded-t-xl"
              />
            </div>
          </div>
          <div className="absolute w-96 h-full bottom-0 hidden lg:block">
            <div className="w-96 h-full">
              <div className="bg-black w-full h-full"></div>
            </div>
          </div>
          <div className="w-full flex lg:justify-end">
            <div className="w-auto lg:mr-10 2xl:mr-0 lg:w-1/3"></div>
            <div className="flex-1 flex flex-col lg:px-10">
              <h2 className="section-title text-white">
                <span className="block">We Create Unique </span>{" "}
                <span className="block mt-3 lg:mt-4">Solutions for Businesses</span>
              </h2>
              <p className="text-lg text-white leading-10 text-opacity-70 mt-7 max-w-2xl">
                Your business and customers are unique and your software should
                be too. We pay heavy attention to detail and focus on
                efficiency, uniqueness, and affordability.
              </p>
              <div className="inline-flex mt-10">
                <a
                  href="https://unistack.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="button primary normal text-center">
                    Request Free Budget Quote
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -top-12">
            <div className="w-full flex justify-end">
              <div className="w-20 h-28 z-50 relative">
                <Image
                  src={"/images/icons/yellow-polygon.svg"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
