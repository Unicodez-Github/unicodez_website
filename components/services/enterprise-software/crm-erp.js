import Image from "next/image";
export default function CrmErp() {
  return (
    <section className="py-24 mt-20 bg-[#FFFCEB]" data-aos="fade-up">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/crm-erp.png"}
                alt="CRM & ERP Software Development with Unicodez"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
          <div className="lg:mt-10">
            <h2 className="section-title">CRM & ERP</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              CRM (Customer Relationship Management) and ERP (Enterprise
              Resource Planning) software are important tools for marketing,
              sales, and customer service success.{" "}
            </p>
            <div className="inline-flex mt-10">
              <button className="button primary normal text-center !px-16">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
