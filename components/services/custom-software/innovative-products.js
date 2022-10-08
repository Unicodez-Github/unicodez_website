import Image from "next/image";
export default function InnovativeProducts() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">
              Unique & Innovative Products
            </h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Get unique and innovative products and software built for your
              business and customers. Our solutions are custom, flexible, and
              startup friendly, making us the most trusted custom software
              development company around.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/custom-software-ballon-art.png"}
                alt="Unique & Innovative Products - Software Development"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"45%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
