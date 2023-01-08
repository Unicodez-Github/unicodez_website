import Link from "next/link";

export default function Brief() {
    return (
        <section className="py-12  bg-[#F9F9FC] aos-animate" data-aos="fade-up">
            <div className="container">
                <div className="w-full.">
                    <p className="mt-5 text-unicodez-text text-md text-center leading-[40px]">
                        Now, the web app can showcase the different featured products. The application would also send emails to the client automatically and convey the featured products along with the seasonal discounts and product offers.
                    </p>
                    <p className="mt-3 text-unicodez-text text-md text-center leading-[40px]">

                        The web app has helped the client to boost their worldwide sales volumes as it provides
                        personalized service to their clients.
                    </p>
                    <p className="mt-3 text-unicodez-text text-md text-center leading-[40px]">
                        This company decided to outsource Unicodez versus hiring an internal Software Developer. Here are some of the Advantages of Outsourcing Software Development
                    </p>

                    <span className="block mt-2 text-center text-unicodez-dark sm:text-md">
                        <Link href="/contact">
                            <button className="button primary normal">Contact Us</button>
                        </Link>
                    </span>
                </div>
            </div>
        </section >
    );
}
