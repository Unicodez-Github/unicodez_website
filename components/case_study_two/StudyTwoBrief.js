import Link from "next/link";

export default function StudyTwoBrief() {
    return (
        <section className="py-12  bg-[#F9F9FC] aos-animate" data-aos="fade-up">
            <div className="container">
                <div className="w-full.">
                    <p className="mt-5 text-unicodez-text text-md text-center leading-[40px]">
                        With an increase in business volume, the client was determined to optimize their services. And for that, they wanted a website with payment options favorable to customers. It was challenging for the client to find a solution because they were unsuccessful in finding a partner with the right expertise for the task.
                    </p>
                    <p className="mt-3 text-unicodez-text text-md text-center leading-[40px]">

                        Our well-experienced team of web developers, project managers, and business management specialists who carried decades of cumulative experience handling similar projects. The client was provided with the following solution -

                    </p>
                    <p className="mt-3 text-unicodez-text text-md text-center leading-[40px]">
                        •	Unicodez developed and customized a web portal to the client&#39;s specifications allowing necessary guidance as well as channelizing payments. <br />
                        •	We designed the portal to support maximum interaction without lag in performance.

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
