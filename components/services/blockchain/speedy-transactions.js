import Image from "next/image";
export default function SpeedyTransactions() {
  return (
    <section className="py-10 md:py-24 mt-5 md:mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title leading-snug">Speedy And Efficient Transactions</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
            Blockchain system processes transactions incredibly fast. Incorporate our help to increase the capacity of your network.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/speedy-blockchain-transactions.png"}
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
