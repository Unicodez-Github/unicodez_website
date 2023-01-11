import Image from "next/image";
import Link from "next/link";
import first from '../../public/images/posts/1.jpg';
import second from '../../public/images/posts/2.jpg';

export default function CaseCatalog() {
    return (
        <section className="w-full py-24" id="products" data-aos="fade-up">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 mt-20">
                    {/* Meetchess */}
                    <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#FFF2CD]">
                        <div className="relative w-full h-full max-h-[240px]">
                            <Image
                                src={second}
                                layout="responsive"
                                objectFit="cover"
                                alt={"Meetchess"}
                                width={"100%"}
                                height={"60%"}
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
                            Case Study 1
                        </h3>
                        <div className="inline-flex mt-10">
                            <Link href={"/successful-app-development-case-study"}>
                                <button className="button primary normal text-center cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Meetup */}
                    <div className="flex flex-col items-start text-left p-10 pb-16 rounded-3xl bg-[#1B1A20]">
                        <div className="relative w-full h-full max-h-[240px]">
                            <Image
                                src={first}
                                layout="responsive"
                                objectFit="cover"
                                alt={"Meetup"}
                                width={"100%"}
                                height={"60%"}
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-white text-left text-2xl font-semibold mt-12 max-w-xs leading-10">
                            Case Study 2
                        </h3>
                        <div className="inline-flex mt-10">
                            <Link href={"/successful-payment-software-development-case-study"}>
                                <button className="button primary normal text-center cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
