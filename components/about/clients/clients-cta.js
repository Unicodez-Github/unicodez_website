export default function ClientsCta() {
  return (
    <section className="w-full bg-[#FFFCEB] pt-40 pb-96" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark space-y-7">
          <h2 className="section-title text-center leading-snug">
            Loved by our Clients
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center max-w-3xl leading-[40px]">
            Stories of clients-turned-partners. Over the years, Unicodez has
            forged meaningful relationships with clients whose businesses we’ve
            transformed.
          </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-8 pt-10">
            <button className="button primary py-5 text-center w-full max-w-xs">
              View Our Testimonials
            </button>
            <button className="button dark py-5 px-12 w-full max-w-xs">
              Book Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
