import Link from "next/link";

const developerFeatures = [
  {
    id: 0,
    title: "Choose the right developer",
  },
  {
    id: 1,
    title: "Grill them before hire",
  },
  {
    id: 2,
    title: "Experts on multiple technologies",
  },
  {
    id: 3,
    title: "Highly Cost effective",
  },
  {
    id: 4,
    title: "We take care of execution",
  },
  {
    id: 5,
    title: "Hassle free hiring",
  },
];

const teamFeatures = [
  {
    id: 0,
    title: "Pick the job experts",
  },
  {
    id: 1,
    title: "Customize the team at your will",
  },
  {
    id: 2,
    title: "Hassle free team scaling",
  },
  {
    id: 3,
    title: "Save a fortune at inhouse hiring",
  },
  {
    id: 4,
    title: "Project Managers, Delivery managers & scrum masters",
  },
  {
    id: 5,
    title: "Speed up the development",
  },
];

const scaleFeatures = [
  {
    id: 0,
    title: "Digital Transformation",
  },
  {
    id: 1,
    title: "Software Migration",
  },
  {
    id: 2,
    title: "Software integration",
  },
  {
    id: 3,
    title: "Legacy application Modernization",
  },
  {
    id: 4,
    title: "Cost-effective price packages",
  },
  {
    id: 5,
    title: "Data Management",
  },
];

export default function HowCanWeHelp() {
  return (
    <section className="w-full py-24" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            How Can We Help You Today?
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center">
            You’ve got the job, we’ve got the skills.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-20 mt-20">
          {/* Hire a Developer */}
          <div className="flex flex-col items-center text-left p-6 lg:p-10  pb-16 rounded-3xl bg-[#D1E6EB]">
            <h3 className="text-center text-2xl font-semibold mt-12 max-w-sm leading-10">
              Hire a Software Developer
            </h3>
            <p className="text-center text-lg font-medium max-w-xs mt-5 leading-7 text-unicodez-text">
              Need an expert for the Job
            </p>
            <div className="w-full h-[1px] bg-white bg-opacity-30 rounded mt-10"></div>
            <div className="mt-16">
              <ul className="flex flex-col space-y-7">
                {developerFeatures.map((feature) => (
                  <li className="flex items-center" key={feature.id}>
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-none"
                    >
                      <path
                        d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z"
                        fill="white"
                      />
                      <path
                        d="M19.5779 13.7971H15.3349V9.55409C15.3349 9.36751 15.2608 9.18857 15.1289 9.05664C14.9969 8.9247 14.818 8.85059 14.6314 8.85059C14.4448 8.85059 14.2659 8.9247 14.134 9.05664C14.002 9.18857 13.9279 9.36751 13.9279 9.55409V13.7961H9.68592C9.49934 13.7961 9.3204 13.8702 9.18847 14.0021C9.05654 14.1341 8.98242 14.313 8.98242 14.4996C8.98242 14.6862 9.05654 14.8651 9.18847 14.997C9.3204 15.129 9.49934 15.2031 9.68592 15.2031H13.9279V19.4461C13.9279 19.6327 14.002 19.8116 14.134 19.9435C14.2659 20.0755 14.4448 20.1496 14.6314 20.1496C14.818 20.1496 14.9969 20.0755 15.1289 19.9435C15.2608 19.8116 15.3349 19.6327 15.3349 19.4461V15.2031H19.5779C19.7645 15.2031 19.9434 15.129 20.0754 14.997C20.2073 14.8651 20.2814 14.6862 20.2814 14.4996C20.2814 14.313 20.2073 14.1341 20.0754 14.0021C19.9434 13.8702 19.7645 13.7961 19.5779 13.7961V13.7971Z"
                        fill="#37B8EA"
                      />
                    </svg>
                    <span className="ml-5 text-sm lg:text-base text-unicodez-dark">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-wrap  lg:px-10  justify-center mt-16">
              <Link href={"/contact"}>
                <button className="w-full button primary normal text-center">
                  Hire a Developer
                </button>
              </Link>
            </div>
          </div>
          {/* Hire a Team */}
          <div className="flex flex-col items-center text-left p-6 lg:p-10  pb-16 rounded-3xl bg-[#1B1A20]">
            <h3 className="text-white text-center text-2xl font-semibold mt-12 max-w-sm leading-10">
              Hire a Team
            </h3>
            <p className="text-center text-lg font-medium text-white text-opacity-70 max-w-[300px] mx-auto mt-5 leading-7">
              Need a Team for the job
            </p>
            <div className="w-full h-[1px] bg-white bg-opacity-30 rounded mt-10"></div>
            <div className="mt-16">
              <ul className="flex flex-col space-y-7">
                {teamFeatures.map((feature) => (
                  <li className="flex items-center" key={feature.id}>
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-none"
                    >
                      <path
                        d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z"
                        fill="white"
                      />
                      <path
                        d="M19.5779 13.7971H15.3349V9.55409C15.3349 9.36751 15.2608 9.18857 15.1289 9.05664C14.9969 8.9247 14.818 8.85059 14.6314 8.85059C14.4448 8.85059 14.2659 8.9247 14.134 9.05664C14.002 9.18857 13.9279 9.36751 13.9279 9.55409V13.7961H9.68592C9.49934 13.7961 9.3204 13.8702 9.18847 14.0021C9.05654 14.1341 8.98242 14.313 8.98242 14.4996C8.98242 14.6862 9.05654 14.8651 9.18847 14.997C9.3204 15.129 9.49934 15.2031 9.68592 15.2031H13.9279V19.4461C13.9279 19.6327 14.002 19.8116 14.134 19.9435C14.2659 20.0755 14.4448 20.1496 14.6314 20.1496C14.818 20.1496 14.9969 20.0755 15.1289 19.9435C15.2608 19.8116 15.3349 19.6327 15.3349 19.4461V15.2031H19.5779C19.7645 15.2031 19.9434 15.129 20.0754 14.997C20.2073 14.8651 20.2814 14.6862 20.2814 14.4996C20.2814 14.313 20.2073 14.1341 20.0754 14.0021C19.9434 13.8702 19.7645 13.7961 19.5779 13.7961V13.7971Z"
                        fill="#37B8EA"
                      />
                    </svg>
                    <span className="ml-5 text-sm lg:text-base text-white">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-wrap  lg:px-10 justify-center mt-16">
              <Link href={"/contact"}>
                <button className="w-full button white normal text-center">
                  Hire a Team
                </button>
              </Link>
            </div>
          </div>
          {/* Scale your Business Digitally*/}
          <div className="flex flex-col items-start text-left p-6 lg:p-10  pb-16 rounded-3xl bg-[#FFEFE0]">
            <h3 className="text-center text-2xl font-semibold mt-12 max-w-sm mx-auto leading-10">
              Scale your business Digitally
            </h3>
            <p className="text-center text-lg font-medium max-w-[300px] mx-auto mt-5 leading-7  text-unicodez-text">
              Enterprise solutions for your business
            </p>
            <div className="w-full h-[1px] bg-white rounded mt-10"></div>
            <div className="mt-16">
              <ul className="flex flex-col space-y-7">
                {scaleFeatures.map((feature) => (
                  <li className="flex items-center" key={feature.id}>
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-none"
                    >
                      <path
                        d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z"
                        fill="white"
                      />
                      <path
                        d="M19.5779 13.7971H15.3349V9.55409C15.3349 9.36751 15.2608 9.18857 15.1289 9.05664C14.9969 8.9247 14.818 8.85059 14.6314 8.85059C14.4448 8.85059 14.2659 8.9247 14.134 9.05664C14.002 9.18857 13.9279 9.36751 13.9279 9.55409V13.7961H9.68592C9.49934 13.7961 9.3204 13.8702 9.18847 14.0021C9.05654 14.1341 8.98242 14.313 8.98242 14.4996C8.98242 14.6862 9.05654 14.8651 9.18847 14.997C9.3204 15.129 9.49934 15.2031 9.68592 15.2031H13.9279V19.4461C13.9279 19.6327 14.002 19.8116 14.134 19.9435C14.2659 20.0755 14.4448 20.1496 14.6314 20.1496C14.818 20.1496 14.9969 20.0755 15.1289 19.9435C15.2608 19.8116 15.3349 19.6327 15.3349 19.4461V15.2031H19.5779C19.7645 15.2031 19.9434 15.129 20.0754 14.997C20.2073 14.8651 20.2814 14.6862 20.2814 14.4996C20.2814 14.313 20.2073 14.1341 20.0754 14.0021C19.9434 13.8702 19.7645 13.7961 19.5779 13.7961V13.7971Z"
                        fill="#37B8EA"
                      />
                    </svg>
                    <span className="ml-5 text-sm lg:text-base text-unicodez-dark">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-wrap  lg:px-10 justify-center mt-16">
              <Link href={"/contact"}>
                <button className="w-full button orange normal text-center">
                  Talk To Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
