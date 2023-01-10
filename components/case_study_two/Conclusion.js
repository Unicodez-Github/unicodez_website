import Link from "next/link";

export default function Conclusion() {
    return (
        <section className="w-full bg-unicodez-blue pt-20 pb-20" data-aos="fade-up">
            <div className="container">
                <div className="flex flex-col justify-center items-center text-white space-y-7">
                    <h2 className="section-title text-center leading-snug">
                        Conclusion
                    </h2>
                    <p className="mt-4 text-white text-md font-medium text-center max-w-5xl leading-[40px]">
                        Outsourcing software needs can be a great way for businesses determined to optimize their services to save money, increase efficiency, improve quality, and access specialized skills and knowledge. By outsourcing software needs, companies can free up internal resources, access the latest software development tools and technologies, and access specialized expertise and knowledge. Ultimately, outsourcing software needs can help businesses stay competitive and ensure their services are optimized .A web portal to the client’s specifications allowing necessary guidance as well as channelizing payments. We designed the portal to support maximum interaction without lag in performance.   </p>
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
