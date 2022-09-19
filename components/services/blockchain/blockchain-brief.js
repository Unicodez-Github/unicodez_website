import Image from "next/image";
export default function BlockchainBrief() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              The very nature of blockchain technology is rooted in traceable,
              transparent, and safe records. This is great news for business
              owners like you! Blockchain technology can protect your business
              from loopholes that were previously exploited by scammers.
            </p>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Unicodez team includes experts in blockchain solutions such as
              data storage, data distribution, and data reading. Blockchain
              technology increases efficiency, decreases costs, and ensures
              security. It does this without compromising the security of your
              data and information.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/services/blockchain.png"}
                alt="Blockchain Technology"
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
