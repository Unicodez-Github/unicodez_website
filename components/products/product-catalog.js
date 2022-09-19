import Image from "next/image";
import Link from "next/link";
export default function ProductCatalog() {
  return (
    <section className="w-full py-24" id="products" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            View Our Product Catalog
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center">
            Here are our services
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 mt-20">
          {/* Meetchess */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#FFF2CD]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/products/meetchess.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Meetchess"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Meetchess
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
              Unicode presents “Meetchess” the first of its kind, global video
              and audio chess platform.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/products/meetchess"}>
                <button className="button primary normal text-center cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Meetup */}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#1B1A20]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/products/meetup.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Meetup"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-white text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Meetup
            </h3>
            <p className="text-white text-opacity-70 text-left text-base max-w-sm mt-5 leading-7">
              Meetup is a video call and chat platform for friends, workspaces
              and organizations.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"#"}>
                <button className="button primary normal text-center cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* Unistack*/}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#D1E6EB]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/products/unistack.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Unistack"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              Unistack
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
              Unistack is a highly customizable human resource management
              platform that suits every business need.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/products/unistack"}>
                <button className="button primary normal text-center cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* InvoiceX*/}
          <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#FFEFE0]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/products/invoicex.png"}
                layout="responsive"
                objectFit="cover"
                alt={"InvoiceX"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
              InvoiceX
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
              This is an invoice generation platform for business owners to
              create invoices easily.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"#"}>
                <button className="button primary normal text-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
           {/* SmartCheckOut*/}
           <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#F0F4FF]">
            <div className="relative w-full h-full max-h-[240px]">
              <Image
                src={"/images/products/smartcheckout.png"}
                layout="responsive"
                objectFit="cover"
                alt={"Smart Checkout"}
                width={"100%"}
                height={"60%"}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
            SmartCheckOut
            </h3>
            <p className="text-left text-base max-w-sm mt-5 leading-7 text-unicodez-text">
            Smart Checkout is designed to let you enjoy the speed of online
              shopping without any of the uncertainty it offers.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/products/smartcheckout"}>
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
