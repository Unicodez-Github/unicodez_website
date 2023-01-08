import Link from "next/link";
import Image from "next/image";
import HTML from '../../public/images/clients/HTML.png';
import CSS from '../../public/images/clients/CSS.png'
import JS from '../../public/images/clients/JavaScript.png';
import PHP from '../../public/images/clients/PHP_Python.png'
import JQUERY from '../../public/images/clients/jquery.png';
export default function LanguageList() {
    return (
        <section className="w-full py-5" data-aos="fade-up">
            <div className="container">
                <div className="flex flex-col justify-center items-center text-unicodez-dark">
                    <div className="flex flex-wrap justify-center gap-x-20 gap-y-24 mt-24">
                        <div className="w-full grid lg:grid-cols-3 gap-x-20 gap-y-24">
                            <div className="w-full  bg-[#F0FFF6] rounded-[20px]">
                                <div className="flex flex-col items-center space-y-10 p-7">
                                    <Image src={HTML} alt="html" />
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <h2 className="text-md font-semibold text-unicodez-dark leading-10">
                                            HTML
                                        </h2>
                                        <p className="mt-5 text-unicodez-text text-base leading-[25px]">
                                            HTML stands for HyperText Markup Language. It is the foundation of all web pages and is used to create the basic structure and content of a web page. HTML is not a programming language, but rather a markup language that is used to describe the structure of a web page. It uses tags to define the structure of a page, such as headings, paragraphs, lists, images, and links. HTML is used to define the content of a web page, such as text, images, and multimedia elements.
                                            <span className="block mt-5 text-unicodez-dark sm:text-lg">
                                                <Link href="/contact">
                                                    <button className="button primary normal">Contact Us</button>
                                                </Link>
                                            </span>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-[#FFFBED] rounded-[20px]">
                                <div className="flex flex-col items-center space-y-10 p-7">
                                    <Image src={CSS} alt="CSS" />
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <h2 className="text-md font-semibold text-unicodez-dark leading-10">
                                            CSS
                                        </h2>
                                        <p className="mt-5 text-unicodez-text text-base leading-[25px]">
                                            CSS stands for Cascading Style Sheets. It is a styling language used to define the look and feel of a web page. CSS is used to define the layout, typography, and color of a web page. CSS styles are applied to HTML elements, allowing designers to create a unique look and feel for their web pages. CSS can also be used to create interactivity, such as dropdown menus, animations, and transitions.

                                            <span className="block mt-5 text-unicodez-dark sm:text-lg">
                                                <Link href="/contact">
                                                    <button className="button primary normal">Contact Us</button>
                                                </Link>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-[#FFF5F3] rounded-[20px]">
                                <div className="flex flex-col items-center space-y-10 p-7">
                                    <Image src={JQUERY} alt="jquery" />

                                    <div className="flex flex-col items-center justify-center text-center">
                                        <h2 className="text-md font-semibold text-unicodez-dark leading-10">
                                            Jquery
                                        </h2>
                                        <p className="mt-5 text-unicodez-text text-base leading-[25px]">
                                            jQuery is a JavaScript library that simplifies the creation of interactive web applications. It is used to create dynamic user interfaces and animation effects, as well as to simplify the development of complex JavaScript applications. jQuery is used to simplify the manipulation of HTML elements, as well as to create custom functions and plugins.

                                            <span className="block mt-5 text-unicodez-dark sm:text-lg">
                                                <Link href="/contact">
                                                    <button className="button primary normal">Contact Us</button>
                                                </Link>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 bg-[#F4FCFF] rounded-[20px]">
                            <div className="flex flex-col items-center space-y-10 p-7">
                                <Image src={PHP} alt="php" />

                                <div className="flex flex-col items-center justify-center text-center">
                                    <h2 className="text-md font-semibold text-unicodez-dark leading-10">
                                        PHP/Python
                                    </h2>
                                    <p className="mt-5 text-unicodez-text text-base leading-[25px]">
                                        PHP and Python are two of the most popular server-side scripting languages. They are used to create dynamic web pages and applications. PHP and Python are used to create web applications that can respond to user input, interact with databases, and create complex web applications.

                                        <span className="block mt-5 text-unicodez-dark sm:text-lg">
                                            <Link href="/contact">
                                                <button className="button primary normal">Contact Us</button>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 bg-[#F5F6FF] rounded-[20px]">
                            <div className="flex flex-col items-center space-y-10 p-7">
                                <Image src={JS} alt="html" />

                                <div className="flex flex-col items-center justify-center text-center">
                                    <h2 className="text-md font-semibold text-unicodez-dark leading-10">
                                        JavaScript
                                    </h2>
                                    <p className="mt-5 text-unicodez-text text-base leading-[25px]">
                                        JavaScript is a scripting language used to create interactive web applications. It is used to add dynamic elements to a web page, such as interactive menus, forms, and animations. JavaScript is used to create complex web applications, such as games, e-commerce sites, and web-based applications. JavaScript can also be used to create web applications that run on mobile devices.

                                        <span className="block mt-5 text-unicodez-dark sm:text-md">
                                            <Link href="/contact">
                                                <button className="button primary normal">Contact Us</button>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
