import Image from "next/image";
import Navbar from "../core/navbar.js";
import ContactHeroImage from "../../public/images/call-group.png";

const ContactHero = () => {
  return (
    <div className="relative bg-[#F9FDFF] overflow-x-hidden overflow-y-hidden">
      <div className="relative pb-16 sm:pb-40">
        <div
          className="hidden lg:block sm:absolute top-0 -bottom-60  w-1/2 h-full right-0 justify-end"
          aria-hidden="true"
        >
          <div className="relative w-full h-full p-32 mt-10">
            <Image
              src={ContactHeroImage}
              alt=""
              layout="intrinsic"
              height="400"
              width="400"
            />
          </div>
        </div>
        <Navbar />
        <main className="container -mt-40">
          <div className="grid lg:grid-cols-2">
            <div className="text-left pt-48 lg:pt-72">
              <h1 className="text-4xl tracking-tight sm:leading-relaxed md:sm:leading-relaxed font-bold text-unicodez-dark sm:text-5xl md:text-5xl mt-5">
                <span className="block">We’d Love To Hear From You</span>
              </h1>
              <span className="block mt-5 text-unicodez-dark sm:text-lg">
                Want A Chat? Have A Question? Want A Free Quote?
              </span>
              <div className="mt-5 max-w-md text-base font-medium text-unicodez-dark sm:text-lg md:mt-5 md:text-xl md:max-w-lg leading-8 sm:md:leading-10">
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+1 254 677 8119" className="inline-flex items-center space-x-6 text-base text-unicodez-dark hover:text-unicodez-blue">
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        className="h-8 w-8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33 17.875H30.25C30.2489 16.7813 29.814 15.7327 29.0406 14.9594C28.2673 14.186 27.2187 13.7511 26.125 13.75V11C27.9477 11.0022 29.6951 11.7272 30.9839 13.0161C32.2728 14.3049 32.9978 16.0523 33 17.875Z"
                          fill="currentColor"
                        />
                        <path
                          d="M38.4987 17.875H35.7487C35.7458 15.3232 34.7308 12.8767 32.9264 11.0723C31.122 9.2679 28.6755 8.25291 26.1237 8.25V5.5C29.4046 5.50364 32.5501 6.8086 34.8701 9.12857C37.1901 11.4485 38.495 14.5941 38.4987 17.875ZM27.9566 29.5377L31.0366 26.4577C31.4488 26.0454 31.973 25.763 32.5442 25.6457C33.1154 25.5284 33.7085 25.5813 34.2499 25.7977L38.0009 27.2992C38.5538 27.5205 39.0277 27.9022 39.3615 28.3953C39.6953 28.8885 39.8737 29.4703 39.8737 30.0657V36.8871C39.8746 37.2926 39.7929 37.6939 39.6333 38.0667C39.4738 38.4394 39.2399 38.7756 38.9459 39.0548C38.6519 39.334 38.304 39.5503 37.9235 39.6903C37.5431 39.8304 37.138 39.8914 36.7332 39.8695C10.4404 38.2332 5.13018 15.9637 4.14431 7.436C4.09656 7.01909 4.13762 6.5968 4.26478 6.1969C4.39194 5.797 4.60232 5.42855 4.88209 5.11579C5.16186 4.80303 5.50468 4.55304 5.88799 4.38227C6.2713 4.21151 6.68643 4.12382 7.10606 4.125H13.8064C14.4019 4.12498 14.9837 4.30338 15.4768 4.63718C15.9699 4.97099 16.3517 5.44489 16.5729 5.99775L18.0731 9.74875C18.2895 10.2902 18.3424 10.8832 18.2251 11.4544C18.1078 12.0256 17.8254 12.5498 17.4131 12.9621L14.3331 16.0421C14.3331 16.0421 16.0408 28.0486 27.9566 29.5377Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>+1 - 254 677 8119 </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@unicodez.com" className="inline-flex items-center space-x-6 text-base text-unicodez-dark hover:text-unicodez-blue">
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        className="h-8 w-8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.51491 8.8H37.6649C40.4149 8.8 41.8009 10.098 41.8009 12.738V31.262C41.8009 33.88 40.4149 35.2 37.6649 35.2H8.51491C5.76491 35.2 4.37891 33.88 4.37891 31.262V12.738C4.37891 10.098 5.76491 8.8 8.51491 8.8ZM23.0789 27.72L37.9069 15.554C38.4349 15.114 38.8529 14.102 38.1929 13.2C37.5549 12.298 36.3889 12.276 35.6189 12.826L23.0789 21.318L10.5609 12.826C9.79091 12.276 8.62491 12.298 7.98691 13.2C7.32691 14.102 7.74491 15.114 8.27291 15.554L23.0789 27.72Z"
                          fill="currentColor"
                        />
                      </svg>

                      <span>info@unicodez.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactHero;
