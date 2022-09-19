import Image from "next/image";
export default function EasySolutions() {
  return (
    <section className="py-24 mt-20 bg-[#F9F9FC]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/easy-solutions.png"}
                alt="Easy solutions to Integrate Into your Companys Workflow"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title">Easy solutions to Integrate Into your Company’s Workflow</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
            The key to seamless integration lies in collaboration and data exchange and that is exactly what we provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
