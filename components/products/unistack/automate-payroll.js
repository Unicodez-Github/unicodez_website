import Image from "next/image";
export default function AutomatedPayroll() {
  return (
    <section className="py-24 mt-20 bg-[#F9F9FC]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/automate-payroll.png"}
                alt="Automate Your Payroll"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title">Automate Your Payroll</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Payday doesn’t have to tire you out. Automate your payroll system
              and even sync it with our attendance management feature. Spend
              less time sorting out payrolls and more time doing what you do
              best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
