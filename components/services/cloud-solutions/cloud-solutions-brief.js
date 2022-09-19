import Image from "next/image";
export default function CloudSolutionsBrief() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Cloud services keep data safe and support environmental
              proactivity. Cloud computing services include services related to
              cloud servers, databases, storage, analytics, intelligence, and
              software.
            </p>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Unicodez collaborates with trusted partners to provide tailored
              cloud computing services for your business’ hybrid infrastructure,
              collocation, backups, full migrations, and more. Our services are
              designed to suit your requirements and convenience while giving
              your business the best possible qualities.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/cloud-computing.png"}
                alt="Cloud Computing Services with Unicodez"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
