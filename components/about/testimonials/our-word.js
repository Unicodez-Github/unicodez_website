import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    id: 0,
    title: "Sonarqube",
    excerpt:
      "“I genuinely can’t recommend Nifty Group highly enough. They were incredibly personable, understood my situation and what I wanted, and worked hard to achieve that for me.”",
    author: "Joshua Mclaughlin",
    imgPath: "/images/testimonials/sonarqube.png",
  },
  {
    id: 1,
    title: "Tailwind",
    excerpt:
      "“We’re thrilled with the end result – especially the fact that the project went live in time for a series of important meetings in the nation’s capital.”",
    author: "Richars Garret",
    imgPath: "/images/testimonials/tailwind.png",
  },
  {
    id: 2,
    title: "Chargebee",
    excerpt:
      "“I consider Nifty to have unprecedented integrity within this industry in terms of reference checking and honest feedback about candidates.”",
    author: "Maegan Mathews",
    imgPath: "/images/testimonials/chargebee.png",
  },
  {
    id: 3,
    title: "Zeit",
    excerpt:
      "“Nifty helped us develop our HR strategy while aligning it with our business philosophy and strategies.”",
    author: "Thomas Zeit",
    imgPath: "/images/testimonials/zeit.png",
  },
];

export default function OurWord() {
  const swiperOptions = {
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    autoplay: {
      delay: 4000,
    },
  };
  return (
    <section className="w-full pt-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Don’t take our word for it; take theirs!
          </h2>
        </div>
        <div className="mt-20 cursor-grab py-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            breakpoints={swiperOptions.breakpoints}
            pagination={swiperOptions.pagination}
            autoplay={swiperOptions.autoplay}
          >
            {testimonials.map((testimonial, id) => {
              return (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className={`
                      flex flex-col items-start text-left p-10 rounded-3xl min-h-[400px]
                      ${id === 0 && "bg-[#D1E6EB]"} 
                      ${id === 1 && "bg-unicodez-dark"} 
                      ${id === 2 && "bg-[#F7F6BE]"}
                      ${id === 3 && "bg-[#F8E4D1]"}
                    `}
                  >
                    <div className="relative mt-14 w-[280px] h-auto">
                      <Image
                        src={testimonial.imgPath}
                        alt={testimonial.title}
                        layout="intrinsic"
                        width={"100%"}
                        height={"40%"}
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <p
                      className={`text-left text-base max-w-sm mt-5 leading-7 ${
                        id === 1
                          ? "text-white text-opacity-70"
                          : "text-unicodez-text"
                      }`}
                    >
                      {testimonial.excerpt}
                    </p>
                    <div
                      className={`w-full flex justify-end mt-14 ${
                        id === 1 ? "text-white" : "text-unicodez-dark"
                      }`}
                    >
                      {testimonial.author}{" "}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
