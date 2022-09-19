import Image from "next/image";
export default function TestimonialBlock() {
  return (
    <div className="w-full mt-20">
      <div className="w-full p-16 bg-[#D1E6EB] rounded-[20px]">
        <div className="w-full flex flex-wrap gap-10">
          <div className="w-full lg:w-2/3">
            <h4 className="section-title text-left leading-10">LoopBack</h4>
            <p className="mt-11 text-unicodez-text text-lg font-medium leading-10 max-w-xl">
              “We help our clients reimagine, restructure and renew business
              functions to create agile and resilient organizations.”
            </p>
            <p className="mt-12 text-unicodez-dark font-medium">
              Elsie-Rose Kane
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full h-full relative">
              <Image
                src={"/images/testimonials/testimonial-loopback.png"}
                alt=""
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
