import Image from "next/image";
import Link from "next/link";
import Study from '../../public/images/clients/studyTwo/2.png';
export default function SecurePayment() {
    return (
        <section className="container py-20 relative" data-aos="zoom-in">
            <div className="w-full flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:flex lg:justify-end mt-10">
                    <div className="relative h-full w-full">
                        <Image
                            src={Study}
                            alt=""
                            layout="responsive"
                            height={700}
                            width={700}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col text-unicodez-dark">
                        <h2 className="section-title leading-snug">
                            <span className="block">Safe and Secure Payments</span>{" "}
                            {/* <span className="block mt-5">We Have The Skills </span> */}
                        </h2>
                        <p className="mt-10 text-md leading-10 text-unicodez-text max-w-2xl">
                            The client was eager to have a website that offered secure payment options to their customers. To ensure the website and payment gateway were secure and reliable, we integrated a multi-factor authentication system for customer authentication and verification.
                            <br />
                            We also provided an encrypted data transmission protocol for all sensitive information to be transmitted securely and safely. In addition, we built a fraud detection system to identify and prevent fraudulent transactions. As a result, customers feel safe and secure while making payments.

                        </p>
                        <div className="inline-flex mt-10">
                            <Link href={"/contact"}>
                                <button className="button primary normal text-center !px-16">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
