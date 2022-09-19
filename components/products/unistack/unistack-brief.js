import Image from "next/image";
export default function UnistackBrief() {
  return (
    <section className="py-24" data-aos="fade-up">
      <div className="container">
        <div className="w-full">
          <p className="mt-10 text-unicodez-text text-lg leading-[40px] text-center max-w-6xl mx-auto">
            Unistack is a highly customizable human resource management platform
            that suits every business need. Our platform offers customizable
            database tools to smoothly run the internal operations of a company.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-36">
          <div>
            <h2 className="section-title">Create An App Through A Form</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Create customized forms according to your business’ needs. You can
              create and manage a database for each app and even have separate
              dashboards for each app or form.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/create-an-app.png"}
                alt="Create An App Through A Form"
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
