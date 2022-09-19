import Link from "next/link";
import Navbar from "../core/navbar.js";
const ProductionSupportHero = () => {
  return (
    <div className="relative bg-[#FBF8FB] overflow-x-hidden overflow-y-hidden">
      <div className="relative pb-16 sm:pb-64">
        <Navbar />
        <main className="container -mt-40">
          <div className="w-full flex justify-center items-center">
            <div className="pt-72 flex flex-col justify-center">
              <div className="inline-flex mx-auto">
                <Link href={"/services"}>
                  <div className="text-white bg-[#EC4699] hover:bg-opacity-80 py-1 px-10 rounded-tl-[24px] rounded-br-[24px] cursor-pointer transition">
                    <span className="leading-10 text-base font-medium uppercase">
                      SERVICES
                    </span>
                  </div>
                </Link>
              </div>
              <h1 className="text-4xl tracking-tight sm:leading-relaxed md:sm:leading-relaxed text-center font-bold text-unicodez-dark sm:text-5xl md:text-6xl max-w-6xl mt-5">
                <span className="block">Production Support & Maintenance </span>
              </h1>
              <div className="w-full flex flex-wrap space-x-6 gap-y-2 justify-center items-center mt-5 text-unicodez-dark sm:text-lg leading-8 sm:md:leading-10">
                <span>Better Flexibility</span>
                <span className="bg-unicodez-dark h-1.5 w-1.5 rounded-full"></span>
                <span>Prodctive Monitoring</span>
                <span className="bg-unicodez-dark h-1.5 w-1.5 rounded-full"></span>
                <span>Improved Efficiency</span>
                <span className="bg-unicodez-dark h-1.5 w-1.5 rounded-full"></span>
                <span>High Scalability</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductionSupportHero;
