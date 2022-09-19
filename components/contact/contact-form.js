import Script from "next/script";

export default function ContactForm() {
  return (
    <section className="w-full py-24" data-aod="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#FFF2CD] p-10 rounded-3xl">
             <Script src="https://forms.marketing360.com/load.js?id=60ba8ca707fa9323886a8fa6" />
            {/* <h2 className="section-title font-medium text-lg lg:text-3xl lg:leading-snug max-w-md">
              Leave us a little info, and we&lsquo;ll be in touch.
            </h2>
            <div className="space-y-10 mt-16">
              <input
                type="text"
                className="w-full rounded bg-white text-unicodez-dark text-base py-4 px-7"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                className="w-full rounded bg-white text-unicodez-dark text-base py-4 px-7"
                placeholder="Enter Your Email"
              />
              <input
                type="text"
                className="w-full rounded bg-white text-unicodez-dark text-base py-4 px-7"
                placeholder="Enter Your Phone Number"
              />
              <textarea
                rows={10}
                className="w-full rounded bg-white text-unicodez-dark text-base py-4 px-7 resize-none"
                placeholder="How can we help?"
              />
              <div className="mb-10">
                <button className="button primary normal">Submit</button>
              </div> */}

          </div>
          <div className="bg-[#D1E6EB] p-10 rounded-3xl">
            <h2 className="section-title font-medium text-lg lg:text-3xl leading-snug max-w-md">
              Plan A Visit
            </h2>
            <div className="mt-10">
              <h4 className="text-unicodez-dark font-bold text-lg">
                Working hours:
              </h4>
              <div className="flex items-center space-x-8 text-lg text-unicodez-dark mt-4">
                <span>Monday - Friday</span>
                <span>(9 am to 7 pm EST)</span>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7557670560195!2d-75.5533080843079!3d39.74513670413234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd6a9dfc32a9%3A0xab073c5880e220d7!2s831%20N%20Tatnall%20St%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sng!4v1660511553349!5m2!1sen!2sng"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[20px]"
              />
            </div>
            <div className="grid grid-cols-2 mt-10">
              <div>
                <h4 className="text-unicodez-dark font-bold text-lg uppercase">
                  Headquarters
                </h4>
                <div className="space-y-2.5 text-unicodez-dark text-lg mt-5">
                  <p>USA</p>
                  <p>831 N Tatnall Street Wilmington,</p>
                  <p>DE 19801 USA</p>
                </div>
              </div>
              <div>
                <h4 className="text-unicodez-dark font-bold text-lg uppercase">
                  India Office
                </h4>
                <div className="space-y-2.5 text-unicodez-dark text-lg mt-5">
                  <p>BHOPAL</p>
                  <p>Hall no. 9 & 10, 6th Floor,</p>
                  <p>Regal Treasure,</p>
                  <p>462041</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
