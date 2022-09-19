import Link from "next/link";

export default function GetStartedServices() {
  return (
    <section className="w-full max-w-7xl mx-auto py-24" data-aos="fade-up">
      <div className="container bg-[#1B1A20] p-20 rounded-[20px]">
        <div className="flex flex-col justify-center items-center text-unicodez-dark space-y-7">
          <h2 className="section-title text-white text-center leading-snug">
            Want To Get Started?
          </h2>
          <p className="mt-4 text-white text-opacity-70 text-lg text-center max-w-5xl leading-[40px]">
            Are you ready to get started on this journey with us? Click on the
            button to speak to our consultant.
          </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-8 pt-10">
            <Link href={"/contact"}>
              <button className="button primary py-5 text-center w-full max-w-xs">
                Speak To A Consultant
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
