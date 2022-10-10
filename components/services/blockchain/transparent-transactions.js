import Image from "next/image";
export default function TransparentTransactions() {
  return (
    <section className="py-10 md:py-24 mt-5 md:mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:mt-10">
            <h2 className="section-title leading-snug">Transparent Transactions</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
            Blockchain keeps its ledgers in a never-ending state of forward momentum. Consequently, every node on the system has a copy of the digital ledger, making it impossible for corruption or data loss to occur.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/transparent-transactions.png"}
                alt="Transparent Transactions"
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
