import Image from "next/image";
import Link from "next/link";
import Logo from "../core/logo";

const services = [
  { id: 0, title: "Custom Software Development", href: "/services/custom-software" },
  { id: 1, title: "Enterprise Software Development", href: "/services/enterprise-software" },
  { id: 2, title: "Mobile Application Development", href: "/services/mobile-applications" },
  { id: 3, title: "Cloud Software Solutions", href: "/services/cloud-solutions" },
  { id: 4, title: "Blockchain Development", href: "/services/blockchain" },
];

const products = [
  { id: 0, title: "Meetchess", href: "/products/meetchess" },
  { id: 1, title: "Meetup", href: "#" },
  { id: 2, title: "Unistack", href: "/products/unistack" },
  { id: 3, title: "InvoiceX", href: "#" },
  { id: 4, title: "Smart Checkout", href: "/products/smartcheckout" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#FBF8FB]">
      <section className="container">
        <div className="pt-56 pb-20">
          <div className="w-full">
            <Logo />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-5 lg:mt-11">
            <div>
              <h4 className="text-base text-unicodez-dark font-bold">
                Address
              </h4>
              <ul className="flex flex-col text-unicodez-text space-y-4 mt-3 font-medium">
                <li><a href="tel:+19179089911" className="cursor-pointer">+1 – 254 677 8119 </a></li>
                <li><a href="tel:+918770078276" className="cursor-pointer">+91 – 8770078276</a></li>
                <li><a href="mailto:info@unicodez.com" className="cursor-pointer">info@unicodez.com</a></li>
                <li className="flex items-start space-x-2.5">
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABQUlEQVRoge3WsUrDUBTG8X80qC1CCLg5uHSwQzfBxaGLiKPiW/gCdezQ1UfwCRQndRAXBQmCiw7dhFIIFdGESMUIGqcEoyK03ptw4fym3OXmfpyccwNCCCGEKI8FkCSJ1dw8/lC9+VHUVr1lZvbsygKY0PaGguQCVCs2G+sLY68bdZdG3dV53h/s9GF6apLd9jKLNYenMMa7fhhpfdd7prOzBMB265K+P+R1/1TfyV0nHyB+e+fcG+Dfv3DTDUZeB2HMhTcAoO8P9R38G61NfLC3onrLzJzrWPClAqlqxWatOc/hSW+sddoDt92Ama1VbQFSuQCq+4BI+/nzAUzsA+N7QO6Bv+6BQgPo+P6LmELyM1e2rAKPYaS8Ajr9OoVMZHyAbAoVMTF0ML4CxgeQKVQ24wPIFCqb8QGEEEIIIf7hEycURuUfhn7yAAAAAElFTkSuQmCC"
                    alt=""
                    height={28}
                    width={28}
                  />{" "}
                  <span>831 N Tatnal Street, Wilmington , DE – 19801 USA</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABRklEQVRoge3Wr27CUBTH8e9pBobd8gaEVE6SLZlBTewt0JMgmuIIEhDYTfMm28TEMjtBUh5hoSmmpDCxULOapbe7ITkf1Vxxz/nl/isopZRSZ0xOH8dHji4b+St5+Ondc91IVRrANQ3gmgZwTQO4VrzEu93urF7iVqslABd1TJ4kGcvlB2maAWBMk+Gwh+83rdeyHiBJMsbjV8LwmjzPERE8zyOKXpjN+tZDWN9C0+kbg8EVm82WON4CEARtul2f1eqTyeTWRpn6tlCa7snzA3G8Zb3+KsY7nUvSdG+7XF23UNliSslYddZXwJgGIh5B0C7GgqCNiGBMw3Y5+2cgSTKi6JkwvOFwOCICIsJi8c583scYO4f4dAZqeQfKrtHRqGeteag5wH/4dQvdPd2766aCs/8X0gCuaQDXNIBrGkAppZRSFXwD27peeb0XT8IAAAAASUVORK5CYII="
                    alt=""
                    height={40}
                    width={40}
                  />
                  <span>
                    6th Floor, Regal Treasure, Ayodhya Bypass, Bhopal India –
                    462003
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base text-unicodez-dark font-bold">
                Services
              </h4>
              <ul className="flex flex-col space-y-4 mt-3 font-medium">
                {services.map((service) => {
                  return (
                    <li key={service.id}>
                      <Link href={service.href}>
                        <span className="text-base text-unicodez-text hover:text-unicodez-dark cursor-pointer">
                          {service.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-base text-unicodez-dark font-bold">
                Products
              </h4>
              <ul className="flex flex-col space-y-4 mt-3 font-medium">
                {products.map((product) => {
                  return (
                    <li key={product.id}>
                      <Link href={product.href}>
                        <span className="text-base text-unicodez-text hover:text-unicodez-dark cursor-pointer">
                          {product.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-base text-unicodez-dark font-bold">
                Stay connected
              </h4>
              <div className="flex flex-wrap items-center gap-2.5 mt-5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Unicodez.Inc"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="26"
                      height="26"
                      rx="4.5"
                      fill="#E7F8FF"
                      stroke="#37B8EA"
                    />
                    <path
                      d="M17.4107 14.5622L17.8771 11.4855H14.9585V9.48978C14.9382 9.26006 14.9692 9.02867 15.0493 8.81273C15.1293 8.59678 15.2563 8.40181 15.4209 8.24225C15.5855 8.08268 15.7834 7.96259 16 7.89088C16.2167 7.81916 16.4465 7.79765 16.6724 7.82794H18V5.20784C17.2204 5.08043 16.4325 5.01096 15.6429 5C13.2403 5 11.6694 6.47359 11.6694 9.1414V11.4855H9V14.5622H11.6711V22H14.9543V14.5622H17.4107Z"
                      fill="#02273D"
                    />
                  </svg>
                </a>
                {/* Instagram */}
                {/* <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                    <rect x="0.5" y="0.5" width="26" height="26" rx="4.5" fill="#E7F8FF" stroke="#37B8EA" />
                                    <path d="M13.5018 9.65179C12.7412 9.65179 11.9978 9.8774 11.3654 10.3001C10.7331 10.7228 10.2402 11.3236 9.94919 12.0265C9.65815 12.7295 9.582 13.5029 9.73037 14.2492C9.87874 14.9954 10.245 15.6808 10.7827 16.2188C11.3205 16.7568 12.0057 17.1232 12.7516 17.2716C13.4975 17.4201 14.2707 17.3439 14.9733 17.0527C15.6759 16.7616 16.2765 16.2685 16.699 15.6359C17.1215 15.0033 17.3471 14.2595 17.3471 13.4987C17.3479 12.9933 17.249 12.4927 17.056 12.0256C16.8631 11.5585 16.5799 11.1341 16.2226 10.7767C15.8654 10.4193 15.4412 10.136 14.9743 9.94295C14.5074 9.74991 14.007 9.65097 13.5018 9.65179V9.65179ZM13.5018 15.9987C13.0073 15.9987 12.524 15.8521 12.1129 15.5773C11.7018 15.3024 11.3814 14.9118 11.1921 14.4549C11.0029 13.9979 10.9534 13.495 11.0499 13.0099C11.1463 12.5247 11.3844 12.0791 11.7341 11.7293C12.0837 11.3796 12.5291 11.1414 13.0141 11.0449C13.499 10.9484 14.0017 10.9979 14.4585 11.1872C14.9153 11.3765 15.3057 11.697 15.5804 12.1083C15.8551 12.5196 16.0017 13.0031 16.0017 13.4978C15.9998 14.1603 15.7358 14.795 15.2673 15.2632C14.7988 15.7314 14.164 15.9949 13.5018 15.9961V15.9987ZM18.4005 9.49376C18.4005 9.67128 18.3478 9.84482 18.2493 9.99242C18.1507 10.14 18.0105 10.2551 17.8466 10.323C17.6827 10.3909 17.5023 10.4087 17.3282 10.3741C17.1542 10.3395 16.9943 10.254 16.8688 10.1284C16.7434 10.0029 16.6579 9.84298 16.6233 9.66886C16.5887 9.49475 16.6064 9.31428 16.6743 9.15027C16.7423 8.98626 16.8572 8.84608 17.0048 8.74745C17.1523 8.64882 17.3258 8.59618 17.5033 8.59618C17.6212 8.59583 17.7381 8.61883 17.8472 8.66387C17.9563 8.70891 18.0554 8.77509 18.1388 8.8586C18.2222 8.94211 18.2882 9.04131 18.3331 9.15047C18.378 9.25963 18.4009 9.3766 18.4005 9.49464V9.49376ZM20.9474 10.4029C20.9723 9.23642 20.5371 8.10707 19.7361 7.25914C18.8859 6.46247 17.7583 6.02953 16.5936 6.0526C15.3512 5.98247 11.6444 5.98247 10.4064 6.0526C9.24173 6.02863 8.1139 6.46134 7.26394 7.25825C6.46406 8.10729 6.02911 9.2364 6.05258 10.4029C5.98247 11.6458 5.98247 15.3542 6.05258 16.5927C6.02771 17.7591 6.46288 18.8885 7.26394 19.7364C8.11372 20.5342 9.2412 20.9687 10.4064 20.9474C11.6488 21.0175 15.3556 21.0175 16.5936 20.9474C17.7596 20.9723 18.8885 20.5369 19.7361 19.7355C20.5343 18.8858 20.969 17.7577 20.9474 16.5918C21.0175 15.3489 21.0175 11.644 20.9474 10.4055V10.4029ZM19.35 17.9182C19.2227 18.2408 19.0306 18.5339 18.7854 18.7792C18.5402 19.0244 18.2473 19.2167 17.9248 19.344C16.938 19.7355 14.5951 19.645 13.5044 19.645C12.4138 19.645 10.0674 19.7338 9.08409 19.344C8.76117 19.2174 8.46771 19.0257 8.22193 18.7809C7.97614 18.5361 7.78328 18.2433 7.6553 17.9209C7.26394 16.9336 7.35446 14.5898 7.35446 13.4987C7.35446 12.4075 7.26572 10.0602 7.6553 9.07648C7.78267 8.75375 7.97499 8.46065 8.22032 8.21538C8.46564 7.9701 8.75874 7.77789 9.08142 7.65066C10.0683 7.25914 12.4111 7.34969 13.5018 7.34969C14.5924 7.34969 16.9388 7.26091 17.9221 7.65066C18.2446 7.77799 18.5376 7.97025 18.7827 8.21552C19.0279 8.46079 19.2201 8.75384 19.3474 9.07648C19.7387 10.0637 19.6482 12.4075 19.6482 13.4987C19.6482 14.5898 19.7387 16.9363 19.3474 17.9209L19.35 17.9182Z" fill="#02273D" />
                                </svg> */}
                {/* Twitter */}
                {/* <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                    <rect x="0.5" y="0.5" width="26" height="26" rx="4.5" fill="#E7F8FF" stroke="#37B8EA" />
                                    <path d="M20.3552 10.2383C20.3652 10.3806 20.3652 10.523 20.3652 10.6653C20.3737 11.8935 20.1381 13.1111 19.6723 14.2475C19.2064 15.3838 18.5195 16.4162 17.6514 17.2847C16.7833 18.1532 15.7514 18.8404 14.6157 19.3065C13.4799 19.7726 12.2628 20.0083 11.0352 19.9998C9.25009 20.0044 7.50161 19.4931 6 18.5272C6.26299 18.5563 6.52746 18.5699 6.79204 18.568C8.26763 18.5724 9.70169 18.0794 10.863 17.1686C10.1788 17.1561 9.51554 16.9302 8.96589 16.5223C8.41624 16.1145 8.00762 15.5451 7.79709 14.8936C8.00186 14.926 8.20879 14.943 8.41611 14.9444C8.70725 14.9436 8.99712 14.9061 9.2789 14.8328C8.53591 14.6824 7.86796 14.2791 7.38863 13.6916C6.90931 13.104 6.64823 12.3685 6.64978 11.6101V11.5693C7.10435 11.8228 7.61231 11.9654 8.13236 11.9855C7.43711 11.5211 6.94504 10.8089 6.75643 9.99406C6.56783 9.17924 6.69689 8.32313 7.11732 7.60022C7.94101 8.61449 8.9686 9.44423 10.1334 10.0356C11.2983 10.627 12.5743 10.9668 13.8789 11.033C13.8262 10.7859 13.7988 10.5341 13.7974 10.2814C13.7978 9.62329 13.9959 8.9805 14.3659 8.4364C14.736 7.8923 15.2609 7.47201 15.8726 7.23003C16.4843 6.98804 17.1546 6.93555 17.7964 7.07934C18.4383 7.22313 19.0222 7.55658 19.4724 8.03644C20.2066 7.89479 20.9107 7.62666 21.5532 7.24401C21.3086 8.00218 20.796 8.64503 20.1114 9.05198C20.7627 8.97787 21.3993 8.80672 22 8.54421C21.5507 9.19685 20.9946 9.76905 20.3552 10.2368V10.2383Z" fill="#02273D" />
                                </svg> */}
                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/company/unicodez-inc"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="26"
                      height="26"
                      rx="4.5"
                      fill="#E7F8FF"
                      stroke="#37B8EA"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1074 11.8584H14.1191V12.8605C14.4089 12.2841 15.1521 11.7663 16.2684 11.7663C18.4086 11.7663 18.9166 12.9135 18.9166 15.0185V18.9168H16.75V15.4978C16.75 14.2991 16.4602 13.6231 15.7224 13.6231C14.6992 13.6231 14.274 14.3517 14.274 15.4973V18.9168H12.1074V11.8584V11.8584ZM8.39206 18.8247H10.5587V11.7663H8.39206V18.8247V18.8247ZM10.8691 9.46475C10.8692 9.64635 10.8332 9.82617 10.7631 9.99373C10.6931 10.1613 10.5905 10.3133 10.4612 10.4408C10.1993 10.7012 9.84471 10.8469 9.4754 10.846C9.10673 10.8457 8.75298 10.7004 8.49065 10.4414C8.36184 10.3134 8.25956 10.1612 8.18967 9.99365C8.11977 9.82606 8.08363 9.64633 8.08331 9.46475C8.08331 9.09804 8.22956 8.74704 8.49119 8.48812C8.75329 8.22875 9.10719 8.08333 9.47594 8.0835C9.84535 8.0835 10.1996 8.2292 10.4612 8.48812C10.7223 8.74704 10.8691 9.09804 10.8691 9.46475Z"
                      fill="#02273D"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-base text-unicodez-text mt-5">
                We bring the years, global experience, and stamina to guide our
                clients through new and often disruptive realities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-unicodez-gray">
        <div className="container py-10">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <Link href={"/terms&conditions"}>
              <span className="text-base text-white hover:text-opacity-80">
                Privacy Policy
              </span>
            </Link>
            <p className="text-white">
              &copy; All Rights Reserved. 2022 UNICODEZ
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
