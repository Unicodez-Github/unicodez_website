import Link from "next/link";

export default function ServicesCta() {
  return (
    <section className="w-full bg-[#E3F7FF] pt-40 pb-96" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark space-y-7">
          <h2 className="section-title text-center leading-snug">
            Want to chat instead?
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center max-w-5xl leading-[40px]">
            You can contact us or book a free quote with us today by clicking
            the buttons below.
          </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-8 pt-10">
            <Link href={"/contact"}>
              <button className="button primary py-5 text-center w-full max-w-xs">
                Contact Us
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="button dark py-5 px-12 w-full max-w-xs">
                Book Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
