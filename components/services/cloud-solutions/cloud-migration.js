import Image from "next/image";
export default function CloudMigration() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title">Cloud Migration</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Efficient, fast, and seamless move of data center capabilities to
              a secure cloud. Enjoy reduced costs and simplify your company’s
              IT.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/cloud-migration.png"}
                alt="Cloud Migration Services"
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
