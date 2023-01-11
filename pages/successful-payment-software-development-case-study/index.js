import Image from "next/image";
import ContactHeroImage from "../../public/images/clients/studyTwo/1.png";
import Navbar from "../../components/core/navbar.js";
import Link from "next/link";
import { Fragment } from "react";
import StudyTwoBrief from "../../components/case_study_two/StudyTwoBrief";
import SecurePayment from "../../components/case_study_two/SecurePayment";
import IncreaseCustomer from "../../components/case_study_two/IncreasedCustomer";
import Newsletter from "../../components/core/newsletter";
import ServicesCta from "../../components/services/services-cta";
import Conclusion from "../../components/case_study_two/Conclusion";
import Outsourcing from "../../components/case_study_two/Outsourcing";


export default function caseStudy() {
    return (
        <Fragment>
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
                                    <span className="block">Case Study 2:</span>
                                </h1>
                                <span className="block mt-5 text-unicodez-dark sm:text-lg">
                                    Businesses Software Company
                                </span>
                                <span className="block mt-5 text-unicodez-dark sm:text-lg">
                                    <Link href="/contact">
                                        <button className="button primary normal">Contact Us</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </main>
                </div >

                <StudyTwoBrief />
                <SecurePayment />
                <IncreaseCustomer />

                <Outsourcing />
                <Conclusion />
                <ServicesCta />
                <div className="-mt-64">
                    <Newsletter />
                </div>
            </div>
        </Fragment>

    )
};
