import Link from "next/link";

export default function GetStartedCta() {
  return (
    <section className="w-full bg-[#E3F7FF] pt-40 pb-96" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark space-y-7">
          <h2 className="section-title text-center leading-snug">
            Get Started With Unicodez Today
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center max-w-3xl leading-[40px]">
            Unicodez is a team of diverse software-development & global-IT
            professionals. We provide software consulting services and solutions
            for businesses and organizations all over the world.
          </p>
          <Link href={"/contact"}>
            <button className="button dark py-5 px-7">
              Speak to a Consultant for Free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
