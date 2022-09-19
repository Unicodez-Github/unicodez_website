import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const posts = [
  {
    id: 0,
    title: "Why Purpose-Driven Employers Succeed",
    excerpt:
      "We Live our Purpose: A company’s purpose can’t just be words on a wall or in an employee handbook. All companies start with a purpose...",
    date: "January 11, 2018",
    imgPath: "/images/posts/1.jpg",
  },
  {
    id: 1,
    title: "Why Purpose-Driven Employers Succeed",
    excerpt:
      "Every leader knows that communication during a crisis is critical. When leaders communicate with urgency, transparency, and empathy...",
    date: "January 11, 2018",
    imgPath: "/images/posts/2.jpg",
  },
  {
    id: 2,
    title: "Statistics You Need to Share With Your Leaders- The Super 7 Techs.",
    excerpt:
      "There are questions you and your leadership team are probably asking, and we’re here to help you find the answers. With this list of the...",
    date: "January 11, 2018",
    imgPath: "/images/posts/3.jpg",
  },
  {
    id: 3,
    title: "Another Purpose-Driven Tech Success In The Field",
    excerpt:
      "Every leader knows that communication during a crisis is critical. When leaders communicate with urgency, transparency, and empathy...",
    date: "January 26, 2018",
    imgPath: "/images/posts/2.jpg",
  },
  {
    id: 4,
    title: "Tell The World What You Know Today.",
    excerpt:
      "There are questions you and your leadership team are probably asking, and we’re here to help you find the answers. With this list of the islands top five...",
    date: "January 11, 2018",
    imgPath: "/images/posts/1.jpg",
  },
];

export default function LatestArticles() {
  const swiperOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
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
    <section className="w-full py-32" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Latest Articles
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center max-w-md">
            We explore some of the latest trends and strategies
          </p>
        </div>
        <div className="w-full mt-32">
          <Swiper
            modules={[Pagination, Autoplay]}
            breakpoints={swiperOptions.breakpoints}
            pagination={swiperOptions.pagination}
            autoplay={swiperOptions.autoplay}
          >
            {posts.map((post, id) => {
              return (
                <SwiperSlide key={post.id}>
                  <div
                    className={`flex flex-col items-center text-center p-10 rounded-3xl ${
                      (id === 0 || id === 3) && "bg-[#D1E6EB]"
                    } ${(id === 1 || id === 4)&& "bg-unicodez-dark"} ${
                      id === 2 && "bg-[#F7F6BE]"
                    }`}
                    key={post.id}
                  >
                    <div className="w-full flex justify-between items-center">
                      <span
                        className={`text-4xl text-unicodez-dark font-bold ${
                          (id === 1 || id === 4) ? "text-white" : "text-unicodez-dark"
                        }`}
                      >
                        0{id + 1}
                      </span>
                      <div
                        className={`flex items-center text-unicodez-dark hover:text-opacity-90 cursor-pointer ${
                          (id === 1 || id === 4)? "text-white" : "text-unicodez-dark"
                        }`}
                      >
                        <a href="#" className="flex-shrink-0">
                          See More
                        </a>
                        <ArrowRightIcon className="ml-3 h-5 w-5" />
                      </div>
                    </div>
                    <div className="relative mt-14">
                      <Image
                        src={`/images/posts/${id + 1}.jpg`}
                        alt={post.title}
                        width={387}
                        height={263}
                        className="rounded-lg"
                      />
                    </div>
                    <h3
                      className={`text-left text-xl font-bold mt-8 ${
                        (id === 1 || id === 4) ? "text-white" : "text-unicodez-dark"
                      }`}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={`text-left text-base max-w-sm mt-5 leading-7 ${
                        (id === 1 || id === 4)
                          ? "text-white text-opacity-70"
                          : "text-unicodez-text"
                      }`}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      className={`w-full flex justify-end mt-14 ${
                        (id === 1 || id === 4) ? "text-white" : "text-unicodez-dark"
                      }`}
                    >
                      {post.date}{" "}
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
