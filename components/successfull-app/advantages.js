import Image from "next/image";
import cost from '../../public/images/clients/cost.png';
import scalability from '../../public/images/clients/scalability.png';
import time from '../../public/images/clients/time.png';
import expertise from '../../public/images/clients/expertise.png';
import flexibility from '../../public/images/clients/flexibility.png';



export default function OutsourceAdvantages() {
    return (
        <section className="w-full py-12 bg-[#F9F9FC]" data-aos="fade-up">
            <div className="container">
                <div className="flex flex-col justify-center items-center text-unicodez-dark">
                    <h2 className="section-title text-center leading-snug">
                        Here are some of the Advantages of Outsourcing Software Development
                    </h2>
                </div>
                <div className="w-full mt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        <div className="flex flex-col items-center text-center">
                            <Image src={cost} alt="High quality delivery" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Cost Saving</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">
                                The primary benefit of outsourcing software development is cost savings. Companies can save large amounts of money by outsourcing software development instead of hiring employees. Outsourcing to a software development company can result in cost savings of up to 70%. This is because the costs associated with employing a software developer, such as salary, benefits, and taxes, are much higher than those associated with outsourcing the same project to a software development company.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src={flexibility} alt="Team of Professionals" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Flexibility</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">
                                Outsourcing software development also allows companies to remain flexible. Companies can choose to outsource a project for a set period of time and then end the contract when the project is complete. This allows companies to focus their resources on more important tasks and to scale up or down their software development efforts as needed. Additionally, companies can choose to outsource projects that are too complex or time-consuming for their in-house teams.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src={expertise} alt="Unique Solutions" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Access to Expertise</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">
                                When companies outsource software development, they have access to a wide range of expertise. Software development companies have a team of experienced developers who can provide valuable insights and expertise that an in-house team may not have. Additionally, software development companies have the resources to provide specialized services not available in-house, such as mobile development, web development, and database development.

                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center lg:mr-12">
                            <Image src={scalability} alt="Cost-Effective Solutions" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Scalability</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">
                                Outsourced software development can also provide scalability. Companies can choose to outsource a project and then scale it up or down as needed. This allows companies to adjust their software development efforts in response to changes in the market or customer demand. Additionally, software development companies can provide the resources and expertise needed to quickly develop new features and applications.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <Image src={time} alt="Cost-Effective Solutions" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Time Savings</h3>
                            <p className="text-base text-unicodez-text leading-[30px] max-w-sm mt-5">
                            Finally, outsourcing software development can save companies time. Companies can outsource a project and receive a completed product much faster than if they were to develop it in-house. This can be useful for companies who need to quickly develop software for a new product or service. Additionally, software development companies can provide ongoing maintenance and support, which can be beneficial for companies who need to keep their software up-to-date and running smoothly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
