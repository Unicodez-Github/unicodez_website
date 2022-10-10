import Image from "next/image";
export default function TopNotchApps() {
  return (
    <section className="py-10 md:py-24 mt-5 md:mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">Top-Notch Apps</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              High-performing apps with user-friendly interfaces, intuitive UX,
              and unique features designed specifically for your business and
              customers.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/top-notch-apps.png"}
                alt="Top Notch Application Development"
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
