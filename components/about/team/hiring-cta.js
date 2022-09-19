export default function HiringCta() {
  return (
    <section className="w-full bg-[#E3F7FF] pt-40 pb-96" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark space-y-7">
          <h2 className="section-title text-center leading-snug">
            Want To Join Our Team?
          </h2>
          <h4 className="text-unicodez-dark text-2xl font-medium mt-8">We&apos;re Hiring!!</h4>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center max-w-3xl leading-[40px]">
            Find your place in our world. Unicodez promotes an innovative,
            energetic, passionate, and positive work environment. Our employees,
            just like our customers, are our partners.
            <br />
            <br />
            Submit your CV to <span className="font-semibold">hr@unicodez.com</span>
          </p>
          {/* <button className="button dark py-5 px-12">
            View All Available Posiions
          </button> */}
        </div>
      </div>
    </section>
  );
}
