import Image from "next/image";
export default function SmartcheckoutBrief() {
  return (
    <section className="py-10 md:py-24 mt-5 md:mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              You probably love online shopping for the speed, privacy, and
              anti-socialness it offers, but hate how it always seems to be a
              bit of a gamble. You have to worry about if your delivery services
              will deliver on time or if your chosen item is actually what it
              looked like on your screen.
            </p>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Smart Checkout is designed to let you enjoy the speed of online
              shopping without any of the uncertainty it offers. It is an
              application that will help prevent long queues at stores and
              different retail outlets. Smart Checkout is a self-scan and
              self-cart-checkout process.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/smartcheckout-brief.png"}
                alt="Smart"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full relative my-20">
            <Image
              src={"/images/products/smartcheckout-process.png"}
              alt="Smart checkout"
              layout="responsive"
              objectFit="contain"
              width={"100%"}
              height={"30%"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
