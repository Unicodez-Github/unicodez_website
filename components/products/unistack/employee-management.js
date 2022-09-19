import Image from "next/image";
export default function EmployeeManagement() {
  return (
    <section className="py-24 mt-20 bg-[#F0F4FF]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/employee-management.png"}
                alt="Employee Management Systems"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title">Employee Management Systems</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
            Manage staff hiring, attendance, and productivity with a single system.
            </p>
            <div className="inline-flex mt-10">
              <button className="button dark normal text-center !px-16">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
