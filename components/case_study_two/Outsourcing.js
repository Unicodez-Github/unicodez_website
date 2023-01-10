import Image from "next/image";
import cost from '../../public/images/clients/studyTwo/cost.png';
import flexibility from '../../public/images/clients/studyTwo/efficiency.png';
import expertise from '../../public/images/clients/studyTwo/quality.png';
import scalability from '../../public/images/clients/studyTwo/skills.png';



export default function Outsourcing() {
    return (
        <section className="w-full py-12 bg-[#F9F9FC]" data-aos="fade-up">
            <div className="container">
                <div className="flex flex-col justify-center items-center text-unicodez-dark">
                    <h2 className="section-title text-center leading-snug">
                        Outsourcing Software Needs for Enhanced Service Optimization
                    </h2>
                    <p className="text-center mt-5">
                        As businesses continue to expand in the modern digital world, one of the best ways to position them for success and ensure their services are optimized is to outsource their software needs. Outsourcing software needs can be a daunting task, but it can provide a number of benefits that help businesses stay competitive, while also allowing them to focus on their core competencies. In this article, we will discuss why a company determined to optimize their services should outsource their software needs, including cost savings, increased efficiency, improved quality, and access to specialized skills.
                    </p>
                </div>
                <div className="w-full mt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className="flex flex-col items-center text-center">
                            <Image src={cost} alt="High quality delivery" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Cost Saving</h3>
                            <p className="text-base text-unicodez-text leading-[30px] mt-5">
                                One of the primary reasons why a company determined to optimize their services should outsource their software needs is to save money. Outsourcing software needs can save companies money in a number of ways, including reduced labor costs, lower overhead expenses, and reduced capital costs. For example, outsourcing software development can help companies save money on labor costs by allowing them to hire specialized software developers on a part-time or project basis, instead of hiring full-time employees. Additionally, outsourcing software needs can help companies save money on overhead expenses, as they will no longer have to pay for office space, equipment, and other expenses associated with in-house software development. Finally, outsourcing software needs can help companies save money on capital costs, as they no longer have to invest in expensive software development tools and technologies.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src={flexibility} alt="Team of Professionals" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Increased Efficiency</h3>
                            <p className="text-base text-unicodez-text leading-[30px] mt-5">
                                Outsourcing software needs can also help companies increase their efficiency by allowing them to focus on their core competencies and outsource the rest. By outsourcing software needs, companies can free up internal resources and focus on tasks that are more closely related to their core business objectives. Additionally, outsourcing software needs can help companies save time, as they can quickly and easily access the necessary software development expertise on a project basis, rather than having to search for and hire full-time employees.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src={expertise} alt="Unique Solutions" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Improved Quality</h3>
                            <p className="text-base text-unicodez-text leading-[30px] mt-5">
                                Outsourcing software needs can also help companies improve the quality of their services. By outsourcing software needs, companies can access the latest and most up-to-date software development tools and technologies. Additionally, outsourcing software needs can help companies access specialized expertise and knowledge, as software developers can offer specialized skills and insights that would otherwise be unavailable. This can help companies create more robust and reliable software solutions that are tailored to their specific needs.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center lg:mr-12">
                            <Image src={scalability} alt="Cost-Effective Solutions" width={108} height={108} />
                            <h3 className="text-2xl text-unicodez-dark font-bold mt-8">Access to Specialized Skills

                            </h3>
                            <p className="text-base text-unicodez-text leading-[30px] mt-5">
                                Finally, outsourcing software needs can help companies access specialized skills and knowledge. By outsourcing software needs, companies can access the expertise of experienced software developers who have the necessary skills and knowledge to handle complex software development tasks. Additionally, outsourcing software needs can help companies access the latest software development tools and technologies, which can help them create more reliable and secure software solutions
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
