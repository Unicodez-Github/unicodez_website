import Image from "next/image";

const team = [
  {
    id: 0,
    name: "Pramod Shukl",
    role: "CEO & Co-Founder",
    quote:
      "Pramod specializes in earning the trust of clients. As a Marketing professional, he’s mainly worked from Fortune 500 to small- to medium-sized companies in the technology sector.",
    email: "info@unicodez.com",
    linkedin: "#",
    picture: "/images/team/pramod-unicodez.png",
  },
  {
    id: 1,
    name: "Anmol Shrivastava",
    role: "COO & Co-founder",
    quote:
      "Anmol Shrivastava holds a Master's Degree in Computer Applications and has many years of experience in the IT industry. Her skills and experience make her a superb COO & Co-Founder. ",
    email: "info@unicodez.com",
    linkedin: "#",
    picture: "/images/team/anmolf.png",
  },
  {
    id: 2,
    name: "Saurav Yadav",
    role: "CTO & Co-Founder",
    quote:
      "Saurav Yadav earned a Bachelor’s in Information technology and a Master’s in IT & Marketing. The tech-savvy professional is also the co-founder of Unicodez.",
    email: "info@unicodez.com",
    linkedin: "#",
    picture: "/images/team/suarav-unicodez.png",
  },
  {
    id: 3,
    name: "Tom Wood, Jr.",
    role: "Business Development Specialist",
    quote:
      "Tom Wood holds Master’s Degrees in International Business Administration and Environmental Sciences.  He has spent many years in Business Development, specializing in software sales across a wide range of vertical industries.",
    email: "tom@unicodez.com",
    linkedin: "https://www.linkedin.com/in/tom-wood-jr-5404346/",
    picture: "/images/team/tom.png",
  },
];


export default function TeamGrid() {
  return (
    <div className="w-full py-28" data-aos="zoom-in">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20">
          {team.map((item) => {
            return (
              <div
                className={`min-h-[700px] lg:min-h-[700px] rounded-[20px] text-unicodez-dark p-10 lg:p-16 relative overflow-hidden ${item.id === 0
                  ? "bg-[#CFB838]"
                  : item.id === 1
                    ? "bg-[#E0E0E0]"
                    : item.id === 2
                      ? "bg-[#D1E6EB]"
                      : item.id == 3
                        ? "bg-[#EC4699]"
                        : "bg-[#D3D4FF]"
                  }`}
                key={item.id}
              >
                <h3 className="text-3xl font-bold leading-[35px]">
                  {item.name}
                </h3>
                <p className="text-2xl font-semibold mt-4">{item.role}</p>
                <p className="mt-10 max-w-md leading-10 z">{item.quote}</p>
                <div className="absolute -bottom-10 lg:bottom-0 w-full">
                  <div className="w-full h-full flex justify-between relative">
                    <div className="flex flex-col h-full items-end">
                      <div className="inline-flex flex-col justify-end gap-4 lg:mt-28">
                        {/* Email */}
                        <a
                          href={`mailto:${item.email}`}
                          className="hover:opacity-90 transition"
                        >
                          <svg
                            width="72"
                            height="72"
                            viewBox="0 0 72 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="36" cy="36" r="36" fill="white" />
                            <path
                              opacity="0.4"
                              d="M49 40.5345C49.0045 42.2439 48.3182 43.8852 47.0921 45.0976C45.8659 46.31 44.2002 46.9943 42.461 47H29.565C27.8258 47.001 26.1573 46.3233 24.9263 45.1157C23.6953 43.9081 23.0024 42.2695 23 40.56V40.5472C23 40.5472 23.0078 34.8918 23.0182 32.0462C23.0189 31.9267 23.0536 31.8099 23.1185 31.7089C23.1833 31.6079 23.2757 31.5268 23.3851 31.4747C23.4944 31.4227 23.6165 31.4019 23.7373 31.4146C23.8581 31.4273 23.9729 31.473 24.0686 31.5466C27.16 33.9552 32.6811 38.3469 32.75 38.4044C33.684 39.1381 34.8434 39.539 36.039 39.5416C37.2371 39.5409 38.3985 39.1348 39.328 38.3916C39.3969 38.3456 44.7971 34.0906 47.9327 31.6373C48.0283 31.5626 48.1433 31.516 48.2646 31.5026C48.386 31.4893 48.5087 31.5098 48.6187 31.5618C48.7287 31.6138 48.8216 31.6952 48.8867 31.7967C48.9519 31.8982 48.9866 32.0156 48.987 32.1356C49 34.9582 49 40.5345 49 40.5345Z"
                              fill="#200E32"
                            />
                            <path
                              d="M48.319 27.4168C47.7618 26.3853 46.9295 25.5223 45.9113 24.9203C44.8931 24.3184 43.7274 24.0003 42.5392 24H29.5652C28.3768 24 27.2108 24.3181 26.1924 24.92C25.1739 25.5219 24.3414 26.3851 23.7841 27.4168C23.6618 27.6436 23.6237 27.9051 23.6764 28.1565C23.7291 28.4079 23.8692 28.6334 24.0727 28.7942L33.7252 36.3829C34.38 36.9037 35.197 37.1874 36.0392 37.1867H36.0652C36.9075 37.1874 37.7244 36.9037 38.3792 36.3829L48.0317 28.7942C48.235 28.6332 48.3749 28.4076 48.4273 28.1563C48.4797 27.9049 48.4414 27.6434 48.319 27.4168Z"
                              fill="#200E32"
                            />
                          </svg>
                        </a>
                        {/* Linkedin */}
                        <a
                          href={`${item.linkedin}`}
                          className="hover:opacity-90 transition"
                          target={"_blank"}
                          rel={"noreferrer"}
                        >
                          <svg
                            width="72"
                            height="72"
                            viewBox="0 0 72 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="36" cy="36" r="36" fill="white" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M32.7862 32.2112H37.4287V34.5237C38.0975 33.1937 39.8125 31.9987 42.3887 31.9987C47.3275 31.9987 48.5 34.6462 48.5 39.5037V48.5H43.5V40.61C43.5 37.8437 42.8312 36.2837 41.1287 36.2837C38.7675 36.2837 37.7862 37.965 37.7862 40.6087V48.5H32.7862V32.2112ZM24.2125 48.2875H29.2125V31.9987H24.2125V48.2875ZM29.9287 26.6875C29.9289 27.1066 29.8458 27.5215 29.6842 27.9082C29.5226 28.2949 29.2858 28.6456 28.9875 28.94C28.383 29.5408 27.5648 29.8771 26.7125 29.875C25.8617 29.8744 25.0454 29.539 24.44 28.9413C24.1428 28.6459 23.9067 28.2948 23.7454 27.908C23.5841 27.5213 23.5007 27.1065 23.5 26.6875C23.5 25.8413 23.8375 25.0313 24.4412 24.4338C25.0461 23.8352 25.8628 23.4996 26.7137 23.5C27.5662 23.5 28.3837 23.8363 28.9875 24.4338C29.59 25.0313 29.9287 25.8413 29.9287 26.6875Z"
                              fill="#02273D"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="">
                      <div className="w-60 lg:w-80 h-60 lg:h-80 relative">
                        <Image
                          src={item.picture}
                          alt={item.name}
                          layout="responsive"
                          objectFit="contain"
                          width={"100%"}
                          height={"100%"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
}
