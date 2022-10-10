import Image from "next/image";
export default function BusinessDatabase() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">Business Database</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Contain important information about your business, customers, and
              employees in one single location. Unistack makes management simple
              and efficient.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/business-database.png"}
                alt="Business Database"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"55%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
