import Image from "next/image";
export default function IncreaseCustomer() {
    return (
        <section className="w-full bg-white overflow-x-hidden" data-aos="fade-up">
            <div className="container py-24">
                <div className="w-full bg-black rounded-[26px] p-10 lg:p-20 relative">

                    <div className="w-full lg:justify-center text-center">
                        {/* <div className="flex-1 flex flex-col lg:px-10"> */}
                        <h2 className="section-title text-white">
                            <span className="block">Increase Customer Satisfaction </span>{" "}
                            {/* <span className="block mt-3 lg:mt-4">Solutions for Businesses</span> */}
                        </h2>
                        <p className="text-md text-white leading-10 text-opacity-70 mt-10">
                            The client was satisfied with the end result, as the website was user-friendly and secure. They were very pleased with the increased customer satisfaction, more efficient payment processing, and improved customer service. The client was also able to save time and money by having a secure and reliable website with payment options that are favorable to customers.
                        </p>
                        <p className="text-md text-white leading-10 text-opacity-70 mt-10">
                            We are proud of the work we did for the client and our ability to provide a solution that met their needs. We are confident that the website will continue to function optimally and help the client increase their business volume.
                        </p>
                        <div className="inline-flex mt-10">
                            <a
                                href="https://unicodez.com/contact"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <button className="button primary normal text-center">
                                    Contact Us
                                </button>
                            </a>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="absolute -right-10 -top-12">
                        <div className="w-full flex justify-end">
                            <div className="w-20 h-28 z-50 relative">
                                <Image
                                    src={"/images/icons/yellow-polygon.svg"}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
