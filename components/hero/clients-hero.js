import Navbar from "../core/navbar.js";
const ClientsHero = () => {
  return (
    <div className="relative bg-[#F0F4FF] overflow-x-hidden overflow-y-hidden">
      <div className="relative pb-16 sm:pb-64">
        <Navbar />
        <main className="container -mt-40">
          <div className="w-full flex justify-center items-center">
            <div className="pt-72 flex flex-col justify-center">
              <div className="inline-flex mx-auto">
                <div className="text-white bg-[#EC4699] py-1 px-5 rounded-tl-[24px] rounded-br-[24px]">
                  <span className="leading-10 text-base font-medium uppercase">
                    OUR CLIENTS
                  </span>
                </div>
              </div>
              <h1 className="text-4xl tracking-tight sm:leading-relaxed md:sm:leading-relaxed text-center font-bold text-unicodez-dark sm:text-5xl md:text-6xl mt-5">
                <span className="block">Clients</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-center font-medium text-unicodez-dark sm:text-lg md:mt-5 md:text-xl md:max-w-3xl leading-8 sm:md:leading-10">
                We are dedicated to you. Unicodez views every client as an
                important and unique part of our growth as a company.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientsHero;
