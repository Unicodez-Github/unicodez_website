import Image from "next/image";

export default function OurBelief() {
  return (
    <section className="w-full py-32" id="beliefs" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Our 6 Guiding Beliefs
          </h2>
        </div>
        {/* <div className="w-full flex justify-end -mt-20">
          <div className="w-20 h-20 ml-20 z-50 relative">
            <Image
              src={"/images/icons/line-curve.svg"}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div> */}
        <div className="w-full mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/icons/honesty.svg"
                alt="Honesty"
                width={108}
                height={108}
              />
              <h3 className="text-2xl text-unicodez-dark font-bold mt-8">
                Honesty
              </h3>
              <p className="text-base text-unicodez-text text-opacity-70 max-w-sm mt-5">
                Honesty with ourselves, our craft, our community, and you, our
                client.
              </p>
            </div>
            <div className="flex flex-col items-center text-center lg:mt-12">
              <Image
                src="/images/icons/equity.svg"
                alt="Building Business Equity"
                width={108}
                height={108}
              />
              <h3 className="text-2xl text-unicodez-dark font-bold mt-8">
                Building Business Equity
              </h3>
              <p className="text-base text-unicodez-text text-opacity-70 max-w-sm mt-5">
                We’re invested in creating valuable and equitable business
                through strategic planning.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/icons/honoring.svg"
                alt="Honoring Our Word"
                width={108}
                height={108}
              />
              <h3 className="text-2xl text-unicodez-dark font-bold mt-8">
                Honoring Our Word
              </h3>
              <p className="text-base text-unicodez-text text-opacity-70 max-w-sm mt-5">
                We do what we say we will- when we say we will. Our prices and
                terms are fixed and transparent.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/icons/financial.svg"
                alt="Financial Integrity"
                width={108}
                height={108}
              />
              <h3 className="text-2xl text-unicodez-dark font-bold mt-8">
                Financial Integrity
              </h3>
              <p className="text-base text-unicodez-text text-opacity-70 max-w-sm mt-5">
                Transparent financial reporting, record-keeping, and
                conservative forecasting.
              </p>
            </div>
            <div className="flex flex-col items-center text-center lg:mt-12">
              <Image
                src="/images/icons/loyalty.svg"
                alt="Loyalty To Our People"
                width={108}
                height={108}
              />
              <h3 className="text-2xl text-unicodez-dark font-bold mt-8">
                Loyalty To Our People
              </h3>
              <p className="text-base text-unicodez-text text-opacity-70 max-w-sm mt-5">
                We value, offer, and reward loyalty. We are dedicated to our
                team and to you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/icons/leadership.svg"
                alt="Leadership From Within"
                width={108}
                height={108}
              />
              <h3 className="text-2xl text-unicodez-dark font-bold mt-8">
                Leadership From Within
              </h3>
              <p className="text-base text-unicodez-text text-opacity-70 max-w-sm mt-5">
                We continuously support our team by providing leadership
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start mt-10 lg:-ml-20">
          <div className="block w-20 h-20 z-50 relative">
            <Image
              src={"/images/icons/yellow-polygon-left.svg"}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
