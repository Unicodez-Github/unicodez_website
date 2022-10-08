import Image from "next/image";

export default function HowWeGetItDone() {
    return (
        <section className="w-full py-32"  data-aos="fade-up">
            <div className="container">
                <div className="flex flex-col justify-center items-center text-unicodez-dark">
                    <h2 className="section-title text-center leading-snug">Here’s How We Get The Job Done</h2>
                    <p className="mt-4 text-unicodez-text text-xl font-medium text-center max-w-2xl leading-10">We are your trusted custom software development company that explores some of the latest trends and strategies</p>
                </div>
                <div className="w-full mt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
                        <div className="flex flex-col items-center text-center">
                            <Image src="/images/icons/delivery.svg" alt="High quality delivery" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">High-Quality Delivery</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">We dot our I&apos;s and cross our T&apos;s. Our quality and standard are uncompromising.</p>
                        </div>
                        <div className="flex flex-col items-center text-center lg:mt-12">
                            <Image src="/images/icons/professionalism.svg" alt="Team of Professionals" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Team of Professionals</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">Our team is made of certified professionals who offer quick and effective solutions.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src="/images/icons/solutions.svg" alt="Unique Solutions" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Unique Solutions</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">Unique solutions for unique businesses. Our solutions are crafted for your convenience.</p>
                        </div>
                        <div className="flex flex-col items-center text-center lg:mt-12">
                            <Image src="/images/icons/effective.svg" alt="Cost-Effective Solutions" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Cost-Effective Solutions</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">Budget and startup-friendly solutions. We help you make money while saving money.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}