import Image from "next/image";
import Link from "next/link";
export default function SmartMobileApps() {
  return (
    <section className="py-24 mt-20 bg-[#F5F9FF]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/smart-mobile-apps.png"}
                alt="Build Smart Mobile Apps with Unicodez"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">Smarter Mobile Apps</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Artificial intelligence in our apps allows our apps to store user
              data as it analyzes behavior and interaction. In simple terms?
              Easy operation for your customers and users.
            </p>
            <div className="inline-flex mt-10">
              <Link href={"/contact"}>
                <button className="button primary normal text-center !px-16">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
