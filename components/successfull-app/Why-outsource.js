import Link from "next/link";

export default function WhyOutsource() {
    return (
        <section className="w-full bg-unicodez-blue pt-20 pb-20" data-aos="fade-up">
            <div className="container">
                <div className="flex flex-col justify-center items-center text-white space-y-7">
                    <h2 className="section-title text-center leading-snug">
                        Why You Should Outsource Your <br />Software Development
                    </h2>
                    <p className="mt-4 text-white text-md font-medium text-center max-w-5xl leading-[40px]">
                        In conclusion, companies can benefit from outsourcing software development in a number of ways. Outsourcing can provide cost savings, flexibility, access to expertise, scalability, and time savings. Additionally, outsourcing can help companies quickly develop new software and applications. For these reasons, companies should consider outsourcing software development instead of hiring internally.
                    </p>
                    <span className="block mt-5 text-center bg-unicodez-blueDark sm:text-md">
                        <Link href="/contact">
                        <button className="button dark normal">Contact Us</button>
                        </Link>
                    </span>
                </div>
            </div>
        </section>
    );
}
