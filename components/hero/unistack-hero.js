import Link from "next/link";
import Navbar from "../core/navbar.js";
const UnistackHero = () => {
  return (
    <div className="relative bg-[#FFFDF2] overflow-x-hidden overflow-y-hidden">
      <div className="relative pb-16 sm:pb-64">
        <Navbar />
        <main className="container -mt-40">
          <div className="w-full flex justify-center items-center">
            <div className="pt-72 flex flex-col justify-center">
              <div className="inline-flex mx-auto">
                <Link href={"/products"}>
                  <div className="text-white bg-[#EC4699] hover:bg-opacity-80 py-1 px-10 rounded-tl-[24px] rounded-br-[24px] cursor-pointer transition">
                    <span className="leading-10 text-base font-medium uppercase">
                      PRODUCTS
                    </span>
                  </div>
                </Link>
              </div>
              <h1 className="text-4xl tracking-tight sm:leading-relaxed md:sm:leading-relaxed text-center font-bold text-unicodez-dark sm:text-5xl md:text-6xl max-w-6xl mt-5">
                <span className="block">Unistack</span>
              </h1>
              <div className="w-full flex flex-wrap space-x-6 gap-y-2 justify-center items-center pt-5 lg:pt-20 lg:-mb-20 text-unicodez-dark sm:text-lg leading-8 sm:md:leading-10">
                <span>Create an app through a form</span>
                <span className="bg-unicodez-dark h-1.5 w-1.5 rounded-full"></span>
                <span>Automate payroll</span>
                <span className="bg-unicodez-dark h-1.5 w-1.5 rounded-full"></span>
                <span>Business database</span>
                <span className="bg-unicodez-dark h-1.5 w-1.5 rounded-full"></span>
                <span>Employee management systems</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UnistackHero;
